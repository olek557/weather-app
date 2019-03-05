export default class Component {
  constructor(host, props = {}) {
    this.host = host;
    this.props = props;
    this._render();
  }
  _render() {
    this.host.innerHTML = "";
    let content = this.render();
    if (typeof content === "string") {
      content = [content];
    }
    content
      .map(item => {
        if (typeof item === "string") {
          const htmlElement = document.createElement("div");
          htmlElement.innerHTML = item;
          return htmlElement;
        } else {
          if (typeof item.tag === "function") {
            const element = document.createElement("div");
            new item.tag(element, item.props);
            return element;
          }
        }
        return item;
      }) //[string|HTMLElement] = [HTMLElement]
      .forEach(htmlElement => {
        this.host.appendChild(htmlElement);
      });
  }
  /* @returns {string | [string | HTMLElement]} */
  render() {}
}
