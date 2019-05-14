import Component from "../../framework/Component";

export default class CityList extends Component {
  constructor(host, props) {
    super(host, props);
  }
  render() {
    if (this.props.city) {
      let list = [];
      this.props.city.forEach(item => {
        let x = {
          tag: "li",
          classList: ["list__item"],
          content: item,
          eventHandlers: {
            click: () => {
              this.props.onClick(item);
            }
          }
        };
        list.push(x);
      });
      return list;
    } else {
      return "";
    }
  }
}
