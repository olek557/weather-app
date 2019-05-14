import { WeatherContainer } from "../WeatherContainer";
import Component from "../../framework/Component";

export default class App extends Component {
  constructor(host) {
    super(host);
    this.cityWeatherData = null;
  }
  bindEverything() {
    this.handleData = this.handleData.bind(this);
  }

  handleData(data) {
    this.cityWeatherData = data;
    this._render();
  }

  render() {
    return [{
      tag: WeatherContainer,
      props: {
        onDataRecived: this.handleData,
        weatherData: this.cityWeatherData
      }
    }]
  }
}
