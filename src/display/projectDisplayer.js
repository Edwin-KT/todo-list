export default function displayProject(project) {
  const projectContainer = document.getElementById("selected-project");

  projectContainer.innerHTML = "";

  const title = document.createElement("p");
  title.textContent = `${project.name}`;

  const addNewTaskBtn = document.createElement("button");
  addNewTaskBtn.textContent = "Add New Task";

  const tasksContainer = document.createElement("div");
  const tasksToDoTitle = document.createElement("p");
  tasksToDoTitle.textContent = `Tasks to do - ${project.tasks.size}`;
  tasksContainer.append(tasksToDoTitle);
  project.tasks.forEach((task) => {
    const taskDiv = document.createElement("div");
    const taskTitle = document.createElement("p");
    taskTitle.textContent = `${task.title}`;
    taskDiv.dataset.id = task.id;

    taskDiv.append(taskTitle);

    const markDoneBtn = document.createElement("button");
    markDoneBtn.innerHTML = "&#10003;";
    markDoneBtn.addEventListener("click", () => {});

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", function () {
      project.removeTask(task.id);
      displayProject(project);
    });

    taskDiv.append(markDoneBtn, deleteBtn);

    tasksContainer.append(taskDiv);
  });

  projectContainer.append(title, addNewTaskBtn, tasksContainer);
}
