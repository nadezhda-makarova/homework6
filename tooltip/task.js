const tooltipList = document.querySelectorAll('.has-tooltip');

tooltipList.forEach(element => {
  element.addEventListener('click', (e) => {
    e.preventDefault();
    if (document.querySelector('.tooltip_active')) {
      document.querySelector('.tooltip_active').remove();
    };
    const paramsElement = element.getBoundingClientRect();
    const textTooltip = element.text;
    const html = `<div class="tooltip">${textTooltip}</div>`;
    element.insertAdjacentHTML('afterend', html);
    const tooltip = document.querySelector('.tooltip');
    tooltip.style.top = `${paramsElement.height + paramsElement.top}px`;
    tooltip.style.left = `${paramsElement.left}px`;
    tooltip.classList.add('tooltip_active');
  })
});