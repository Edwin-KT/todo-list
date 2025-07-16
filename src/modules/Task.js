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
}
