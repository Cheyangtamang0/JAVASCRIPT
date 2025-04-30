document.getElementById('add-task').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskValue = taskInput.value.trim();
    
    if (taskValue === '') return; 

    const todoList = document.getElementById('todo-list');
 
    const listItem = document.createElement('li');
    
 
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    listItem.appendChild(checkbox);


    const taskText = document.createElement('span');
    taskText.textContent = taskValue;
    listItem.appendChild(taskText);

 
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'buttons';

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.className = 'edit';
    editButton.addEventListener('click', () => editTask(listItem, taskText));
    buttonContainer.appendChild(editButton);

   
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => deleteTask(listItem));
    buttonContainer.appendChild(deleteButton);

    listItem.appendChild(buttonContainer);
    todoList.appendChild(listItem);

    
    taskInput.value = '';
}

function editTask(listItem, taskText) {
    const newTask = prompt('Edit your task:', taskText.textContent);
    if (newTask !== null && newTask.trim() !== '') {
        taskText.textContent = newTask.trim();
    }
}

function deleteTask(listItem) {
    listItem.remove();
}