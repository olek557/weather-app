import Component from "../../framework/Component";

export default class WeatherForecastItem extends Component {
  constructor(host, props) {
    super(host, props);
  }
  render() {
    /*html*/
    return `
      <div class="forecast__item">
        <div class="forecast__date">
          ${this.props.date}
        </div>
        <div class="forecast__temp">
          ${this.props.temperature}°C
        </div>
        <div class="forecast__icon">
          <i class="wi ${this.props.icon}"></i>
        </div>
      </div>
    `;
  }
}
