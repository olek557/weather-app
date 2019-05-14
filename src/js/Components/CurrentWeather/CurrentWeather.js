import Component from "../../framework/Component";

export default class CurrentWeather extends Component {
  constructor(host, props) {
    super(host, props);
  }
  render() {
    return [
      {
        tag: "header",
        classList: "card__header",
        children: [
          `<h1 class="h1">${this.props.city}</h1>`,
          {
            tag: "button",
            classList: "",
            content: "Add",
            eventHandlers: {
              click: () => {
                this.props.addToFavorites(this.props.city);
              }
            }
          },
          `<h3 class="h3">${this.props.shortDescription}</h3>`,
          `<h2 class="h2">${this.props.temperature}°C</h2>`,
          `<i class="wi wi-day-sunny card__icon"></i>`
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
