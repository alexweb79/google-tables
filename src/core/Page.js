export class Page {
  constructor(params) {
    this.params = params
  }

  getRoot() {
    throw new Error('Methods "getRoot" should be implemented')
  }

  afterRender() {}

  destroy() {}
}
