const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const counter = document.getElementById("counter");

function updateCounter() {
  counter.textContent = taskList.children.length;
}

addButton.addEventListener("click", function () {
  if (taskInput.value.trim() === "") {
    return;
  }

  let li = document.createElement("li");
  let deleteButton = document.createElement("button");

  li.textContent = taskInput.value;
  deleteButton.textContent = "Supprimer";

  li.appendChild(deleteButton);
  taskList.appendChild(li);

  taskInput.value = "";

  updateCounter();

  li.addEventListener("click", function () {
    li.style.textDecoration = "line-through";
  });

  deleteButton.addEventListener("click", function () {
    li.remove();
    updateCounter();
  });
});
