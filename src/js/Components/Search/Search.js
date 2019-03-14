import Component from "../../framework/Component";

export default class Search extends Component {
  constructor(host, props) {
    super(host, props);
  }
  bindEverything() {
    // this.onClick = this.onClick.bind(this);
  }
  onClick() {
    console.log("i am here");
  }

  render() {
    return [
      {
        tag: "div",
        classList: ["search-input"],
        children: [
          `<input type="text" class="search-input__input"></input>`,
          {
            tag: "button",
            classList: ['search-input__btn'],
            eventHandlers: {
              click: this.onClick
            },
            children: [
              `<i class="search-input__icon"></i>`
            ]
          }
        ]
      }
    ];
  }
}
