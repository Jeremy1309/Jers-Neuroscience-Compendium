document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('details').forEach((detail) => {
    detail.addEventListener('keydown', function (event) {
      if(event.key === 'Enter' || event.key === ' '){
        event.preventDefault();
        detail.open = !detail.open;
      }
    });
  });

  const stage = document.getElementById('network-stage');
  const background = document.getElementById('network-background');
  const networkNodes = document.getElementById('network-nodes');
  const networkLines = document.getElementById('network-lines');
  const detailTitle = document.getElementById('network-detail-title');
  const detailCopy = document.getElementById('network-detail-copy');

  if(stage && background && networkNodes && networkLines && detailTitle && detailCopy){
    const nodes = [
      { id: 'n1', title: 'Neuron 01', note: 'Future topic slot for a neuroscience concept.', x: 16, y: 22, radius: 98, leftAngle: -14, rightAngle: 10 },
      { id: 'n2', title: 'Neuron 02', note: 'Reserved for a future topic description.', x: 34, y: 14, radius: 106, leftAngle: -8, rightAngle: 16 },
      { id: 'n3', title: 'Neuron 03', note: 'A placeholder node for later content.', x: 59, y: 16, radius: 102, leftAngle: -16, rightAngle: 12 },
      { id: 'n4', title: 'Neuron 04', note: 'Future educational content can be attached here.', x: 82, y: 28, radius: 96, leftAngle: -6, rightAngle: 20 },
      { id: 'n5', title: 'Neuron 05', note: 'Designed to become a topic link later.', x: 20, y: 50, radius: 108, leftAngle: -12, rightAngle: 14 },
      { id: 'n6', title: 'Neuron 06', note: 'Space left open for future details.', x: 42, y: 45, radius: 100, leftAngle: -10, rightAngle: 10 },
      { id: 'n7', title: 'Neuron 07', note: 'An interactive shell for future navigation.', x: 63, y: 50, radius: 110, leftAngle: -18, rightAngle: 14 },
      { id: 'n8', title: 'Neuron 08', note: 'Placeholder for a topic page yet to be added.', x: 84, y: 56, radius: 98, leftAngle: -8, rightAngle: 18 },
      { id: 'n9', title: 'Neuron 09', note: 'This slot can later point to a subject page.', x: 31, y: 79, radius: 104, leftAngle: -16, rightAngle: 8 },
      { id: 'n10', title: 'Neuron 10', note: 'Reserved for future neuroscience content.', x: 66, y: 82, radius: 102, leftAngle: -12, rightAngle: 12 }
    ];

    const decorativeNodes = [
      { x: 4, y: 10, size: 8, delay: 0 }, { x: 10, y: 18, size: 7, delay: 1.2 }, { x: 18, y: 8, size: 9, delay: 0.6 },
      { x: 28, y: 6, size: 8, delay: 1.8 }, { x: 38, y: 10, size: 7, delay: 0.9 }, { x: 46, y: 8, size: 8, delay: 1.5 },
      { x: 58, y: 10, size: 7, delay: 1 }, { x: 70, y: 12, size: 9, delay: 0.3 }, { x: 82, y: 10, size: 8, delay: 1.1 },
      { x: 92, y: 18, size: 7, delay: 1.7 }, { x: 96, y: 34, size: 8, delay: 0.8 }, { x: 94, y: 52, size: 7, delay: 1.4 },
      { x: 88, y: 74, size: 9, delay: 0.5 }, { x: 78, y: 88, size: 7, delay: 1.3 }, { x: 64, y: 94, size: 8, delay: 0.7 },
      { x: 50, y: 96, size: 7, delay: 1.5 }, { x: 34, y: 92, size: 8, delay: 0.4 }, { x: 20, y: 90, size: 7, delay: 1.1 },
      { x: 8, y: 76, size: 9, delay: 0.2 }, { x: 4, y: 58, size: 7, delay: 1.4 }, { x: 4, y: 42, size: 8, delay: 0.6 },
      { x: 10, y: 30, size: 7, delay: 1.6 }, { x: 18, y: 56, size: 8, delay: 0.9 }, { x: 30, y: 22, size: 7, delay: 1.25 }
    ];

    const connections = [
      { from: 0, to: 1 }, { from: 1, to: 2 }, { from: 2, to: 3 }, { from: 0, to: 4 }, { from: 1, to: 5 },
      { from: 2, to: 6 }, { from: 3, to: 7 }, { from: 4, to: 5 }, { from: 5, to: 6 }, { from: 6, to: 7 },
      { from: 4, to: 8 }, { from: 5, to: 8 }, { from: 6, to: 9 }, { from: 7, to: 9 }, { from: 8, to: 9 },
      { from: 0, to: 5 }, { from: 1, to: 6 }, { from: 2, to: 7 }, { from: 3, to: 6 }, { from: 4, to: 6 },
      { from: 0, to: 6 }, { from: 1, to: 7 }, { from: 2, to: 8 }, { from: 3, to: 9 }, { from: 4, to: 7 },
      { from: 5, to: 9 }, { from: 6, to: 8 }, { from: [-8, 18], to: 0, sourceRadius: 34, targetRadius: nodes[0].radius },
      { from: 3, to: [108, 18], sourceRadius: nodes[3].radius, targetRadius: 36 },
      { from: [8, 104], to: 9, sourceRadius: 34, targetRadius: nodes[9].radius },
      { from: [104, 68], to: [116, 48], sourceRadius: 30, targetRadius: 30 },
      { from: [12, 96], to: [34, 78], sourceRadius: 32, targetRadius: 32 },
      { from: [90, 4], to: [112, 20], sourceRadius: 30, targetRadius: 28 },
      { from: [6, 64], to: [22, 92], sourceRadius: 30, targetRadius: 30 }
    ];

    const active = { id: null };

    const createDecorativeLayer = () => {
      background.innerHTML = decorativeNodes.map((node, index) => {
        const style = [
          `left:${node.x}%`,
          `top:${node.y}%`,
          `width:${node.size}px`,
          `height:${node.size}px`,
          `animation-delay:${node.delay}s`
        ].join(';');
        return `<span class="decorative-neuron" data-index="${index}" style="${style}"></span>`;
      }).join('');
    };

    const pointFor = (entry) => {
      if(Array.isArray(entry)){
        return { x: entry[0], y: entry[1] };
      }
      return { x: entry.x, y: entry.y };
    };

    const nodeEdgePoint = (from, to, radius) => {
      const dx = to.x - from.x;
      const dy = to.y - from.y;
      const length = Math.sqrt((dx * dx) + (dy * dy)) || 1;
      const inset = radius / 2 + 8;
      return {
        x: from.x + (dx / length) * inset,
        y: from.y + (dy / length) * inset
      };
    };

    const pathFor = (fromEntry, toEntry, sourceRadius = 100, targetRadius = 100) => {
      const from = pointFor(fromEntry);
      const to = pointFor(toEntry);
      const start = nodeEdgePoint(from, to, sourceRadius);
      const end = nodeEdgePoint(to, from, targetRadius);
      const dx = end.x - start.x;
      const dy = end.y - start.y;
      const distance = Math.sqrt(dx * dx + dy * dy) || 1;
      const bend = Math.min(140, 18 + distance * 0.18);
      const direction = ((from.x + to.x) % 2 > 1) ? 1 : -1;
      const cp1 = { x: (start.x + end.x) / 2 + (direction * bend), y: (start.y + end.y) / 2 - (direction * bend * 0.42) };
      return `M ${start.x} ${start.y} Q ${cp1.x} ${cp1.y} ${end.x} ${end.y}`;
    };

    const renderConnections = () => {
      const baseConnections = connections.map((connection) => {
        const fromNode = typeof connection.from === 'number' ? nodes[connection.from] : connection.from;
        const toNode = typeof connection.to === 'number' ? nodes[connection.to] : connection.to;
        const fromRadius = connection.sourceRadius || (typeof connection.from === 'number' ? nodes[connection.from].radius : 96);
        const toRadius = connection.targetRadius || (typeof connection.to === 'number' ? nodes[connection.to].radius : 96);
        const bridgeClass = Array.isArray(connection.from) || Array.isArray(connection.to) ? 'is-bridge' : '';
        return `<path class="${bridgeClass}" d="${pathFor(fromNode, toNode, fromRadius, toRadius)}"></path>`;
      }).join('');

      networkLines.innerHTML = `<defs><filter id="network-soft-glow"><feGaussianBlur stdDeviation="1.25" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>${baseConnections}`;
    };

    const renderNodes = () => {
      networkNodes.innerHTML = nodes.map((node, index) => {
        const style = [
          `left:${node.x}%`,
          `top:${node.y}%`,
          `--axon-left:${node.leftAngle}deg`,
          `--axon-right:${node.rightAngle}deg`
        ].join(';');

        return `
          <button class="neuron-node" type="button" data-id="${node.id}" data-title="${node.title}" data-note="${node.note}" style="${style}" aria-label="${node.title}">
            <span class="neuron-node__axon neuron-node__axon--left" aria-hidden="true"></span>
            <span class="neuron-node__axon neuron-node__axon--right" aria-hidden="true"></span>
            <span class="neuron-node__soma" aria-hidden="true"><span class="neuron-node__core">${String(index + 1).padStart(2, '0')}</span></span>
            <span class="neuron-node__label"><strong>${node.title}</strong><span>Future topic slot</span></span>
          </button>
        `;
      }).join('');
    };

    const setDetail = (node) => {
      detailTitle.textContent = node ? node.title : 'Hover a neuron';
      detailCopy.textContent = node ? node.note : 'The network is ready to link into neuroscience topics as the site expands.';
    };

    const clearActive = () => {
      active.id = null;
      networkNodes.querySelectorAll('.neuron-node').forEach((button) => {
        button.classList.remove('is-active');
      });
      setDetail(null);
    };

    const activateNode = (button) => {
      const node = {
        id: button.getAttribute('data-id'),
        title: button.getAttribute('data-title') || 'Neuron',
        note: button.getAttribute('data-note') || 'Future topic slot.'
      };

      active.id = node.id;
      networkNodes.querySelectorAll('.neuron-node').forEach((item) => {
        item.classList.toggle('is-active', item === button);
      });
      setDetail(node);
    };

    createDecorativeLayer();
    renderConnections();
    renderNodes();
    setDetail(null);

    networkNodes.querySelectorAll('.neuron-node').forEach((button) => {
      button.addEventListener('pointerenter', () => activateNode(button));
      button.addEventListener('focus', () => activateNode(button));
      button.addEventListener('pointerleave', () => {
        if(active.id === button.getAttribute('data-id')){
          clearActive();
        }
      });
      button.addEventListener('blur', () => {
        if(active.id === button.getAttribute('data-id')){
          clearActive();
        }
      });
      button.addEventListener('click', () => activateNode(button));
    });

    const updateConnectionHighlight = () => {
      networkLines.querySelectorAll('path').forEach((path) => {
        path.removeAttribute('filter');
      });
    };

    updateConnectionHighlight();
  }
});
