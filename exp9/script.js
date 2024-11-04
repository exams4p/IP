class Task {
    constructor(name) {
        this.name = name;
        this.completed = false;
    }

    toggle() {
        this.completed = !this.completed;
    }
}

const tasks = [];

function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = ''; // Clear the current task list

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task.name;
        if (task.completed) {
            li.classList.add('completed');
        }

        // Event listener for toggling task completion
        li.addEventListener('click', () => {
            task.toggle();
            renderTasks();
        });

        // Create a delete button
        const deleteButton = createDeleteButton(index);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    });
}

// Function to create a delete button
function createDeleteButton(index) {
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-button');
    deleteButton.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent the task toggle event
        tasks.splice(index, 1);
        renderTasks();
    });
    return deleteButton;
}

// Function to clear all tasks
function clearTasks() {
    tasks.length = 0; // Empty the tasks array
    renderTasks(); // Render the updated task list
}

// Event listener for adding a new task
document.getElementById('addTaskButton').addEventListener('click', () => {
    const taskInput = document.getElementById('taskInput');
    const taskName = taskInput.value.trim();

    if (taskName) {
        const newTask = new Task(taskName);
        tasks.push(newTask);
        taskInput.value = ''; // Clear input field
        renderTasks(); // Render the updated task list
    }
});

// Event listener for clearing all tasks
document.getElementById('clearTasksButton').addEventListener('click', clearTasks);
