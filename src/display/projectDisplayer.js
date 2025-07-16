import delTaskIcon from "../media/icons/task-div/delete-task-icon.svg";
import Project from "../modules/Project";

export default function displayProject(project) {
  const projectContainer = document.getElementById("selected-project");

  if (!project || !(project instanceof Project)) {
    projectContainer.innerHTML = "<p>No project selected</p>";
    return;
  }

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
  const taskCount = project.tasks ? project.tasks.size : 0;
  tasksToDoTitle.textContent = `Tasks to do - ${taskCount}`;
  tasksToDoTitle.id = "tasks-to-do-title";
  tasksContainer.append(tasksToDoTitle);

  const doneTasksContainer = document.createElement("div");
  doneTasksContainer.id = "done-tasks-container";
  const doneTasksTitle = document.createElement("p");
  doneTasksTitle.textContent = "Done Tasks";
  doneTasksTitle.id = "done-tasks-title";
  doneTasksContainer.append(doneTasksTitle);

  project.tasks.forEach((task) => {
    const taskDiv = document.createElement("div");
    const taskTitle = document.createElement("p");
    taskTitle.textContent = `${task.title}`;
    taskDiv.dataset.id = task.id;
    taskDiv.classList.add("task-div");

    taskDiv.append(taskTitle);

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-task-btn");
    const deleteIcon = new Image();
    deleteIcon.src = delTaskIcon;
    deleteIcon.alt = "Delete";
    deleteBtn.appendChild(deleteIcon);
    const buttonsContainer = document.createElement("div");
    if (task.isDone) {
      buttonsContainer.append(deleteBtn);
      taskDiv.append(buttonsContainer);
      taskTitle.classList.add("done-task");
      doneTasksContainer.append(taskDiv);
    } else {
      const markDoneBtn = document.createElement("button");
      markDoneBtn.innerHTML = "&#10003;";
      markDoneBtn.classList.add("mark-done-btn");

      buttonsContainer.append(markDoneBtn, deleteBtn);
      taskDiv.append(buttonsContainer);

      tasksContainer.append(taskDiv);
    }
  });

  projectContainer.append(
    title,
    addNewTaskBtn,
    tasksContainer,
    doneTasksContainer
  );
}
