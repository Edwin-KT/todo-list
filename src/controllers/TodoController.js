import TodoList from "../modules/TodoList";
import Project from "../modules/Project";
import Task from "../modules/Task";
import displayProject from "../display/ProjectDisplayer";

export default class TodoController {
  constructor() {
    this.todoList = new TodoList();
    this.currentProject = null;
    this.init();
  }

  init() {}

  addTask(task) {
    const project = this.todoList.getProject(this.currentProject);
    project.addTask(task);
    displayProject(project);
  }

  addProject(project) {
    this.todoList.addProject(project);
    this.currentProject = project.name;
    displayProject(project);
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
