export default class Project {
  #id;
  #name;
  #tasks;

  constructor(name) {
    this.#name = name;
    this.#id = crypto.randomUUID();
    this.#tasks = new Map();
  }

  get name() {
    return this.#name;
  }

  get tasks() {
    return new Map(this.#tasks);
  }

  addTask(task) {
    if (!this.#tasks.has(task.id)) {
      this.#tasks.set(task.id, task);
      return true;
    }
    return false;
  }

  removeTask(taskId) {
    if (this.#tasks.has(taskId)) {
      this.#tasks.delete(taskId);
      return true;
    }
    return false;
  }
}
