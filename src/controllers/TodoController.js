import TodoList from "../modules/TodoList";
import Project from "../modules/Project";
import Task from "../modules/Task";
import displayProject from "../display/ProjectDisplayer";
import addNewTaskDialog from "../display/newTaskDialog";
import { displayNav, hideNav } from "../display/displayNav";

export default class TodoController {
  constructor() {
    this.todoList = new TodoList();
    this.currentProject = null;
    this.isNavOpen = false;
    this.init();
  }

  init() {
    this.setupEventListeners();
  }

  setupEventListeners() {
    document.addEventListener("click", (e) => {
      if (e.target.matches("#add-new-task-btn")) {
        addNewTaskDialog();
        const dialog = document.getElementById("new-task-dialog");
        dialog.showModal();
      } else if (e.target.closest(".delete-task-btn")) {
        const taskId = e.target.closest("[data-id]").dataset.id;
        this.deleteTask(taskId);
      } else if (e.target.closest(".mark-done-btn")) {
      } else if (e.target.closest(".project-selector-btn")) {
        const projectButton = e.target.closest(".project-selector-btn");
        const projectName = projectButton.textContent.trim();
        this.switchToProject(this.todoList.getProject(projectName));
      } else if (e.target.closest("#nav-toggle-btn")) {
        if (this.isNavOpen) {
          hideNav();
          this.isNavOpen = false;
        } else {
          displayNav(this.todoList.projects);
          this.isNavOpen = true;
        }
      }
    });

    document.addEventListener("submit", (e) => {
      if (e.target.matches("#new-task-form")) {
        e.preventDefault();
        const title = document.getElementById("title").value;
        const description = document.getElementById("description").value;
        const newTask = new Task(title, description);
        this.addTask(newTask);

        document.getElementById("new-task-dialog").close();
      }
    });
  }

  addTask(task) {
    const project = this.todoList.getProject(this.currentProject);
    project.addTask(task);
    displayProject(project);
  }

  addProject(project) {
    this.todoList.addProject(project);
    this.currentProject = project.name;
    displayProject(project);
    displayNav(this.todoList.projects);
  }

  deleteTask(taskID) {
    this.todoList.getProject(this.currentProject).removeTask(taskID);
    displayProject(this.todoList.getProject(this.currentProject));
  }

  switchToProject(project) {
    this.currentProject = project.name;
    displayProject(project);
  }
}
