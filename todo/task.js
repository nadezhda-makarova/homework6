const input = document.getElementById('task__input');
const button = document.getElementById('tasks__add');
const tasksList = document.getElementById('tasks__list');

addEventsRemove = () => {
  const removeBtn = document.querySelectorAll('.task__remove');
  removeBtn.forEach((element) => {
    element.addEventListener('click', (e) => {
      e.target.closest('.task').remove();
    });
  });
}

button.addEventListener('click', (e) => {
  e.preventDefault();
  const html = `<div class="task">
    <div class="task__title">
      ${input.value}
    </div>
    <a href="#" class="task__remove">&times;</a>
  </div>`;

  tasksList.insertAdjacentHTML('afterend', html);

  addEventsRemove();

  input.value = '';
});