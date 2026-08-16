const emptyRegion = Object.freeze([]);

const bilateral = (...baseMeshNames) => Object.freeze(
  baseMeshNames.flatMap((baseName) => [
    `${baseName}_L`,
    `${baseName}_R`
  ])
);

export const brainModelMetadata = Object.freeze({
  source: 'assets/models/3D Brain Graphic.glb',
  rootNode: 'Allen_brain',
  nodeCount: 286,
  meshCount: 283,
  namingConvention: 'Allen Brain Atlas'
});

export const brainHemispheres = Object.freeze({
  left: Object.freeze({
    label: 'Left Hemisphere',
    objectName: 'Allen_brain_Hemisphere_R',
    meshSuffix: '_R'
  }),
  right: Object.freeze({
    label: 'Right Hemisphere',
    objectName: 'Allen_brain_Hemisphere_L',
    meshSuffix: '_L'
  })
});

export const brainRegions = Object.freeze({
  corpusCallosum: bilateral(
    'Allen_corpus_callosum'
  ),

  cerebralCortexAdditional: bilateral(
    'Allen_cingulate_gyrus_caudal_posterior_part',
    'Allen_cingulate_gyrus_rostral_anterior_part',
    'Allen_frontal_agranular_insular_cortex_area_Fl',
    'Allen_limen_insula',
    'Allen_long_insular_gyri',
    'Allen_short_insular_gyri',
    'Allen_subcallosal_gyrus_parolfactory_gyrus',
    'Allen_temporal_agranular_insular_cortex_area_Tl'
  ),

  frontalLobe: bilateral(
    'Allen_anterior_intermediate_orbital_gyrus',
    'Allen_frontal_operculum',
    'Allen_frontal_pole',
    'Allen_frontomarginal_gyrus',
    'Allen_gyrus_rectus_straight_gyrus',
    'Allen_inferior_frontal_gyrus_opercular_part',
    'Allen_inferior_frontal_gyrus_triangular_part',
    'Allen_lateral_orbital_gyrus',
    'Allen_medial_orbital_gyrus',
    'Allen_middle_frontal_gyrus',
    'Allen_paracentral_lobule_rostral_part',
    'Allen_paracingulate_gyrus',
    'Allen_posterior_intermediate_orbital_gyrus',
    'Allen_precentral_gyrus',
    'Allen_rostral_gyrus',
    'Allen_superior_frontal_gyrus'
  ),

  parietalLobe: bilateral(
    'Allen_angular_gyrus',
    'Allen_paracentral_lobule_caudal_part',
    'Allen_parietal_operculum',
    'Allen_postcentral_gyrus',
    'Allen_precuneus',
    'Allen_supramarginal_gyrus',
    'Allen_supraparietal_lobule'
  ),

  temporalLobe: bilateral(
    'Allen_anterior_parahippocampal_gyrus',
    'Allen_gyrus_ambiens',
    'Allen_inferior_temporal_gyrus',
    'Allen_ingulo_parahippocampal_isthmus',
    'Allen_lateral_olfactory_gyrus',
    'Allen_middle_temporal_gyrus',
    'Allen_occipitotemporal_fusiform_gyrus_temporal_part',
    'Allen_perirhinal_gyrus_rostral_part_of_FuGt',
    'Allen_piriform_region',
    'Allen_planum_polare',
    'Allen_planum_temporale',
    'Allen_posterior_parahippocampal_gyrus',
    'Allen_superior_temporal_gyrus',
    'Allen_temporal_pole',
    'Allen_transverse_temporal_gyrus_Heschls_gyrus'
  ),

  occipitalLobe: bilateral(
    'Allen_cuneus',
    'Allen_inferior_occipital_gyrus',
    'Allen_lateral_occipitotemporal_fusiform_gyrus_occipital_part',
    'Allen_lingual_gyrus_medial_occipitotemporal_gyrus',
    'Allen_occipital_pole',
    'Allen_superior_occipital_gyrus'
  ),

  cerebellum: bilateral(
    'Allen_cerebellar_deep_nuclei',
    'Allen_cerebellar_vermis',
    'Allen_inferior_cerebellar_peduncle',
    'Allen_lateral_hemisphere_of_cerebellum',
    'Allen_middle_cerebellar_peduncle',
    'Allen_paravermis_of_cerebellum',
    'Allen_superior_cerebellar_peduncle_brachium_conjunctivum'
  ),

  brainstem: bilateral(
    'Allen_basilar_part_of_pons',
    'Allen_cerebral_peduncle_crus_cerebri',
    'Allen_inferior_colliculus',
    'Allen_inferior_olive',
    'Allen_midbrain_tegmentum',
    'Allen_pontine_tegmentum',
    'Allen_pretectal_region',
    'Allen_pyramidal_part_of_medulla_oblongata',
    'Allen_red_nucleus',
    'Allen_substantia_nigra',
    'Allen_superior_colliculus',
    'Allen_tegmentum_of_medulla_oblongata'
  ),

  hippocampus: bilateral(
    'Allen_body_of_hippocampus',
    'Allen_head_of_hippocampus',
    'Allen_tail_of_hippocampus'
  ),

  amygdala: bilateral(
    'Allen_amygdalohippocampal_area',
    'Allen_amygdaloid_complex',
    'Allen_anterior_amygdaloid_area',
    'Allen_anterior_cortical_nucleus',
    'Allen_basolateral_nucleus_basal_nucleus',
    'Allen_basomedial_nucleus_accessory_basal_nucleus',
    'Allen_central_nuclear_group',
    'Allen_lateral_nucleus',
    'Allen_medial_nucleus',
    'Allen_posterior_cortical_nucleus'
  ),

  thalamus: bilateral(
    'Allen_anterior_nuclear_complex_of_thalamus',
    'Allen_centromedian_nucleus_of_thalamus',
    'Allen_dorsal_lateral_geniculate_nucleus',
    'Allen_lateral_dorsal_nucleus_of_thalamus',
    'Allen_lateral_posterior_nucleus_of_thalamus',
    'Allen_medial_geniculate_nuclei',
    'Allen_mediodorsal_nucleus_of_thalamus',
    'Allen_midline_nuclear_complex',
    'Allen_parafascicular_nucleus_of_thalamus',
    'Allen_pulvinar_of_thalamus',
    'Allen_reuniens_nucleus_medioventral_nucleus_of_thalamus',
    'Allen_thalamus',
    'Allen_ventral_anterior_nucleus_of_thalamus',
    'Allen_ventral_lateral_nucleus_of_thalamus',
    'Allen_ventral_posterior_lateral_nucleus',
    'Allen_ventral_posterior_medial_nucleus'
  ),

  basalGanglia: bilateral(
    'Allen_body_of_caudate',
    'Allen_external_segment_of_globus_pallidus',
    'Allen_head_of_caudate',
    'Allen_internal_segment_of_globus_pallidus',
    'Allen_nucleus_accumbens',
    'Allen_posteroventral_putamen',
    'Allen_putamen',
    'Allen_substantia_nigra',
    'Allen_subthalamic_nucleus',
    'Allen_tail_of_caudate'
  )
});

