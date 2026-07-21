// main.js
// Purpose: handle navigation, expandable categories, and interactive brain tooltip behavior.
// Keep code simple and dependency-free for easy extension later.

document.addEventListener('DOMContentLoaded', function(){
  // Mobile nav toggle
  const navToggle = document.getElementById('nav-toggle');
  const mainNav = document.getElementById('main-nav');
  if(navToggle){
    navToggle.addEventListener('click', function(){
      const expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
      if(mainNav){
        mainNav.style.display = expanded ? 'none' : 'block';
      }
    });
  }

  // Close mobile nav when clicking outside (simple behaviour)
  document.addEventListener('click', (e) => {
    if(window.innerWidth <= 980 && mainNav && navToggle){
      if(!mainNav.contains(e.target) && e.target !== navToggle){
        mainNav.style.display = 'none';
        navToggle.setAttribute('aria-expanded','false');
      }
    }
  });

  // DETAILS elements: allow keyboard enter/space to toggle
  document.querySelectorAll('details').forEach(d => {
    d.addEventListener('keydown', (e) => {
      if(e.key === 'Enter' || e.key === ' '){
        e.preventDefault();
        d.open = !d.open;
      }
    });
  });

  // --- Interactive brain tooltip ---
  const tooltip = document.getElementById('brain-tooltip');
  const svg = document.getElementById('brain-svg');

  if(svg && tooltip){
    // Map of region keys to short descriptions and link targets
    const regionData = {
      frontal_lobe: {title: 'Frontal Lobe', text: 'Executive function, decision making, motor planning, personality.', href: '/pages/brain.html#frontal-lobe'},
      parietal_lobe: {title: 'Parietal Lobe', text: 'Somatosensory processing, spatial orientation, attention.', href: '/pages/brain.html#parietal-lobe'},
      temporal_lobe: {title: 'Temporal Lobe', text: 'Memory, language comprehension, auditory processing.', href: '/pages/brain.html#temporal-lobe'},
      occipital_lobe: {title: 'Occipital Lobe', text: 'Primary visual cortex and visual processing.', href: '/pages/brain.html#occipital-lobe'},
      hippocampus: {title: 'Hippocampus', text: 'Memory formation and spatial navigation.', href: '/pages/brain.html#hippocampus'},
      amygdala: {title: 'Amygdala', text: 'Emotion processing, especially fear and salience.', href: '/pages/brain.html#amygdala'},
      cerebellum: {title: 'Cerebellum', text: 'Coordination, balance, and motor learning.', href: '/pages/brain.html#cerebellum'},
      brainstem: {title: 'Brainstem', text: 'Vital functions, arousal, and autonomic control.', href: '/pages/brain.html#brainstem'}
    };

    // Attach event listeners to any SVG element that has a data-region attribute
    svg.querySelectorAll('[data-region]').forEach(el => {
      const key = el.getAttribute('data-region');
      // mouseenter -> show tooltip
      el.addEventListener('mouseenter', (ev) => {
        const info = regionData[key];
        if(!info) return;
        tooltip.innerHTML = `<strong>${info.title}</strong><div style="margin-top:6px;color:var(--muted);font-size:13px">${info.text}</div>`;
        tooltip.hidden = false;
        positionTooltip(ev, tooltip);
      });
      // mousemove -> reposition
      el.addEventListener('mousemove', (ev) => positionTooltip(ev, tooltip));
      // mouseleave -> hide
      el.addEventListener('mouseleave', () => { tooltip.hidden = true; });
      // click -> navigate (future: open article panel)
      el.addEventListener('click', (ev) => {
        const info = regionData[key];
        if(info && info.href){
          // For now, navigate to the related page anchor if it exists
          window.location.href = info.href;
        }
      });
    });
  }

  function positionTooltip(ev, tooltip){
    const padding = 8;
    // Mouse event can be on SVG; clientX/Y works
    const x = ev.clientX + padding;
    const y = ev.clientY + padding;
    tooltip.style.left = x + 'px';
    tooltip.style.top = y + 'px';
  }

});
