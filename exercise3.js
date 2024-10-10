// Function to add a task to the list and save it to local storage
function addTask() {
    var taskInput = document.getElementById('taskInput');
    var task = taskInput.value.trim();  // Get the input value and remove spaces

    // Make sure the task is not empty
    if (task) {
        var taskList = document.getElementById('taskList');
        var li = document.createElement('li');  // Create a new list item
        li.innerText = task;

        // Create a delete button for each task
        var deleteButton = document.createElement('button');
        deleteButton.innerText = "Delete";
        deleteButton.onclick = function() {
            taskList.removeChild(li);  // Remove the task from the list
            removeTask(task);  // Remove the task from local storage
        };
        li.appendChild(deleteButton);  // Add the delete button to the list item

        taskList.appendChild(li);  // Add the list item to the task list
        saveTask(task);  // Save the task to local storage

        taskInput.value = '';  // Clear the input field
    }
}

// Function to save the task to local storage
function saveTask(task) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];  // Get existing tasks from local storage
    tasks.push(task);  // Add the new task to the list
    localStorage.setItem('tasks', JSON.stringify(tasks));  // Save the updated list to local storage
}

// Function to remove a task from local storage
function removeTask(task) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.filter(t => t !== task);  // Filter out the task to remove
    localStorage.setItem('tasks', JSON.stringify(tasks));  // Save the updated list to local storage
}

// Function to load tasks from local storage when the page loads
function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    var taskList = document.getElementById('taskList');
    tasks.forEach(task => {
        var li = document.createElement('li');  // Create a new list item for each task
        li.innerText = task;

        // Create a delete button for each task
        var deleteButton = document.createElement('button');
        deleteButton.innerText = "Delete";
        deleteButton.onclick = function() {
            taskList.removeChild(li);  // Remove the task from the list
            removeTask(task);  // Remove the task from local storage
        };
        li.appendChild(deleteButton);  // Add the delete button to the list item

        taskList.appendChild(li);  // Add the list item to the task list
    });
}

// Load tasks from local storage when the page is opened
window.onload = loadTasks;

  
