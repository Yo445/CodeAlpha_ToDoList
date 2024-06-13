document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault();
    addTask();
});

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task');
        return;
    }

    const taskList = document.getElementById('taskList');
    const taskItem = document.createElement('li');

    const taskContent = document.createElement('span');
    taskContent.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        taskList.removeChild(taskItem);
    };

    taskItem.appendChild(taskContent);
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);

    taskInput.value = '';
}

