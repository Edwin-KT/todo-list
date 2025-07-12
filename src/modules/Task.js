export default class Task {
  #title;
  #description;
  #id;

  constructor(title, description) {
    this.#title = title;
    this.#description = description;
    this.#id = crypto.randomUUID();
  }

  get title() {
    return this.#title;
  }

  get id() {
    return this.#id;
  }
}
