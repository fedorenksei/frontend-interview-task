export class BaseComponent {
  /**
   * @typedef {(BaseComponent|string)} ComponentChild
   *
   * @param {{
   *  tag: keyof HTMLElementTagNameMap;
   *  className: string;
   *  text: string
   *  children: ComponentChild[];
   * }} options
   */
  constructor({ tag, className, text, children }) {
    this.node = document.createElement(tag);
    if (className) this.node.className = className;
    if (text) {
      this.node.textContent = text;
    } else {
      this.node.append(
        ...children.map((el) => {
          if (el instanceof BaseComponent) return el.node;
          return new BaseComponent({ tag: "p", text: el }).node;
        })
      );
    }
  }
}
