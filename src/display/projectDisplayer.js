import delTaskIcon from "../media/icons/task-div/delete-task-icon.svg";

export default function displayProject(project) {
  const projectContainer = document.getElementById("selected-project");
  projectContainer.innerHTML = "";

  const title = document.createElement("p");
  title.textContent = `${project.name}`;
  title.id = "project-title";

  const addNewTaskBtn = document.createElement("button");
  addNewTaskBtn.textContent = "Add New Task";
  addNewTaskBtn.id = "add-new-task-btn";

  const tasksContainer = document.createElement("div");
  tasksContainer.id = "tasks-container";
  const tasksToDoTitle = document.createElement("p");
  tasksToDoTitle.textContent = `Tasks to do - ${project.tasks.size}`;
  tasksToDoTitle.id = "tasks-to-do-title";
  tasksContainer.append(tasksToDoTitle);
  project.tasks.forEach((task) => {
    const taskDiv = document.createElement("div");
    const taskTitle = document.createElement("p");
    taskTitle.textContent = `${task.title}`;
    taskDiv.dataset.id = task.id;
    taskDiv.classList.add("task-div");

    taskDiv.append(taskTitle);

    const markDoneBtn = document.createElement("button");
    markDoneBtn.innerHTML = "&#10003;";
    markDoneBtn.classList.add("mark-done-btn");

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-task-btn");
    const deleteIcon = new Image();
    deleteIcon.src = delTaskIcon;
    deleteIcon.alt = "Delete";

    deleteBtn.appendChild(deleteIcon);

    const buttonsContainer = document.createElement("div");
    buttonsContainer.append(markDoneBtn, deleteBtn);
    taskDiv.append(buttonsContainer);

    tasksContainer.append(taskDiv);
  });

  projectContainer.append(title, addNewTaskBtn, tasksContainer);
}
