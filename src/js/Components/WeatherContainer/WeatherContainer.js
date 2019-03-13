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
          {
            tag: Search
          },
          {
            tag: WeatherShort,
            props: {
              city: "Lviv",
              temperature: "43",
              shortDescription: "Mostly cloudy"
            }
          },
          {
            tag: WeatherDetails,
            props: {
              pressure: 1018,
              humidity: 87,
              wind: 'Light breeze, 3.0 m/s, West ( 260 )',
              cloudiness: 'Broken clouds'
            }
          },
          {
            tag: Forecast,
            props: {
              forecast: [

              ],
            }
          },
          "test"
        ]
      }
    ];
  }
}
