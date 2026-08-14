if(document.querySelector('.hero--landing')){
  document.documentElement.classList.add('has-scroll-reveal');

  if('scrollRestoration' in history){
    history.scrollRestoration = 'manual';
  }

  const resetPageScroll = () => {
    const previousScrollBehavior = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);
    document.documentElement.style.scrollBehavior = previousScrollBehavior;
  };

  resetPageScroll();
  window.addEventListener('pageshow', resetPageScroll);
}

document.addEventListener('DOMContentLoaded', function () {
  const topicHeader = document.querySelector('[data-topic-header]');
  const homeTopicNav = document.querySelector('[data-home-topic-nav]');
  const topicLinks = [
    {
      key: 'brain',
      label: 'The Brain',
      chapterTitle: 'The Brain',
      href: 'brain.html',
      description: 'The Brain section explores the organization and function of the nervous system\u2019s central structure, including major lobes, deep brain regions, and functional networks.'
    },
    {
      key: 'neurons',
      label: 'Neurons',
      chapterTitle: 'Neurons',
      href: 'neurons.html',
      description: 'Explore the specialized cells that carry information through the nervous system, from their anatomy and electrical activity to synaptic communication.'
    },
    {
      key: 'neurotransmitters',
      label: 'Neurotransmitters',
      chapterTitle: 'Neurotransmitters',
      href: 'neurotransmitters.html',
      description: 'Meet the chemical messengers that allow neurons to communicate, and learn how their release, receptors, and removal shape brain activity.'
    },
    {
      key: 'disorders',
      label: 'Neurological & Psychiatric Disorders',
      chapterTitle: 'Neurological & Psychiatric Disorders',
      href: 'disorders.html',
      description: 'Examine conditions that affect the brain and nervous system, with an emphasis on their biology, symptoms, diagnosis, and clinical impact.'
    },
    {
      key: 'neurodegeneration',
      label: 'Neurodegenerative Diseases',
      chapterTitle: 'Neurodegenerative Diseases',
      href: 'neurodegeneration.html',
      description: 'Study disorders involving progressive loss of neurons, including the cellular changes and affected circuits behind cognitive and movement symptoms.'
    },
    {
      key: 'neuropharmacology',
      label: 'Neuropharmacology',
      chapterTitle: 'Neuropharmacology',
      href: 'neuropharmacology.html',
      description: 'Discover how medicines and other compounds influence neural signalling, behaviour, symptoms, and the treatment of neurological conditions.'
    },
    {
      key: 'genetics',
      label: 'Molecular Neuroscience',
      chapterTitle: 'Molecular Neuroscience',
      href: 'genetics.html',
      description: 'Explore how genes, proteins, and molecular pathways influence neural development, brain function, variation, and disease risk.'
    },
    {
      key: 'concepts',
      label: 'Associated Topics',
      chapterTitle: 'Associated Topics',
      href: 'concepts.html',
      description: 'Build a foundation in the ideas, methods, experiments, and emerging questions that guide modern neuroscience research.'
    },
    {
      key: 'about',
      label: 'About',
      chapterTitle: 'About Me',
      href: 'about.html',
      description: 'Learn about the person, purpose, and curiosity behind Jer\u2019s Neuroscience Compendium and its growing collection of notes.'
    }
  ];
  const buildTopicNavigation = (hrefPrefix = '', currentTopic = '') =>
    topicLinks.map((topic) => {
      const isCurrent = topic.key === currentTopic;
      return `
        <a
          href="${hrefPrefix}${topic.href}"
          ${isCurrent ? 'class="is-current" aria-current="page"' : ''}
        >${topic.label}</a>
      `;
    }).join('');

  if(homeTopicNav){
    homeTopicNav.innerHTML = `
      <nav class="topic-nav" aria-label="Neuroscience topics">
        <div class="topic-nav__inner">
          ${buildTopicNavigation('pages/')}
        </div>
      </nav>
    `;
  }

  if(topicHeader){
    const currentTopic = document.body.dataset.topic;
    const currentTopicIndex = topicLinks.findIndex(
      (topic) => topic.key === currentTopic
    );
    const nextTopic = topicLinks[
      (currentTopicIndex + 1 + topicLinks.length) % topicLinks.length
    ];
    const navigation = buildTopicNavigation('', currentTopic);

    topicHeader.innerHTML = `
      <div class="topic-header__bar">
        <a class="topic-home-link" href="../index.html">
          <span aria-hidden="true">←</span>
          <span>Home</span>
        </a>
        <a
          class="topic-home-link topic-next-link"
          href="${nextTopic.href}"
          aria-label="Next topic: ${nextTopic.label}"
        >
          <span>Next</span>
          <span aria-hidden="true">→</span>
        </a>
      </div>
      <nav class="topic-nav" aria-label="Neuroscience topics">
        <div class="topic-nav__inner">${navigation}</div>
      </nav>
    `;
  }

  document.querySelectorAll('details').forEach((detail) => {
    const summary = detail.firstElementChild;

    detail.addEventListener('keydown', function (event) {
      if(
        event.target === summary &&
        (event.key === 'Enter' || event.key === ' ')
      ){
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
    let activeStructureKey = null;

    const syncButtonState = (selectedStructureKey) => {
      structureButtons.forEach((button) => {
        button.setAttribute(
          'aria-pressed',
          button.dataset.brainStructure === selectedStructureKey ? 'true' : 'false'
        );
      });
    };

    const selectBrainStructure = (selectedButton) => {
      const selectedStructureKey = selectedButton.dataset.brainStructure;
      const nextStructureKey = activeStructureKey === selectedStructureKey
        ? null
        : selectedStructureKey;

      activeStructureKey = nextStructureKey;
      syncButtonState(nextStructureKey);

      brainViewer.dispatchEvent(new CustomEvent('brainstructureselect', {
        bubbles: true,
        detail: {
          structure: nextStructureKey,
          buttonId: nextStructureKey ? selectedButton.id : null
        }
      }));
    };

    structureButtons.forEach((button) => {
      button.addEventListener('click', () => selectBrainStructure(button));
    });
  };

  initializeBrainStructureMenu();

  const initializeBrainModelStatus = () => {
    const brainViewer = document.getElementById('brain-model-viewer');
    const status = document.querySelector('[data-brain-model-status]');

    if(!brainViewer || !status){
      return;
    }

    const statusTitle = status.querySelector('[data-brain-model-status-title]');
    const statusMessage = status.querySelector('[data-brain-model-status-message]');
    const progress = status.querySelector('[data-brain-model-progress]');
    const progressFill = status.querySelector('[data-brain-model-progress-fill]');
    let completionTimer = null;
    let failureTimer = null;

    const setProgress = (value) => {
      const percentage = Math.round(Math.min(Math.max(value, 0), 1) * 100);
      progress.setAttribute('aria-valuenow', String(percentage));
      progressFill.style.width = `${percentage}%`;
    };

    const markReady = () => {
      clearTimeout(completionTimer);
      clearTimeout(failureTimer);
      setProgress(1);
      statusTitle.textContent = 'Atlas ready';
      statusMessage.textContent = 'Explore the brain from any angle.';
      status.classList.remove('is-error');
      status.classList.add('is-complete');
      completionTimer = window.setTimeout(() => {
        status.hidden = true;
      }, 650);
    };

    const showLoadError = () => {
      clearTimeout(completionTimer);
      clearTimeout(failureTimer);
      status.hidden = false;
      status.classList.remove('is-complete');
      status.classList.add('is-error');
      statusTitle.textContent = 'The atlas could not load';
      statusMessage.textContent = 'Please refresh the page and try again.';
      progress.removeAttribute('aria-valuenow');
    };

    failureTimer = window.setTimeout(showLoadError, 20000);

    brainViewer.addEventListener('progress', (event) => {
      const totalProgress = event.detail?.totalProgress;

      if(Number.isFinite(totalProgress)){
        setProgress(totalProgress);
      }
    });

    brainViewer.addEventListener('load', markReady);
    brainViewer.addEventListener('error', showLoadError);

    if(brainViewer.loaded){
      markReady();
    }
  };

  initializeBrainModelStatus();

  const initializeScrollReveals = () => {
    const revealComponents = Array.from(
      document.querySelectorAll('[data-scroll-reveal]')
    );
    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    const revealImmediately = () => {
      revealComponents.forEach((component) => {
        component.classList.add('is-revealed');
      });
    };

    if(
      !revealComponents.length ||
      reducedMotion ||
      !('IntersectionObserver' in window)
    ){
      revealImmediately();
      return;
    }

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if(!entry.isIntersecting){
          return;
        }

        entry.target.classList.add('is-revealed');
        revealObserver.unobserve(entry.target);
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -8% 0px'
    });

    revealComponents.forEach((component) => {
      revealObserver.observe(component);
    });
  };

  initializeScrollReveals();

  const initializeChapterSelector = () => {
    const selector = document.querySelector('[data-chapter-selector]');

    if(!selector){
      return;
    }

    const preview = selector.querySelector('.chapter-preview');
    const content = selector.querySelector('[data-chapter-content]');
    const title = selector.querySelector('[data-chapter-title]');
    const description = selector.querySelector('[data-chapter-description]');
    const link = selector.querySelector('[data-chapter-link]');
    const chapterNumber = selector.querySelector('[data-chapter-number]');
    const pageNumber = selector.querySelector('.chapter-preview__page-number');
    const tabList = selector.querySelector('[role="tablist"]');
    const tabs = Array.from(selector.querySelectorAll('[data-chapter-tab]'));
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const mobileTabs = window.matchMedia('(max-width: 700px)');
    const syncTabOrientation = () => {
      tabList.setAttribute(
        'aria-orientation',
        mobileTabs.matches ? 'horizontal' : 'vertical'
      );
    };

    syncTabOrientation();
    mobileTabs.addEventListener('change', syncTabOrientation);

    const selectChapter = (tab) => {
      const topicIndex = topicLinks.findIndex(
        (topic) => topic.key === tab.dataset.chapterTab
      );
      const topic = topicLinks[topicIndex];

      if(!topic){
        return;
      }

      tabs.forEach((chapterTab) => {
        const isSelected = chapterTab === tab;
        chapterTab.classList.toggle('is-selected', isSelected);
        chapterTab.setAttribute('aria-selected', String(isSelected));
        chapterTab.tabIndex = isSelected ? 0 : -1;
      });

      const number = String(topicIndex + 1).padStart(2, '0');
      title.textContent = topic.chapterTitle;
      description.textContent = topic.description;
      link.href = `pages/${topic.href}`;
      chapterNumber.textContent = `Chapter ${number}`;
      pageNumber.textContent = number;
      preview.setAttribute('aria-labelledby', tab.id);

      if(!reducedMotion){
        content.classList.remove('is-turning');
        void content.offsetWidth;
        content.classList.add('is-turning');
      }
    };

    tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => selectChapter(tab));
      tab.addEventListener('keydown', (event) => {
        let nextIndex = null;

        if(event.key === 'ArrowDown' || event.key === 'ArrowRight'){
          nextIndex = (index + 1) % tabs.length;
        } else if(event.key === 'ArrowUp' || event.key === 'ArrowLeft'){
          nextIndex = (index - 1 + tabs.length) % tabs.length;
        } else if(event.key === 'Home'){
          nextIndex = 0;
        } else if(event.key === 'End'){
          nextIndex = tabs.length - 1;
        }

        if(nextIndex === null){
          return;
        }

        event.preventDefault();
        tabs[nextIndex].focus();
        selectChapter(tabs[nextIndex]);
      });
    });
  };

  initializeChapterSelector();

});
