function addTask() {
    const taskInput = document.getElementById("newTaskInput");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const taskList = document.getElementById("taskList");

    // Create new task item
    const taskItem = document.createElement("li");

    const taskSpan = document.createElement("span");
    taskSpan.className = "task-text";
    taskSpan.textContent = taskText;

    const buttonContainer = document.createElement("div");
    buttonContainer.className = "task-buttons";

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-button";
    deleteButton.textContent = "Delete";
    deleteButton.onclick = () => handleButtonClick("Delete", deleteButton);

    const completeButton = document.createElement("button");
    completeButton.className = "complete-button";
    completeButton.textContent = "Complete";
    completeButton.onclick = () => handleButtonClick("Complete", completeButton);

    buttonContainer.appendChild(deleteButton);
    buttonContainer.appendChild(completeButton);

    taskItem.appendChild(taskSpan);
    taskItem.appendChild(buttonContainer);

    taskList.appendChild(taskItem);
    taskInput.value = "";
}

function handleButtonClick(action, button) {
    const taskItem = button.closest("li");
    const taskText = taskItem.querySelector(".task-text");

    if (action === "Delete") {
        taskItem.remove();
    } else if (action === "Complete") {
        taskText.classList.toggle("completed");
    }

    console.log(`You clicked the ${action} button.`);
}
