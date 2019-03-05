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
      this.host.innerHTML = content;
    } else {
      content
        .map(item => this._vDomPrototypeElementToHtmlElement(item)) //[string|HTMLElement] = [HTMLElement]
        .forEach(htmlElement => {
          console.log(htmlElement);
          this.host.appendChild(htmlElement);
        });
    }
  }
  /* @returns {string | [string | HTMLElement]} */
  render() {}
  /*
    @param {string | [string | HTMLElement| Object]} element
    @private
   */
  _vDomPrototypeElementToHtmlElement(element) {
    console.log(element);
    if (typeof element === "string") {
      const htmlElement = document.createElement("div");
      htmlElement.innerHTML = element;

      return htmlElement;
    } else {
      if (element.tag) {
        if (typeof element.tag === "function") {
          const container = document.createElement("div");
          new element.tag(container, element.props);
          return container;
        } else {
          // string
          const container = document.createElement(element.tag);
          if (element.content) {
            container.innerHTML = element.content;
          }
          [element.classList, element.attributes, element.children].forEach(
            item => {
              if (element[item] && !Array.isArray(element[item])) {
                element[item] = [element[item]];
              }
            }
          );
          if (element.classList) {
            container.classList.add(...element.classList);
          }
          if (element.attributes) {
            element.attributes.forEach(attributeSpec => {
              container.setAttribute(attributeSpec.name, attributeSpec.value);
            });
          }
          if (element.children) {
            element.children.forEach(element => {
              const htmlElement = this._vDomPrototypeElementToHtmlElement(
                element
              );
              container.appendChild(htmlElement);
            });
          }
          return container;
        }
      }
      return element;
    }
  }
}
