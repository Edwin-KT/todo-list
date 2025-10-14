export default class Task {
  #title;
  #description;
  #id;
  #isDone;

  constructor(title, description) {
    this.#title = title;
    this.#description = description;
    this.#id = crypto.randomUUID();
    this.#isDone = false;
  }

  get isDone() {
    return this.#isDone;
  }

  get title() {
    return this.#title;
  }

  get id() {
    return this.#id;
  }

  markDone() {
    this.#isDone = true;
  }

  toObject() {
    return {
      title: this.#title,
      description: this.#description,
      id: this.#id,
      isDone: this.#isDone,
    };
  }

  static fromObject(data) {
    const task = new Task(data.title, data.description);
    task.#id = data.id;
    task.#isDone = data.isDone;
    return task;
  }
}
