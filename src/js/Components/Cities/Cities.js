import Component from "../../framework/Component";
import { CityList } from "../CityList";

export default class Cities extends Component {
  constructor(host, props) {
    super(host, props);
  }
  init() {
    this.state = this.props;
  }
  render() {
    return [
      {
        tag: "div",
        children: [
          '<h2 class="h2">Favorites</h2>',
          {
            tag: "ul",
            classList: ["list"],
            children: [
              {
                tag: CityList,
                props: {
                  city: this.state.cityFavorite,
                  onClick: this.state.onClick
                }
              }
            ]
          },
          '<h2 class="h2">History</h2>',
          {
            tag: "ul",
            classList: ["list"],
            children: [
              {
                tag: CityList,
                props: {
                  city: this.state.cityHistory,
                  onClick: this.state.onClick
                }
              }
            ]
          },
          {
            tag: "button",
            classList: ["btn-link"],
            content: "Clear history",
            eventHandlers: {
              click: this.state.onClearHistory
            }
          }
        ]
      }
    ];
  }
}
