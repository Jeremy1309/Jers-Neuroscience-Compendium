import { brainHemispheres } from './brain-regions.js';

const hemisphereVisibilityState = {
  left: true,
  right: true
};

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

  if(!brainViewer || !hemisphereInputs.length){
    return;
  }

  await customElements.whenDefined('model-viewer');

  let modelScene = null;
  const hemisphereObjects = new Map();

  const cacheHemisphereObjects = () => {
    modelScene = getModelScene(brainViewer);
    hemisphereObjects.clear();

    if(!modelScene){
      return false;
    }

    Object.entries(brainHemispheres).forEach(([hemisphere, config]) => {
      const hemisphereObject = modelScene.getObjectByName(config.objectName);

      if(hemisphereObject){
        hemisphereObjects.set(hemisphere, hemisphereObject);
      }
    });

    return hemisphereObjects.size === Object.keys(brainHemispheres).length;
  };

  const setHemisphereVisibility = (hemisphere, isVisible) => {
    hemisphereVisibilityState[hemisphere] = isVisible;

    if(!hemisphereObjects.size){
      cacheHemisphereObjects();
    }

    const hemisphereObject = hemisphereObjects.get(hemisphere);

    if(!hemisphereObject){
      return;
    }

    hemisphereObject.visible = isVisible;

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
    if(!cacheHemisphereObjects()){
      return;
    }

    Object.entries(hemisphereVisibilityState)
      .forEach(([hemisphere, isVisible]) => {
        setHemisphereVisibility(hemisphere, isVisible);
      });
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
