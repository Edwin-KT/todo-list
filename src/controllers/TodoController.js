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
    displayProject(this.currentProject);
    displayNav(this.todoList.projects);
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
        this.markTaskAsDone(e.target.closest("[data-id]").dataset.id);
      } else if (e.target.closest(".project-selector-btn")) {
        const projectButton = e.target.closest(".project-selector-btn");
        const projectName = projectButton.textContent.trim();
        this.switchToProject(this.todoList.getProject(projectName));
      } else if (e.target.matches("#nav-toggle-btn")) {
        if (this.isNavOpen) {
          hideNav();
          this.isNavOpen = false;
        } else {
          displayNav(this.todoList.projects);
          this.isNavOpen = true;
        }
      } else if (e.target.matches("#add-new-project-btn")) {
        const input = document.getElementById("project-input");
        const projectText = input.value.trim();

        if (projectText) {
          const newProject = new Project(projectText);
          this.addProject(newProject);
        }
      } else if (e.target.closest(".delete-project-btn")) {
        const projectName = e.target.closest(".delete-project-btn").dataset
          .projectName;
        this.deleteProject(projectName);
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

  deleteProject(projectName) {
    this.todoList.removeProject(projectName);

    if (this.currentProject === projectName) {
      this.currentProject =
        this.todoList.projects.size > 0
          ? this.todoList.projects.keys().next().value
          : null;
    }

    displayProject(this.todoList.getProject(this.currentProject));
    displayNav(this.todoList.projects);
  }

  deleteTask(taskID) {
    this.todoList.getProject(this.currentProject).removeTask(taskID);
    displayProject(this.todoList.getProject(this.currentProject));
  }

  markTaskAsDone(taskID) {
    const project = this.todoList.getProject(this.currentProject);
    project.doTask(taskID);
    displayProject(project);
  }

  switchToProject(project) {
    this.currentProject = project.name;
    displayProject(project);
  }
}
