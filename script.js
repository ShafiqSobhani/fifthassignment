
function changeBackground() {
    const colors = ["#ffeb3b", "#4caf50", "#2196f3", "#9c27b0", "#ff5722"];
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}

// Card       

document.getElementById("currentDate").innerText = new Date().toDateString();
document.getElementById("logDate").innerText = new Date().toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
        
function completeTask(button, taskName) {
    button.disabled = true;
    button.innerText = "Completed";
    
    let taskCount1 = document.getElementById("taskCount1");
    taskCount1.innerText = parseInt(taskCount1.innerText) + 1;
    
    let taskCount2 = document.getElementById("taskCount2");
    taskCount2.innerText = parseInt(taskCount2.innerText) - 1;

    let history = document.getElementById("taskHistory");
    let li = document.createElement("li");
    li.classList.add("list-group-item");
    li.innerText = `Task Completed: ${taskName} at ${new Date().toLocaleTimeString()}`;
    history.appendChild(li);
}

function clearHistory() {
    document.getElementById("taskHistory").innerHTML = "";
}
