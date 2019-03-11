import Component from "../../framework/Component";

export default class WeatherDetails extends Component {
  constructor(host, props) {
    super(host, props);
  }
  render() {
    /*html*/
    return `
      <div class="card__content">
        <div class="row">
          <div class="row__name">
            Wind
          </div>
          <div class="row__value">
            85m.s
            <i class="wi wi-towards-0-deg"></i>
          </div>
        </div>
        <div class="row">
          <div class="row__name">
            Humidity
          </div>
          <div class="row__value">
            85%
          </div>
        </div>
        <div class="row">
          <div class="row__name">
            Pressure
          </div>
          <div class="row__value">
            1019gPa
          </div>
        </div>
        <div class="row">
          <div class="row__name">
            Max temp
          </div>
          <div class="row__value">
            20°C
          </div>
        </div>
        <div class="row">
          <div class="row__name">
            Min temp
          </div>
          <div class="row__value">
            21°C
          </div>
        </div>
      </div>
    `;
  }
}
