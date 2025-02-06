let tasks = [
    { description: "Task 1", priority: 1 },
    { description: "Task 2", priority: 0 },
    { description: "Task 3", priority: 1 },
];

function displayTasks(taskList) {
    const taskContainer = document.getElementById("task-list");
    taskContainer.innerHTML = ""; 

    taskList.forEach(task => {
        const taskElement = document.createElement("div");
        taskContainer.style.color = "white";
        taskElement.style.backgroundColor = task.priority === 1 ? "red" : "grey";
        taskElement.textContent = task.description;
        taskElement.classList.add("task");

        taskContainer.appendChild(taskElement);
    });
}

function addTask() {
    const taskInput = document.getElementById("task-input");
    const priorityInput = document.getElementById("priority-input");

    const taskDescription = taskInput.value.trim();
    const taskPriority = parseInt(priorityInput.value);

    if (taskDescription === "") return; 

    tasks.push({ description: taskDescription, priority: taskPriority });
    taskInput.value = "";
    displayTasks(tasks);
}


function filterTasks(priority) {
    let filteredTasks = [];
    if (priority === "all") {
        displayTasks(tasks);
    }else{
        tasks.forEach(task => {
            if (task.priority === priority) {
                filteredTasks.push(task);
            }
        });
        displayTasks(filteredTasks);
    }
    
}

document.getElementById("add-task-btn").addEventListener("click", addTask);
document.getElementById("filter-all").addEventListener("click", () => filterTasks("all"));
document.getElementById("filter-important").addEventListener("click", () => filterTasks(1));
document.getElementById("filter-not-important").addEventListener("click", () => filterTasks(0));

// Display initial tasks
displayTasks(tasks);
