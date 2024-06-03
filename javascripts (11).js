function addTask() {
    var taskInput = document.getElementById("taskInput").value;
    var taskTime = document.getElementById("taskTime").value;
    var taskPriority = document.getElementById("taskPriority").value;
    var taskList = document.getElementById("taskList");

    if (taskInput.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    var li = document.createElement("li");
    var taskDetails = document.createElement("span");
    taskDetails.textContent = taskInput + " - Time: " + taskTime + " - Priority: " + taskPriority;
    li.appendChild(taskDetails);

    var deleteButton = document.createElement("span");
    deleteButton.textContent = "❌";
    deleteButton.className = "delete";
    deleteButton.onclick = function() {
        this.parentElement.remove();
    };

    li.appendChild(deleteButton);
    taskList.appendChild(li);

    // Clear input fields after adding task
    document.getElementById("taskInput").value = "";
    document.getElementById("taskTime").value = "";
}
