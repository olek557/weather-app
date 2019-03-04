export default class Component {
  constructor(host) {
    this.host = host;
    this.render();
  }
  _render() {
    this.host.innerHTML = '';
    const content = this.render();
    if(typeof content === 'string') {
      this.host. innerHTML = this.render();
    }
    else {
      content.map(item => {
        if(typeof item === 'string') {
          const htmlElement = document.createElement('div');
          htmlElement.innerHTML = item;
          return htmlElement;
        } else {
          return item;
        }
      }) //[string|HTMLElement] = [HTMLElement]
      .forEach(htmlElemnt => {
        this.host.appendChild(htmlElemnt);
      })
    }
  }
  /* @returns {string | [string | HTMLElement]} */
  render() {
  }
}