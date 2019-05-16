import Component from "../../framework/Component";

export default class CurrentWeather extends Component {
  constructor(host, props) {
    super(host, props);
  }
  init() {
    this.state = this.props;
  }
  convertFarengateToCelsius(temp) {
    return Math.round(temp - 273.15);
  }
  render() {
    return [
      {
        tag: "header",
        classList: ["card__header"],
        children: [
          {
            tag: 'h1',
            classList: ["h1"],
            children: [
              this.state.city,
              {
                tag: "button",
                classList: ["favorite-btn"],
                content: "&#11089;",
                eventHandlers: {
                  click: () => {
                    this.state.addToFavorites(this.state.city);
                  }
                }
              },
            ]
          },
          `<h3 class="h3">${this.state.shortDescription}</h3>`,
          `<h2 class="h2">${this.convertFarengateToCelsius(
            this.state.temperature
          )}°C</h2>`,
          `<i class="wi ${this.state.weatherIcon} card__icon"></i>`
        ]
      },
      `<div class="card__content">
        <div class="row">
          <div class="row__name">
            Wind
          </div>
          <div class="row__value">
            ${this.state.wind}
            <i class="wi wi-towards-0-deg"></i>
          </div>
        </div>
        <div class="row">
          <div class="row__name">
            Humidity
          </div>
          <div class="row__value">
            ${this.state.humidity}
          </div>
        </div>
        <div class="row">
          <div class="row__name">
            Pressure
          </div>
          <div class="row__value">
            ${this.state.pressure}
          </div>
        </div>
        <div class="row">
          <div class="row__name">
            Cloudiness
          </div>
          <div class="row__value">
            ${this.state.cloudiness}
          </div>
        </div>
      </div>`
    ];
  }
}
