import { PostCard } from "../components/post-card/index.mjs";
import { PostsWrapper } from "../components/posts-wrapper/index.mjs";
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
    const postsCards = posts.map((data) => new PostCard(data));
    const postsWrapper = new PostsWrapper(postsCards);
    this.appNode.append(postsWrapper.node);
  }
}