export const brainRegionKeys = Object.freeze(Object.keys(brainRegions));

export const brainRegionKeyByControl = Object.freeze({
  'corpus-callosum': 'corpusCallosum',
  'frontal-lobe': 'frontalLobe',
  'parietal-lobe': 'parietalLobe',
  'temporal-lobe': 'temporalLobe',
  'occipital-lobe': 'occipitalLobe',
  cerebellum: 'cerebellum',
  brainstem: 'brainstem',
  hippocampus: 'hippocampus',
  amygdala: 'amygdala',
  thalamus: 'thalamus',
  'basal-ganglia': 'basalGanglia'
});

export const brainRegionInformation = Object.freeze({
  'cerebral-cortex': Object.freeze({
    title: 'Cerebral Cortex',
    overview: 'The brain\u2019s folded outer layer supports perception, voluntary movement, language, memory, and complex thought.'
  }),
  'corpus-callosum': Object.freeze({
    title: 'Corpus Callosum',
    overview: 'A broad band of white-matter fibres that connects the left and right cerebral hemispheres, allowing sensory, motor, and cognitive information to pass between them.'
  }),
  'frontal-lobe': Object.freeze({
    title: 'Frontal Lobe',
    overview: 'Guides planning, decision-making, personality, voluntary movement, speech production, and impulse control.'
  }),
  'parietal-lobe': Object.freeze({
    title: 'Parietal Lobe',
    overview: 'Combines touch and body-sense information to support spatial awareness, attention, and perception of the body.'
  }),
  'temporal-lobe': Object.freeze({
    title: 'Temporal Lobe',
    overview: 'Supports hearing, language comprehension, memory, and recognition of objects, faces, and meaningful experiences.'
  }),
  'occipital-lobe': Object.freeze({
    title: 'Occipital Lobe',
    overview: 'The brain\u2019s primary visual region interprets shape, colour, motion, depth, and other features of sight.'
  }),
  cerebellum: Object.freeze({
    title: 'Cerebellum',
    overview: 'Fine-tunes movement, balance, posture, and motor learning so actions remain smooth, accurate, and well timed.'
  }),
  brainstem: Object.freeze({
    title: 'Brainstem',
    overview: 'Connects the brain with the spinal cord and regulates breathing, heart rate, alertness, and sleep.'
  }),
  hippocampus: Object.freeze({
    title: 'Hippocampus',
    overview: 'Forms and organizes new memories while supporting learning and navigation through physical environments.'
  }),
  amygdala: Object.freeze({
    title: 'Amygdala',
    overview: 'Evaluates emotional significance and possible threats, contributing to fear learning, emotional memory, and social behaviour.'
  }),
  thalamus: Object.freeze({
    title: 'Thalamus',
    overview: 'Relays sensory and motor information to the cortex and contributes to attention, alertness, and sleep.'
  }),
  'basal-ganglia': Object.freeze({
    title: 'Basal Ganglia',
    overview: 'A group of deep brain nuclei that helps initiate and regulate movement, supports habit learning and reward processing, and suppresses competing actions.'
  })
});

export const getBrainRegionMeshNames = (regionKey) => {
  const canonicalKey = brainRegions[regionKey]
    ? regionKey
    : brainRegionKeyByControl[regionKey];

  return brainRegions[canonicalKey] || emptyRegion;
};

export default brainRegions;
