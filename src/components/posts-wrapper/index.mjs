import "./style.css";
import { BaseComponent } from "../../utils/base-component.mjs";

export class PostsWrapper extends BaseComponent {
  constructor(children) {
    super({
      tag: "div",
      className: "cards-wrapper",
      children,
    });
  }
}
