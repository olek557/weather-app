import Component from "../../framework/Component";
import { Search } from "../Search";
import { CurrentWeather } from "../CurrentWeather";
import { WeatherForecast } from "../WeatherForecast";

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
            tag: CurrentWeather,
            props: {
              city: "Lviv",
              temperature: "43",
              shortDescription: "Mostly cloudy",
              pressure: 1018,
              humidity: 87,
              wind: "Light breeze, 3.0 m/s, West ( 260 )",
              cloudiness: "Broken clouds"
            }
          },
          {
            tag: WeatherForecast,
            props: {
              forecast: [
                {
                  date: "23.01",
                  temperature: "21",
                  units: 'metric'
                },
                {
                  date: "24.01",
                  temperature: "12",
                  units: 'metric'
                },
                {
                  date: "25.01",
                  temperature: "22",
                  units: 'metric'
                }
              ]
            }
          }
        ]
      }
    ];
  }
}
