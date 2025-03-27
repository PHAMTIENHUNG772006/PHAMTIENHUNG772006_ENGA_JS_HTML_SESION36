// Lấy các phần tử cần thiết
const taskInput = document.getElementById("taskName");
const addButton = document.querySelector(".task-input button");
const pendingTasks = document.getElementById("pendingTasks");
const inProgressTasks = document.getElementById("inProgressTasks");
const doneTasks = document.getElementById("doneTasks");

let tasks = JSON.stringify(localStorage.getItem("task")) || [];

function renderTasks() {
    
    tasks.forEach((task, index) => {
        let taskDiv = document.createElement("div");
        taskDiv.classList.add("task");
        taskDiv.innerHTML = `
            <p>${task}</p>
            <button onclick="deleteTask(${index})">Xóa</button>
        `;
        pendingTasks.appendChild(taskDiv);
    });
}

addButton.addEventListener("click", function(){
    let input = taskInput.value.trim();
    if(input === ""){
        alert(" Không được đẻ trống dữ liệu");
        return;
    }
    let task = {
        input,
    }
    tasks.push(task);
    localStorage.setItem("task", JSON.stringify(tasks));
    document.createElement("div");

    renderTasks();
})

renderTasks();
// Lấy các phần tử cần thiết


// Lấy các phần tử cần thiết
const taskInput = document.getElementById("taskName");
const addButton = document.querySelector(".task-input button");
const pendingTasks = document.getElementById("pendingTasks");
const inProgressTasks = document.getElementById("inProgressTasks");
const doneTasks = document.getElementById("doneTasks");

// Tải công việc từ localStorage
function loadTasks() {
    pendingTasks.innerHTML = localStorage.getItem("pending") || "";
    inProgressTasks.innerHTML = localStorage.getItem("inProgress") || "";
    doneTasks.innerHTML = localStorage.getItem("done") || "";
    attachEventListeners();
}

// Lưu công việc vào localStorage
function saveTasks() {
    localStorage.setItem("pending", pendingTasks.innerHTML);
    localStorage.setItem("inProgress", inProgressTasks.innerHTML);
    localStorage.setItem("done", doneTasks.innerHTML);
}

// Tạo công việc mới
function createTask(taskText, targetColumn) {
    if (!taskText.trim()) return;
    
    const task = document.createElement("div");
    task.classList.add("task");
    task.innerHTML = `<p>${taskText}</p> <button>Chuyển tiếp</button>`;
    
    targetColumn.appendChild(task);
    saveTasks();
    attachEventListeners();
}

// Gắn sự kiện cho các nút "Chuyển tiếp"
function attachEventListeners() {
    document.querySelectorAll(".task button").forEach(button => {
        button.onclick = function () {
            const task = this.parentElement;
            
            if (task.parentElement.id === "pendingTasks") {
                inProgressTasks.appendChild(task);
            } else if (task.parentElement.id === "inProgressTasks") {
                doneTasks.appendChild(task);
                task.querySelector("button").remove(); // Xóa nút sau khi hoàn thành
            }
            saveTasks();
        };
    });
}

// Xử lý sự kiện thêm công việc
addButton.addEventListener("click", () => {
    createTask(taskInput.value, pendingTasks);
    taskInput.value = "";
});

// Tải công việc khi trang mở
window.onload = loadTasks;

