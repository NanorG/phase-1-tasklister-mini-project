document.addEventListener("DOMContentLoaded", () => {
  const newTaskForm = document.getElementById("create-task-form");
  const newTaskDescription = document.getElementById("new-task-description");
  const newTaskPriority = document.getElementById("new-task-priority");
  const newTaskUl = document.getElementById("tasks");

  newTaskForm.addEventListener("submit", (event) =>
    createNewTask(event, newTaskDescription)
  );
});


const createNewTask = (event, newTaskDescription) => {
  event.preventDefault();

  const newTask = document.createElement("li");
  newTask.innerText = newTaskDescription.value;

  appendNewTask(newTask);
};

const appendNewTask = task => {
document.getElementById("tasks").appendChild(task);
};
