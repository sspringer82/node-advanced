export class Pet {
  #firstname = '';

  constructor(firstname) {
    this.#firstname = firstname;
  }

  get fullname() {
    return `${this.#firstname}`;
  }
}
