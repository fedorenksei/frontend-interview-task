import { api } from "../services/api.mjs";

export class App {
  /**
   * @param {HTMLElement} appNode
   */
  constructor(appNode) {
    this.appNode = appNode;
  }

  async run() {
    const posts = await api.getPosts();
    if (!posts) {
      this.appNode.append("Oops! Something went wrong");
      return;
    }
    this.appNode.append(JSON.stringify(posts));
  }
}
