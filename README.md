# Jer's Neuroscience Compendium

This repository is now organized around an immersive homepage with an interactive brain feature and modular topic pages. The goal is to provide a readable, expandable personal neuroscience textbook and atlas.

How this update is organized:
- index.html — redesigned immersive homepage with interactive SVG brain placeholder and category cards
- css/styles.css — updated styles for the immersive homepage and global layout
- js/main.js — updated JS for brain interactivity and site behaviour
- pages/ — topic pages (brain, neurons, neuropharm, disorders, topics, about)
- templates/article.html — reusable article layout

Next steps you can ask me to do:
- Add more detailed article pages (I can scaffold individual topic articles such as hippocampus, frontal lobe, action potentials, etc.)
- Replace the placeholder SVG with a detailed SVG brain or an interactive atlas (I can import an SVG and map regions)
- Add citations and reference styling for academic articles
- Enable GitHub Pages and publish the site

Notes:
- The SVG used on the homepage is simplified for now. It includes data-region attributes that the JS uses to show tooltips and link to pages. This makes it easy to replace the SVG later with a higher-fidelity vector map and keep the interactivity hooks.
