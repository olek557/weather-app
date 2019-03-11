import Component from "../../framework/Component";
import { Search } from "../Search";
import { WeatherShort } from "../WeatherShort";
import { WeatherDetails } from "../WeatherDetails";
import { Forecast } from "../Forecast";

export default class WeatherContainer extends Component {
  constructor(host, props) {
    super(host, props);
  }
  render() {
    return [
      {
        tag: "section",
        classList: ["card"],
        children: [
          { tag: Search },
          { tag: WeatherShort },
          { tag: WeatherDetails },
          { tag: Forecast },
          'test'
        ]
      }
    ];
  }
}
