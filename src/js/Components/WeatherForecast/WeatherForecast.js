import Component from "../../framework/Component";
import { WeatherForecastItem } from "../WeatherForecastItem";

export default class WeatherForecast extends Component {
  constructor(host, props) {
    super(host, props);
  }
  render() {
    return [{
      tag: 'div',
      classList: ['forecast'],
      children: [
        ...this.props.forecast.map((forecastItem) => {
          return {
            tag: WeatherForecastItem,
            props: {
              date: forecastItem.date,
              temperature: forecastItem.temperature,
            }
          }
        })
      ]

    }]
  }
}
