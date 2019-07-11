import Component from "../../framework/Component";

export default class CurrentWeather extends Component {
  constructor(host, props) {
    super(host, props);
  }
  init() {}
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
            tag: "h1",
            classList: ["h1"],
            children: [
              this.props.city,
              {
                tag: "button",
                classList: ["favorite-btn"],
                content: "&#11089;",
                eventHandlers: {
                  click: () => {
                    this.props.addToFavorites(this.props.city);
                  }
                }
              }
            ]
          },
          `<h3 class="h3">${this.props.shortDescription}</h3>`,
          `<h2 class="h2">${this.convertFarengateToCelsius(
            this.props.temperature
          )}°C</h2>`,
          `<i class="wi ${this.props.weatherIcon} card__icon"></i>`
        ]
      },
      `<div class="card__content">
        <div class="row">
          <div class="row__name">
            Wind
          </div>
          <div class="row__value">
            ${this.props.wind}
            <i class="wi wi-towards-0-deg"></i>
          </div>
        </div>
        <div class="row">
          <div class="row__name">
            Humidity
          </div>
          <div class="row__value">
            ${this.props.humidity}
          </div>
        </div>
        <div class="row">
          <div class="row__name">
            Pressure
          </div>
          <div class="row__value">
            ${this.props.pressure}
          </div>
        </div>
        <div class="row">
          <div class="row__name">
            Cloudiness
          </div>
          <div class="row__value">
            ${this.props.cloudiness}
          </div>
        </div>
      </div>`
    ];
  }
}
