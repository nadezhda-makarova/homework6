const tooltipList = document.querySelectorAll('.has-tooltip');

tooltipList.forEach(element => {
  element.addEventListener('click', (e) => {
    e.preventDefault();
    if(element.getAttribute('isactivetooltip')) {
      document.querySelector('.tooltip_active').remove();
      element.removeAttribute('isActiveTooltip');
    } else {
      if(document.querySelector('.tooltip_active')) {
        document.querySelector('.tooltip_active').remove();
        document.querySelector('[isactivetooltip="true"]').removeAttribute('isActiveTooltip');
      }
      element.setAttribute('isActiveTooltip', "true");
      const paramsElement = element.getBoundingClientRect();
      const textTooltip = element.getAttribute('title');
      const html = `<div class="tooltip">${textTooltip}</div>`;
      element.insertAdjacentHTML('afterend', html);
      const tooltip = document.querySelector('.tooltip');
      tooltip.style.top = `${paramsElement.height + paramsElement.top}px`;
      tooltip.style.left = `${paramsElement.left}px`;
      tooltip.classList.add('tooltip_active');
    }
  });
});