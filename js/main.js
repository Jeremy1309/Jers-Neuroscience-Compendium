document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('details').forEach((detail) => {
    detail.addEventListener('keydown', function (event) {
      if(event.key === 'Enter' || event.key === ' '){
        event.preventDefault();
        detail.open = !detail.open;
      }
    });
  });

  const menuToggle = document.getElementById('home-menu-toggle');
  const menu = document.getElementById('home-menu');

  if(menuToggle && menu){
    const setMenuState = (isOpen) => {
      menuToggle.classList.toggle('is-open', isOpen);
      menu.classList.toggle('is-open', isOpen);
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    };

    menuToggle.addEventListener('click', () => {
      setMenuState(!menu.classList.contains('is-open'));
    });

    menu.addEventListener('click', (event) => {
      if(event.target instanceof HTMLAnchorElement){
        setMenuState(false);
      }
    });

    document.addEventListener('keydown', (event) => {
      if(event.key === 'Escape'){
        setMenuState(false);
      }
    });

    document.addEventListener('click', (event) => {
      if(menu.classList.contains('is-open')){
        const target = event.target;
        if(target instanceof Node && !menu.contains(target) && !menuToggle.contains(target)){
          setMenuState(false);
        }
      }
    });
  }

  const stage = document.getElementById('network-stage');

  if(stage){
    stage.innerHTML = `
      <svg class="neuron-illustration" viewBox="0 0 1000 680" role="img" aria-label="Stylized neuron illustration" preserveAspectRatio="xMidYMid meet">
        <defs>
          <radialGradient id="neuron-back-glow" cx="50%" cy="50%" r="58%">
            <stop offset="0%" stop-color="rgba(155, 238, 255, 0.28)"/>
            <stop offset="45%" stop-color="rgba(99, 208, 255, 0.16)"/>
            <stop offset="100%" stop-color="rgba(99, 208, 255, 0)"/>
          </radialGradient>
          <radialGradient id="neuron-soma-fill" cx="35%" cy="30%" r="72%">
            <stop offset="0%" stop-color="#ffffff"/>
            <stop offset="22%" stop-color="#f3fbff"/>
            <stop offset="52%" stop-color="#90dff6"/>
            <stop offset="100%" stop-color="#1d87bf"/>
          </radialGradient>
          <filter id="neuron-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="8" result="blur"/>
            <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0.05  0 0 1 0 0.15  0 0 0 0.55 0" result="softGlow"/>
            <feMerge>
              <feMergeNode in="softGlow"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <filter id="neuron-soma-glow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="10" result="blur"/>
            <feMerge>
              <feMergeNode in="blur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        <ellipse cx="500" cy="330" rx="190" ry="180" fill="url(#neuron-back-glow)" opacity="0.85"/>

        <path class="neuron-svg__backwash" filter="url(#neuron-glow)" d="M 330 315 C 285 270, 250 230, 215 190 C 260 212, 305 218, 356 248 C 386 266, 416 275, 452 280"/>
        <path class="neuron-svg__backwash" filter="url(#neuron-glow)" d="M 356 308 C 300 266, 268 226, 230 175 C 292 196, 338 205, 382 235 C 408 253, 434 265, 455 278"/>
        <path class="neuron-svg__backwash" filter="url(#neuron-glow)" d="M 365 330 C 310 312, 262 300, 206 286 C 254 255, 303 244, 352 255 C 395 264, 433 272, 460 283"/>

        <path class="neuron-svg__branch" filter="url(#neuron-glow)" d="M 448 315 C 390 282, 336 242, 290 188 C 258 150, 227 124, 186 100"/>
        <path class="neuron-svg__branch" filter="url(#neuron-glow)" d="M 462 302 C 408 264, 370 223, 336 178 C 320 156, 295 128, 258 94"/>
        <path class="neuron-svg__branch" filter="url(#neuron-glow)" d="M 476 298 C 432 256, 410 225, 396 188 C 386 160, 368 132, 338 110"/>
        <path class="neuron-svg__branch" filter="url(#neuron-glow)" d="M 470 334 C 414 326, 370 313, 322 288 C 286 269, 244 246, 192 224"/>
        <path class="neuron-svg__branch" filter="url(#neuron-glow)" d="M 486 342 C 434 340, 394 349, 352 370 C 317 387, 284 409, 240 432"/>
        <path class="neuron-svg__branch" filter="url(#neuron-glow)" d="M 470 352 C 432 372, 412 398, 398 428 C 388 450, 373 480, 350 520"/>
        <path class="neuron-svg__branch" filter="url(#neuron-glow)" d="M 436 346 C 392 366, 352 391, 314 425 C 286 450, 251 483, 210 528"/>

        <path class="neuron-svg__axon" filter="url(#neuron-glow)" d="M 528 340 C 614 352, 702 372, 788 412 C 842 437, 898 462, 947 505"/>
        <path class="neuron-svg__root" filter="url(#neuron-glow)" d="M 506 340 C 620 352, 742 389, 874 448"/>

        <circle class="neuron-svg__soma" filter="url(#neuron-soma-glow)" cx="500" cy="334" r="74"/>
        <circle class="neuron-svg__soma-ring" cx="500" cy="334" r="56"/>
        <circle class="neuron-svg__glow-soft" cx="500" cy="334" r="32" opacity="0.55"/>
        <circle class="neuron-svg__glow-core" cx="500" cy="334" r="18"/>
      </svg>
    `;
  }
});
