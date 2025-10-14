import Project from "./Project";

export default class TodoList {
  #projects;

  constructor() {
    this.#projects = new Map();
  }

  getProject(name) {
    if (this.#projects.has(name)) return this.#projects.get(name);
    return;
  }

  get projects() {
    return new Map(this.#projects);
  }

  addProject(project) {
    if (!this.#projects.has(project.name)) {
      this.#projects.set(project.name, project);
      return true;
    }
    return false;
  }

  removeProject(projectName) {
    if (this.#projects.has(projectName)) {
      this.#projects.delete(projectName);
      return true;
    }
    return false;
  }

  get allTasks() {
    const allTasks = new Project("All Tasks");

    this.#projects.forEach((project) => {
      project.tasks.forEach((task) => {
        allTasks.addTask(task);
      });
    });
    return allTasks;
  }

  toObject() {
    return {
      projects: Array.from(this.#projects.values()).map((project) =>
        project.toObject()
      ),
    };
  }

  static fromObject(data) {
    const todoList = new TodoList();
    data.projects.forEach((projectObj) => {
      todoList.addProject(Project.fromObject(projectObj));
    });
    return todoList;
  }
}
