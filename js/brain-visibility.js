import {
  brainHemispheres,
  brainRegionInformation,
  getBrainRegionMeshNames
} from './brain-regions.js';

const hemisphereVisibilityState = {
  left: true,
  right: true
};

const regionOpacity = 0.15;
const corticalRegionKeys = [
  'frontalLobe',
  'parietalLobe',
  'temporalLobe',
  'occipitalLobe',
  'cerebralCortexAdditional'
];

const getModelScene = (brainViewer) => {
  const sceneSymbol = Object.getOwnPropertySymbols(brainViewer)
    .find((symbol) => symbol.description === 'scene');

  return sceneSymbol ? brainViewer[sceneSymbol] : null;
};

const initializeHemisphereVisibility = async () => {
  const brainViewer = document.getElementById('brain-model-viewer');
  const hemisphereInputs = Array.from(
    document.querySelectorAll('[data-hemisphere-toggle]')
  );
  const regionInfo = document.querySelector('[data-brain-region-info]');
  const regionInfoTitle = regionInfo?.querySelector('[data-brain-region-title]');
  const regionInfoOverview = regionInfo?.querySelector('[data-brain-region-overview]');

  if(!brainViewer || !hemisphereInputs.length){
    return;
  }

  await customElements.whenDefined('model-viewer');

  let modelScene = null;
  const hemisphereMeshGroups = new Map();
  const meshObjects = [];
  let selectedRegionKey = null;

  const cloneMaterialIfNeeded = (mesh) => {
    if(mesh.userData.opacityMaterialCloned){
      return;
    }

    if(Array.isArray(mesh.material)){
      mesh.material = mesh.material.map((material) => material.clone());
    } else if(mesh.material){
      mesh.material = mesh.material.clone();
    }

    mesh.userData.opacityMaterialCloned = true;
  };

  const setMeshOpacity = (mesh, opacity) => {
    if(!mesh || !mesh.material){
      return;
    }

    cloneMaterialIfNeeded(mesh);

    const applyOpacity = (material) => {
      material.transparent = opacity < 1;
      material.opacity = opacity;
      material.depthWrite = opacity >= 1;
      material.needsUpdate = true;
    };

    if(Array.isArray(mesh.material)){
      mesh.material.forEach(applyOpacity);
    } else {
      applyOpacity(mesh.material);
    }
  };

  const getSelectedRegionMeshNames = (regionKey) => {
    if(!regionKey){
      return new Set();
    }

    if(regionKey === 'cerebral-cortex'){
      return new Set(corticalRegionKeys.flatMap((key) => getBrainRegionMeshNames(key)));
    }

    return new Set(getBrainRegionMeshNames(regionKey));
  };

  const applyRegionOpacity = () => {
    if(!meshObjects.length){
      return;
    }

    const selectedMeshNames = getSelectedRegionMeshNames(selectedRegionKey);
    const hasSelection = selectedMeshNames.size > 0;

    meshObjects.forEach((mesh) => {
      const opacity = !hasSelection || selectedMeshNames.has(mesh.name)
        ? 1
        : regionOpacity;
      setMeshOpacity(mesh, opacity);
    });
  };

  const updateRegionInformation = (regionKey) => {
    if(!regionInfo || !regionInfoTitle || !regionInfoOverview){
      return;
    }

    const information = brainRegionInformation[regionKey];

    if(!information){
      regionInfo.hidden = true;
      regionInfoTitle.textContent = '';
      regionInfoOverview.textContent = '';
      return;
    }

    regionInfoTitle.textContent = information.title;
    regionInfoOverview.textContent = information.overview;
    regionInfo.hidden = false;
  };

  const cacheHemisphereMeshes = () => {
    modelScene = getModelScene(brainViewer);
    hemisphereMeshGroups.clear();
    meshObjects.length = 0;

    if(!modelScene){
      return false;
    }

    modelScene.traverse((object) => {
      if(object.isMesh){
        meshObjects.push(object);
      }
    });

    Object.entries(brainHemispheres).forEach(([hemisphere, config]) => {
      const hemisphereMeshes = meshObjects.filter(
        (mesh) => mesh.name.endsWith(config.meshSuffix)
      );

      if(hemisphereMeshes.length){
        hemisphereMeshGroups.set(hemisphere, hemisphereMeshes);
      }
    });

    return hemisphereMeshGroups.size === Object.keys(brainHemispheres).length;
  };

  const setHemisphereVisibility = (hemisphere, isVisible) => {
    hemisphereVisibilityState[hemisphere] = isVisible;

    if(!hemisphereMeshGroups.size){
      cacheHemisphereMeshes();
    }

    const hemisphereMeshes = hemisphereMeshGroups.get(hemisphere);

    if(!hemisphereMeshes){
      return;
    }

    hemisphereMeshes.forEach((mesh) => {
      mesh.visible = isVisible;
    });

    brainViewer.dispatchEvent(new CustomEvent(
      'brainhemispherevisibilitychange',
      {
        bubbles: true,
        detail: {
          hemisphere,
          visible: isVisible,
          objectName: brainHemispheres[hemisphere].objectName
        }
      }
    ));
  };

  const applyHemisphereVisibility = () => {
    if(!cacheHemisphereMeshes()){
      return;
    }

    Object.entries(hemisphereVisibilityState)
      .forEach(([hemisphere, isVisible]) => {
        setHemisphereVisibility(hemisphere, isVisible);
      });

    applyRegionOpacity();
  };

  hemisphereInputs.forEach((input) => {
    const hemisphere = input.dataset.hemisphereToggle;

    if(!brainHemispheres[hemisphere]){
      return;
    }

    hemisphereVisibilityState[hemisphere] = input.checked;
    input.addEventListener('change', () => {
      setHemisphereVisibility(hemisphere, input.checked);
    });
  });

  brainViewer.addEventListener('load', applyHemisphereVisibility);

  brainViewer.addEventListener('brainstructureselect', (event) => {
    const selectedStructure = event.detail?.structure;

    selectedRegionKey = selectedStructure || null;

    applyRegionOpacity();
    updateRegionInformation(selectedRegionKey);
  });

  if(brainViewer.loaded){
    applyHemisphereVisibility();
  }
};

if(document.readyState === 'loading'){
  document.addEventListener(
    'DOMContentLoaded',
    initializeHemisphereVisibility,
    { once: true }
  );
} else {
  initializeHemisphereVisibility();
}
