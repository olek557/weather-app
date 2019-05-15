import Component from "../../framework/Component";
import { CityList } from "../CityList";

export default class Cities extends Component {
  constructor(host, props) {
    super(host, props);
  }
  render() {
    return [
      {
        tag: "div",
        children: [
          '<h2 class="h2">Favorites</h2>',
          {
            tag: 'ul',
            classList: ['list'],
            children: [
              {
                tag: CityList,
                props: {
                  city: this.props.cityFavorite,
                  onClick: this.props.onClick
                }
              },
            ]
          },
          '<h2 class="h2">History</h2>',
          {
            tag: 'ul',
            classList: ['list'],
            children: [
              {
                tag: CityList,
                props: {
                  city: this.props.cityHistory,
                  onClick: this.props.onClick
                }
              },
            ]
          },
        ]
      }
    ];
  }
}
