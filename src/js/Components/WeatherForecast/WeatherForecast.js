import Component from "../../framework/Component";

export default class WeatherForecast extends Component {
  constructor(host, props) {
    super(host, props);
  }
  render() {
    /*html*/
    return `
      <footer class="card__footer">
        <div class="forecast">
          <div class="forecast__item">
            <div class="forecast__date">
              23.01
            </div>
            <div class="forecast__temp">
              21°C
            </div>
            <div class="forecast__icon">
              <i class="wi wi-night-sleet"></i>
            </div>
          </div>
          <div class="forecast__item">
            <div class="forecast__date">
              23.01
            </div>
            <div class="forecast__temp">
              21°C
            </div>
            <div class="forecast__icon">
              <i class="wi wi-night-sleet"></i>
            </div>
          </div>
          <div class="forecast__item">
            <div class="forecast__date">
              23.01
            </div>
            <div class="forecast__temp">
              21°C
            </div>
            <div class="forecast__icon">
              <i class="wi wi-night-sleet"></i>
            </div>
          </div>
        </div>
      </footer>
    `;
  }
}
