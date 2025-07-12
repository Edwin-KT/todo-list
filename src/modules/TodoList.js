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

  removeProject(project) {
    if (this.#projects.has(project.name)) {
      this.#projects.delete(project.name);
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
}
