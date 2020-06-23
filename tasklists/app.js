// Define UI vars
const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-task");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

// Load all event listeners
loadEventListeners();

function loadEventListeners() {
  // DOM load event
  document.addEventListener("DOMContentLoaded", getTasks);
  // Add task event
  form.addEventListener("submit", addTask);
  // Add delete event
  taskList.addEventListener("click", removeTask);
  // Add clear task event
  clearBtn.addEventListener("click", clearTasks);
  //Filter task event
  filter.addEventListener("keyup", filterTasks);
}

// Get tasks
function getTasks() {
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.forEach(function(task) {
    //Create li Elements
    const li = document.createElement("li");
    //Add Class
    li.className = "collection-item";
    //Create text Node and Append to li
    li.appendChild(document.createTextNode(task));
    //Create Link Element
    const link = document.createElement("a");
    //AddClass
    link.className = "delete-item secondary-content";
    //Add icon HTML
    link.innerHTML = '<i class="fa fa-remove"></i>';
    //Append link to li
    li.appendChild(link);
    //Append li to ul
    taskList.appendChild(li);
  });
}

// Add task
function addTask(e) {
  if (taskInput.value === "") {
    alert("Add a Task");
  }

  //Create li Elements
  const li = document.createElement("li");
  //Add Class
  li.className = "collection-item";
  //Create text Node and Append to li
  li.appendChild(document.createTextNode(taskInput.value));

  //Create Link Element
  const link = document.createElement("a");
  //AddClass
  link.className = "delete-item secondary-content";
  //Add icon HTML
  link.innerHTML = '<i class="fa fa-remove"></i>';
  //Append link to li
  li.appendChild(link);

  //Append li to ul
  taskList.appendChild(li);

  //Store task in local storage
  storeTasksInLocalStorage(taskInput.value);

  //Clear Input
  taskInput.value = "";

  e.preventDefault();
}

//Store Tasks
function storeTasksInLocalStorage(task) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Remove task
function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Are you sure?")) {
      e.target.parentElement.parentElement.remove();

      //Remove task from local storage
      removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
}

//Remove task from local storage
function removeTaskFromLocalStorage(taskItem) {
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.forEach(function(task, index) {
    if (taskItem.textContent === task) {
      tasks.splice(index, 1);
    }
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

//Clear tasks
function clearTasks() {
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }

  //Clear task from local storage
  clearTasksFromLocalStorage();
}

//Clear task from local storage
function clearTasksFromLocalStorage() {
  localStorage.clear();
}

//Filter tasks
function filterTasks(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll(".collection-item").forEach(function(task) {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });
}
