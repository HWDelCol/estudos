const form = document.querySelector('form');
const input = document.querySelector('#new-task');
const taskList = document.querySelector('#task-list');

function addTask(event) {
    event.preventDefault();
    const taskText = input.value.trim();
    if (taskText === '') return;
    const task = document.createElement('li');
    const taskLabel = document.createElement('label');
    const taskCheckbox = document.createElement('input');
    taskCheckbox.type = 'checkbox';
    taskLabel.textContent = taskText;
    task.appendChild(taskCheckbox);
    task.appendChild(taskLabel);
    taskList.appendChild(task);
    input.value = '';
}
form.addEventListener('submit', addTask);

function toggleTask(event) {
    const task = event.target.closest('li');
    if (!task) return;
    const checkbox = task.querySelector('input[type="checkbox"]');
    checkbox.checked = !checkbox.checked;
    task.classList.toggle('completed');
}

function deleteTask(event) {
    const task = event.target.closest('li');
    if (!task) return;
    task.remove();
}

taskList.addEventListener('click', function(event) {
    if (event.target.matches('input[type="cheackbox"]')) {
        toggleTask(event);
    } else if (event.target.matches('.delete')) {
        deleteTask(event);
    }
});