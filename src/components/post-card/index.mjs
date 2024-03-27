import "./style.css";
import { BaseComponent } from "../../utils/base-component.mjs";

export class PostCard extends BaseComponent {
  /**
   * @param {{userId: string; id: string; title: string; body: string}} data
   */
  constructor({ userId, title, body }) {
    super({
      tag: "div",
      className: "post-card",
      children: [userId, title, body],
    });
  }
}
