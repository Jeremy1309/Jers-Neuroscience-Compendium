document.addEventListener('DOMContentLoaded', function () {
  const topicHeader = document.querySelector('[data-topic-header]');

  if(topicHeader){
    const currentTopic = document.body.dataset.topic;
    const topicLinks = [
      { key: 'brain', label: 'Brain', href: 'brain.html' },
      { key: 'neurons', label: 'Neurons', href: 'neurons.html' },
      { key: 'neurotransmitters', label: 'Neurotransmitters', href: 'neurotransmitters.html' },
      { key: 'neuropharmacology', label: 'Neuropharmacology', href: 'neuropharmacology.html' },
      { key: 'disorders', label: 'Diseases & Disorders', href: 'disorders.html' },
      { key: 'neurodegeneration', label: 'Neurodegeneration', href: 'neurodegeneration.html' },
      { key: 'concepts', label: 'Concepts & Research', href: 'concepts.html' },
      { key: 'genetics', label: 'Genetics', href: 'genetics.html' },
      { key: 'about', label: 'About', href: 'about.html' }
    ];
    const navigation = topicLinks.map((topic) => {
      const isCurrent = topic.key === currentTopic;
      return `
        <a
          href="${topic.href}"
          ${isCurrent ? 'class="is-current" aria-current="page"' : ''}
        >${topic.label}</a>
      `;
    }).join('');

    topicHeader.innerHTML = `
      <div class="topic-header__bar">
        <a class="topic-home-link" href="../index.html">
          <span aria-hidden="true">←</span>
          <span>Home</span>
        </a>
        <a class="topic-brand" href="../index.html">
          <span class="topic-brand__mark" aria-hidden="true">N</span>
          <span>Jer's Neuroscience Compendium</span>
        </a>
      </div>
      <nav class="topic-nav" aria-label="Neuroscience topics">
        <div class="topic-nav__inner">${navigation}</div>
      </nav>
    `;
  }

  document.querySelectorAll('details').forEach((detail) => {
    detail.addEventListener('keydown', function (event) {
      if(event.key === 'Enter' || event.key === ' '){
        event.preventDefault();
        detail.open = !detail.open;
      }
    });
  });

  const initializeBrainStructureMenu = () => {
    const brainViewer = document.getElementById('brain-model-viewer');
    const structureMenu = document.querySelector('[data-brain-structure-menu]');

    if(!brainViewer || !structureMenu){
      return;
    }

    const structureButtons = Array.from(
      structureMenu.querySelectorAll('[data-brain-structure]')
    );

    const selectBrainStructure = (selectedButton) => {
      structureButtons.forEach((button) => {
        button.setAttribute(
          'aria-pressed',
          button === selectedButton ? 'true' : 'false'
        );
      });

      brainViewer.dispatchEvent(new CustomEvent('brainstructureselect', {
        bubbles: true,
        detail: {
          structure: selectedButton.dataset.brainStructure,
          buttonId: selectedButton.id
        }
      }));
    };

    structureButtons.forEach((button) => {
      button.addEventListener('click', () => selectBrainStructure(button));
    });
  };

  initializeBrainStructureMenu();

  const stage = document.getElementById('network-stage');

  if(stage){
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const nodes = [
      { x: 0.10, y: 0.30, size: 9, phase: 0.1, emoji: '🧠', title: 'The Brain', href: 'pages/brain.html' },
      { x: 0.22, y: 0.16, size: 12, phase: 1.0, emoji: '⚡', title: 'Neurons', href: 'pages/neurons.html' },
      { x: 0.27, y: 0.52, size: 10, phase: 2.1, emoji: '🔗', title: 'Neurotransmitters', href: 'pages/neurotransmitters.html' },
      { x: 0.40, y: 0.34, size: 14, phase: 2.8, emoji: '💊', title: 'Neuropharmacology', href: 'pages/neuropharmacology.html' },
      { x: 0.47, y: 0.72, size: 10, phase: 3.6, emoji: '🧬', title: 'Diseases & Disorders', href: 'pages/disorders.html' },
      { x: 0.58, y: 0.18, size: 11, phase: 4.2, emoji: '🧠', title: 'Neurodegenerative Diseases', href: 'pages/neurodegeneration.html' },
      { x: 0.64, y: 0.50, size: 15, phase: 5.0, emoji: '🔬', title: 'Concepts & Research', href: 'pages/concepts.html' },
      { x: 0.84, y: 0.66, size: 9, phase: 5.8, emoji: '🧬', title: 'Genetics & Molecular Neuroscience', href: 'pages/genetics.html' },
      { x: 0.82, y: 0.30, size: 12, phase: 0.7, emoji: '👤', title: 'About Me', href: 'pages/about.html' }
    ];
    const links = [
      [0, 1], [0, 2], [1, 3], [1, 5], [2, 3], [2, 4],
      [3, 4], [3, 5], [3, 6], [4, 6], [4, 7], [5, 6],
      [5, 8], [6, 7], [6, 8]
    ];
    const topicColors = [
      '#e89aa4',
      '#e9bd64',
      '#65bea4',
      '#ad8bd8',
      '#e89778',
      '#cf9f68',
      '#65b9b5',
      '#9694dc',
      '#82b881'
    ];
    const decorativeColors = ['#d99ba6', '#d6b46c', '#80bda0', '#a697d4', '#d99179'];
    const brainOutlineCoordinates = [
      [0.55, 0.93], [0.51, 0.89], [0.50, 0.83], [0.44, 0.81],
      [0.39, 0.84], [0.33, 0.86], [0.26, 0.84], [0.20, 0.80],
      [0.15, 0.75], [0.11, 0.68], [0.09, 0.59], [0.08, 0.49],
      [0.09, 0.39], [0.11, 0.30], [0.16, 0.22], [0.23, 0.16],
      [0.31, 0.11], [0.40, 0.08], [0.50, 0.07], [0.60, 0.08],
      [0.69, 0.11], [0.77, 0.16], [0.84, 0.22], [0.89, 0.30],
      [0.91, 0.39], [0.91, 0.47], [0.89, 0.55], [0.86, 0.62],
      [0.82, 0.67], [0.77, 0.69], [0.74, 0.74], [0.69, 0.78],
      [0.63, 0.80], [0.61, 0.85], [0.60, 0.91], [0.58, 0.94]
    ];
    const brainInteriorCoordinates = [
      [0.17, 0.31], [0.26, 0.23], [0.37, 0.17], [0.49, 0.14],
      [0.61, 0.16], [0.72, 0.21], [0.82, 0.29],
      [0.14, 0.43], [0.26, 0.38], [0.38, 0.31], [0.50, 0.28],
      [0.63, 0.30], [0.75, 0.36], [0.85, 0.43],
      [0.13, 0.55], [0.25, 0.51], [0.38, 0.47], [0.51, 0.43],
      [0.64, 0.45], [0.76, 0.49], [0.86, 0.53],
      [0.16, 0.65], [0.28, 0.61], [0.41, 0.59], [0.54, 0.57],
      [0.66, 0.58], [0.77, 0.60], [0.83, 0.64],
      [0.20, 0.73], [0.29, 0.70], [0.39, 0.68], [0.50, 0.67],
      [0.61, 0.67], [0.70, 0.69], [0.76, 0.73],
      [0.14, 0.69], [0.18, 0.76], [0.25, 0.81], [0.33, 0.80],
      [0.39, 0.75], [0.52, 0.76], [0.54, 0.84], [0.56, 0.91]
    ];
    const brainFiberPaths = [
      [0, 1, 2, 3, 4, 5, 6],
      [7, 8, 9, 10, 11, 12, 13],
      [14, 15, 16, 17, 18, 19, 20],
      [21, 22, 23, 24, 25, 26, 27],
      [28, 29, 30, 31, 32, 33, 34],
      [21, 35, 36, 37, 38, 39, 28],
      [1, 8, 15, 22, 29, 36],
      [3, 10, 17, 24, 31, 40, 41, 42],
      [5, 12, 19, 26, 33, 34]
    ];
    const outlineNodes = brainOutlineCoordinates.map(([x, y], index) => ({
      x,
      y,
      size: 3.5 + (index % 5) * 0.42,
      phase: index * 0.43,
      opacity: 0.32 + (index % 5) * 0.035,
      color: decorativeColors[index % decorativeColors.length]
    }));
    const interiorNodes = brainInteriorCoordinates.map(([x, y], index) => ({
      x,
      y,
      size: 3.9 + (index % 5) * 0.46,
      phase: 1.2 + index * 0.51,
      opacity: 0.43 + ((index * 3) % 5) * 0.04,
      color: decorativeColors[(index + 2) % decorativeColors.length]
    }));
    const decorativeNodes = [
      ...outlineNodes,
      ...interiorNodes
    ];
    const decorativeLinks = [];
    const decorativeLinkKeys = new Set();
    const decorativeOffset = nodes.length;
    const addDecorativeLink = (from, to) => {
      if(from === to){
        return;
      }
      const key = [from, to].sort((first, second) => first - second).join(':');
      if(!decorativeLinkKeys.has(key)){
        decorativeLinkKeys.add(key);
        decorativeLinks.push([from, to]);
      }
    };

    outlineNodes.forEach((node, index) => {
      addDecorativeLink(
        decorativeOffset + index,
        decorativeOffset + ((index + 1) % outlineNodes.length)
      );
      if(index % 4 === 0){
        addDecorativeLink(
          decorativeOffset + index,
          decorativeOffset + ((index + 2) % outlineNodes.length)
        );
      }
    });

    brainFiberPaths.forEach((path) => {
      path.slice(1).forEach((interiorIndex, pathIndex) => {
        addDecorativeLink(
          decorativeOffset + outlineNodes.length + path[pathIndex],
          decorativeOffset + outlineNodes.length + interiorIndex
        );
      });
    });

    interiorNodes.forEach((node, interiorIndex) => {
      const decorativeIndex = outlineNodes.length + interiorIndex;
      const nearestNodes = decorativeNodes
        .map((candidate, candidateIndex) => ({
          index: candidateIndex,
          distance: candidateIndex === decorativeIndex
            ? Infinity
            : Math.hypot(node.x - candidate.x, node.y - candidate.y)
        }))
        .sort((first, second) => first.distance - second.distance);
      const connectionCount = interiorIndex % 4 === 0 ? 3 : 2;

      nearestNodes.slice(0, connectionCount).forEach((nearestNode) => {
        addDecorativeLink(
          decorativeOffset + decorativeIndex,
          decorativeOffset + nearestNode.index
        );
      });
    });

    nodes.forEach((node, index) => {
      node.hoverScale = 1;
      node.color = topicColors[index];

      if(index === 3 || index === 6){
        return;
      }

      const nearestDecoratives = decorativeNodes
        .map((decorativeNode, decorativeIndex) => ({
          index: decorativeIndex,
          distance: Math.hypot(
            node.x - decorativeNode.x,
            node.y - decorativeNode.y
          )
        }))
        .sort((first, second) => first.distance - second.distance);
      const connectionCount = index === 4 ? 3 : 1;

      nearestDecoratives
        .slice(0, connectionCount)
        .forEach((decorativeNode) => {
          addDecorativeLink(
            index,
            decorativeOffset + decorativeNode.index
          );
        });
    });
    const pointer = { x: 0, y: 0, active: false };
    let width = 0;
    let height = 0;
    let activeNode = -1;

    canvas.className = 'network-canvas';
    canvas.setAttribute('role', 'img');
    canvas.setAttribute('aria-label', 'Nine topic neurons within a brain-shaped neural network');
    stage.appendChild(canvas);

    const resizeCanvas = () => {
      const bounds = stage.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = bounds.width;
      height = bounds.height;
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const positionFor = (node, time, scaleX = 1, scaleY = 1) => {
      const drift = reducedMotion ? 0 : Math.sin(time * 0.00045 + node.phase) * 5;
      const sway = reducedMotion ? 0 : Math.cos(time * 0.00038 + node.phase) * 4;
      return {
        x: (0.5 + (node.x - 0.5) * scaleX) * width + sway,
        y: (0.5 + (node.y - 0.5) * scaleY) * height + drift
      };
    };

    const previousBaseRadiusFor = (node) => Math.max(15, node.size * 1.15);
    const baseRadiusFor = (node) => Math.max(36, node.size * 2.475);
    const hoveredScaleFor = (node) =>
      previousBaseRadiusFor(node) * 3.6 / baseRadiusFor(node);
    const clamp = (value, minimum, maximum) =>
      Math.min(Math.max(value, minimum), maximum);
    const smoothStep = (value) => value * value * (3 - 2 * value);
    const rgbaFromHex = (hex, alpha) => {
      const color = hex.replace('#', '');
      const red = parseInt(color.slice(0, 2), 16);
      const green = parseInt(color.slice(2, 4), 16);
      const blue = parseInt(color.slice(4, 6), 16);
      return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
    };
    const decorativeOpacityFor = (node) => {
      const topFade = 0.76 + 0.24 * smoothStep(clamp((node.y - 0.03) / 0.12, 0, 1));
      const bottomFade = 0.76 + 0.24 * smoothStep(clamp((0.97 - node.y) / 0.12, 0, 1));
      const verticalBoundaryFade = Math.min(topFade, bottomFade);
      return node.opacity * verticalBoundaryFade;
    };

    const curveFor = (start, end) => {
      const midpointX = (start.x + end.x) / 2;
      const midpointY = (start.y + end.y) / 2;
      const bend = Math.min(28, Math.hypot(end.x - start.x, end.y - start.y) * 0.08);
      return {
        start,
        control: { x: midpointX, y: midpointY - bend },
        end
      };
    };

    const attachedCurveFor = (start, end, startRadius, endRadius) => {
      const deltaX = end.x - start.x;
      const deltaY = end.y - start.y;
      const distance = Math.max(Math.hypot(deltaX, deltaY), 1);
      const directionX = deltaX / distance;
      const directionY = deltaY / distance;

      return curveFor(
        {
          x: start.x + directionX * startRadius * 0.86,
          y: start.y + directionY * startRadius * 0.86
        },
        {
          x: end.x - directionX * endRadius * 0.86,
          y: end.y - directionY * endRadius * 0.86
        }
      );
    };

    const roundedPath = (curve) => {
      context.beginPath();
      context.moveTo(curve.start.x, curve.start.y);
      context.quadraticCurveTo(
        curve.control.x,
        curve.control.y,
        curve.end.x,
        curve.end.y
      );
    };

    const pointOnCurve = (curve, progress) => {
      const inverse = 1 - progress;
      return {
        x: inverse * inverse * curve.start.x +
          2 * inverse * progress * curve.control.x +
          progress * progress * curve.end.x,
        y: inverse * inverse * curve.start.y +
          2 * inverse * progress * curve.control.y +
          progress * progress * curve.end.y
      };
    };

    const drawAxon = (
      curve,
      fromOpacity = 1,
      toOpacity = 1,
      isActive = false
    ) => {
      const gradientFor = (color, alpha) => {
        const gradient = context.createLinearGradient(
          curve.start.x,
          curve.start.y,
          curve.end.x,
          curve.end.y
        );
        gradient.addColorStop(0, `rgba(${color}, ${fromOpacity * alpha})`);
        gradient.addColorStop(1, `rgba(${color}, ${toOpacity * alpha})`);
        return gradient;
      };

      roundedPath(curve);
      context.lineCap = 'round';
      context.lineWidth = isActive ? 6 : 4;
      context.strokeStyle = gradientFor(
        isActive ? '104, 190, 160' : '112, 126, 139',
        isActive ? 0.14 : 0.07
      );
      context.shadowBlur = isActive ? 12 : 4;
      context.shadowColor = isActive
        ? 'rgba(116, 207, 177, 0.46)'
        : 'rgba(113, 132, 145, 0.18)';
      context.stroke();

      roundedPath(curve);
      context.lineWidth = isActive ? 2.1 : 1.45;
      context.strokeStyle = gradientFor(
        isActive ? '211, 237, 202' : '126, 145, 143',
        isActive ? 0.82 : 0.48
      );
      context.shadowBlur = isActive ? 7 : 2;
      context.stroke();
    };

    const draw = (time) => {
      context.clearRect(0, 0, width, height);
      const coreScaleX = width < 700 ? 0.5376 : 0.4608;
      const coreScaleY = width < 700 ? 0.86 : 0.78;
      const positions = nodes.map((node) =>
        positionFor(node, time, coreScaleX, coreScaleY)
      );
      const decorativeScaleX = width < 700 ? 0.688 : 0.64;
      const decorativeScaleY = width < 700 ? 0.72 : 0.92;
      const decorativePositions = decorativeNodes.map((node) =>
        positionFor(node, time, decorativeScaleX, decorativeScaleY)
      );

      if(pointer.active){
        activeNode = positions.reduce((closest, position, index) => {
          if(!nodes[index].href){
            return closest;
          }
          const distance = Math.hypot(pointer.x - position.x, pointer.y - position.y);
          const hitRadius = Math.max(30, baseRadiusFor(nodes[index]) * nodes[index].hoverScale);
          return distance <= hitRadius && distance < closest.distance
            ? { index, distance }
            : closest;
        }, { index: -1, distance: Infinity }).index;
      } else {
        activeNode = -1;
      }

      nodes.forEach((node, index) => {
        const targetScale = index === activeNode ? hoveredScaleFor(node) : 1;
        const easing = reducedMotion ? 1 : 0.14;
        node.hoverScale += (targetScale - node.hoverScale) * easing;
      });

      const radii = nodes.map((node) => baseRadiusFor(node) * node.hoverScale);
      const decorativeRadii = decorativeNodes.map((node) => node.size);
      const decorativeOpacities = decorativeNodes.map(decorativeOpacityFor);
      const allPositions = positions.concat(decorativePositions);
      const allRadii = radii.concat(decorativeRadii);

      decorativeLinks.forEach(([from, to]) => {
        const fromOpacity = from < nodes.length
          ? 1
          : decorativeOpacities[from - nodes.length];
        const toOpacity = to < nodes.length
          ? 1
          : decorativeOpacities[to - nodes.length];
        const curve = attachedCurveFor(
          allPositions[from],
          allPositions[to],
          allRadii[from],
          allRadii[to]
        );

        drawAxon(curve, fromOpacity, toOpacity);
      });

      links.forEach(([from, to], linkIndex) => {
        const isActive = activeNode === from || activeNode === to;
        const curve = attachedCurveFor(
          positions[from],
          positions[to],
          radii[from],
          radii[to]
        );
        drawAxon(curve, 1, 1, isActive);

        if(isActive){
          const direction = activeNode === from ? 1 : -1;
          const cycle = reducedMotion ? 0.5 : (time * 0.00058 + linkIndex * 0.07) % 1;
          const signalPosition = direction === 1 ? cycle : 1 - cycle;

          for(let trailIndex = 4; trailIndex >= 0; trailIndex -= 1){
            const trailProgress = signalPosition - direction * trailIndex * 0.026;
            if(trailProgress < 0 || trailProgress > 1){
              continue;
            }

            const signal = pointOnCurve(curve, trailProgress);
            const strength = 1 - trailIndex / 5;
            context.beginPath();
            context.arc(signal.x, signal.y, 2.2 + strength * 2.2, 0, Math.PI * 2);
            context.fillStyle = `rgba(255, 244, 199, ${strength * 0.9})`;
            context.shadowBlur = 8 + strength * 10;
            context.shadowColor = 'rgba(116, 218, 183, 0.9)';
            context.fill();
          }
        }
      });

      decorativeNodes.forEach((node, index) => {
        const position = decorativePositions[index];
        const radius = decorativeRadii[index];
        context.save();
        context.globalAlpha = decorativeOpacities[index];
        const glow = context.createRadialGradient(
          position.x,
          position.y,
          radius * 0.2,
          position.x,
          position.y,
          radius * 2.2
        );

        glow.addColorStop(0, 'rgba(255, 255, 255, 0.84)');
        glow.addColorStop(0.35, rgbaFromHex(node.color, 0.36));
        glow.addColorStop(1, rgbaFromHex(node.color, 0));

        context.beginPath();
        context.arc(position.x, position.y, radius * 2.2, 0, Math.PI * 2);
        context.fillStyle = glow;
        context.shadowBlur = 0;
        context.fill();

        context.beginPath();
        context.arc(position.x, position.y, radius, 0, Math.PI * 2);
        context.fillStyle = rgbaFromHex(node.color, 0.82);
        context.strokeStyle = 'rgba(255, 255, 255, 0.8)';
        context.lineWidth = 1;
        context.shadowBlur = 5;
        context.shadowColor = rgbaFromHex(node.color, 0.34);
        context.fill();
        context.stroke();
        context.restore();
      });

      const drawNeuron = (node, index) => {
        const position = positions[index];
        const isActive = activeNode === index;
        const radius = radii[index];
        const glowRadius = radius * (isActive ? 1.55 : 2.05);
        const glow = context.createRadialGradient(
          position.x - radius * 0.3,
          position.y - radius * 0.35,
          radius * 0.15,
          position.x,
          position.y,
          glowRadius
        );

        glow.addColorStop(0, 'rgba(255, 255, 255, 0.9)');
        glow.addColorStop(0.18, rgbaFromHex(node.color, isActive ? 0.5 : 0.58));
        glow.addColorStop(0.46, rgbaFromHex(node.color, isActive ? 0.2 : 0.18));
        glow.addColorStop(1, rgbaFromHex(node.color, 0));

        context.beginPath();
        context.arc(position.x, position.y, glowRadius, 0, Math.PI * 2);
        context.fillStyle = glow;
        context.shadowBlur = 0;
        context.fill();

        const soma = context.createRadialGradient(
          position.x - radius * 0.28,
          position.y - radius * 0.32,
          radius * 0.08,
          position.x,
          position.y,
          radius
        );
        soma.addColorStop(0, 'rgba(255, 255, 255, 0.98)');
        soma.addColorStop(0.42, rgbaFromHex(node.color, isActive ? 0.68 : 0.58));
        soma.addColorStop(1, rgbaFromHex(node.color, isActive ? 0.96 : 0.86));

        context.beginPath();
        context.arc(position.x, position.y, radius, 0, Math.PI * 2);
        context.fillStyle = soma;
        context.strokeStyle = 'rgba(255, 255, 255, 0.95)';
        context.lineWidth = 2;
        context.shadowBlur = isActive ? 11 : 8;
        context.shadowColor = rgbaFromHex(node.color, isActive ? 0.44 : 0.3);
        context.fill();
        context.stroke();

        if(node.emoji){
          context.font = `${Math.max(15, radius * 0.86)}px "Segoe UI Emoji", "Apple Color Emoji", sans-serif`;
          context.textAlign = 'center';
          context.textBaseline = 'middle';
          context.shadowBlur = 0;
          context.fillStyle = '#0d1b2a';
          context.fillText(node.emoji, position.x, position.y + 1);
        }
      };

      const drawLabel = (node, index) => {
        if(!node.title){
          return;
        }

        const position = positions[index];
        const words = node.title.split(' ');
        const lines = [];
        let currentLine = '';
        const maxLabelWidth = Math.min(132, width * 0.2);

        context.font = '600 12px Inter, system-ui, sans-serif';
        words.forEach((word) => {
          const candidate = currentLine ? `${currentLine} ${word}` : word;
          if(currentLine && context.measureText(candidate).width > maxLabelWidth){
            lines.push(currentLine);
            currentLine = word;
          } else {
            currentLine = candidate;
          }
        });
        if(currentLine){
          lines.push(currentLine);
        }

        const labelY = position.y + radii[index] + 15;
        context.textAlign = 'center';
        context.textBaseline = 'top';
        context.lineJoin = 'round';
        context.lineWidth = 4;
        context.strokeStyle = 'rgba(248, 251, 255, 0.94)';
        context.fillStyle = '#263c56';
        context.shadowBlur = 0;

        lines.forEach((line, lineIndex) => {
          const lineY = labelY + lineIndex * 15;
          context.strokeText(line, position.x, lineY);
          context.fillText(line, position.x, lineY);
        });
      };

      const drawOrder = nodes
        .map((node, index) => index)
        .filter((index) => index !== activeNode);
      if(activeNode >= 0){
        drawOrder.push(activeNode);
      }

      drawOrder.forEach((index) => drawNeuron(nodes[index], index));
      drawOrder.forEach((index) => drawLabel(nodes[index], index));

      requestAnimationFrame(draw);
    };

    const updatePointer = (event) => {
      const bounds = canvas.getBoundingClientRect();
      pointer.x = event.clientX - bounds.left;
      pointer.y = event.clientY - bounds.top;
      pointer.active = true;
    };

    canvas.addEventListener('pointermove', updatePointer);
    canvas.addEventListener('pointerdown', updatePointer);
    canvas.addEventListener('pointerleave', () => {
      pointer.active = false;
    });
    canvas.addEventListener('click', () => {
      const destination = nodes[activeNode] && nodes[activeNode].href;
      if(destination){
        window.location.href = destination;
      }
    });

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    requestAnimationFrame(draw);
  }
});
