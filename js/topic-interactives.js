document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-concept-explorer]').forEach((explorer) => {
    const tabs = Array.from(explorer.querySelectorAll('[role="tab"]'));
    const panels = Array.from(explorer.querySelectorAll('[role="tabpanel"]'));

    if(!tabs.length || tabs.length !== panels.length){
      return;
    }

    explorer.classList.add('is-enhanced');

    const selectTab = (selectedTab, moveFocus = false) => {
      tabs.forEach((tab) => {
        const isSelected = tab === selectedTab;
        tab.setAttribute('aria-selected', String(isSelected));
        tab.tabIndex = isSelected ? 0 : -1;

        const panel = panels.find((candidate) => candidate.id === tab.getAttribute('aria-controls'));
        if(panel){
          panel.hidden = !isSelected;
        }
      });

      if(moveFocus){
        selectedTab.focus();
      }
    };

    tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => selectTab(tab));
      tab.addEventListener('keydown', (event) => {
        let nextIndex = null;

        if(event.key === 'ArrowRight' || event.key === 'ArrowDown'){
          nextIndex = (index + 1) % tabs.length;
        } else if(event.key === 'ArrowLeft' || event.key === 'ArrowUp'){
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
        selectTab(tabs[nextIndex], true);
      });
    });

    const initiallySelected = tabs.find((tab) => tab.getAttribute('aria-selected') === 'true') || tabs[0];
    selectTab(initiallySelected);
  });
});
