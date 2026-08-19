# Jer's Neuroscience Compendium

Jer’s Neuroscience Compendium is a personal, evolving neuroscience knowledge platform. It is designed to feel like a modern interactive textbook: approachable enough to explore casually, but structured to support detailed scientific explanations, terminology, references, and future learning tools.

## Current experience

- An immersive homepage introducing the compendium
- An interactive 3D brain atlas with rotation and anatomical structure controls
- Left and right hemisphere visibility controls for viewing deeper structures
- Anatomical highlighting and short educational summaries for mapped regions
- A textbook-inspired chapter index linking to the major topic pages
- A reusable long-form layout for overviews, glossaries, and subtopics
- Cyclical Home and Next navigation across all major chapters

## Main chapters

- The Brain
- Neurons
- Neurotransmitters
- Neuropharmacology
- Diseases & Disorders
- Neurodegenerative Diseases
- Concepts & Research
- Genetics & Molecular Neuroscience
- About Me

## Project structure

- `index.html` contains the homepage, 3D atlas interface, and chapter selector.
- `css/styles.css` contains the shared visual system for the homepage and topic pages.
- `js/main.js` manages shared navigation, homepage transitions, atlas controls, and the chapter selector.
- `js/brain-regions.js` maps educational brain regions to named meshes in the GLB model.
- `js/brain-visibility.js` manages hemisphere visibility and anatomical highlighting.
- `pages/` contains the major neuroscience chapters.
- `assets/models/3D Brain Graphic.glb` is the anatomical model used by the atlas.

## Direction

The project will continue to grow through deeper chapter content, scientific references, richer atlas interactions, and educational tools such as quizzes or simulations. The emphasis is on maintaining a coherent reading experience and making complex neuroscience topics easier to navigate and understand.

This is a static HTML, CSS, and JavaScript project with no required build step. Because the atlas uses JavaScript modules and a local GLB file, it should be viewed through a local web server rather than opened directly from the filesystem.
