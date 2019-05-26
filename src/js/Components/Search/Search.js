import Component from "../../framework/Component";

export default class Search extends Component {
  constructor(host, props) {
    super(host, props);
  }
  init() {
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.onSearch(event.target.cityName.value);
  }

  render() {
    return [
      {
        tag: "form",
        classList: ["search-input"],
        eventHandlers: {
          submit: this.onSubmit
        },
        children: [
          `<input type="text" class="search-input__input" name="cityName" placeholder="Enter city name"></input>`,
          {
            tag: "input",
            classList: ["search-input__btn"],
            attributes: [
              { name: "type", value: "submit" },
              { name: "value", value: "" }
            ],
            children: [`<i class="search-input__icon"></i>`]
          }
        ]
      }
    ];
  }
}
