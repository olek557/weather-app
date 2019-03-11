import Component from "../../framework/Component";

export default class WeatherShort extends Component {
  constructor(host, props) {
    super(host, props);
  }
  render() {
    /*html*/
    return `
      <header class="card__header">
        <h1 class="h1">${ this.props.city}</h1>
        <h3 class="h3">${ this.props.shortDescription}</h3>
        <h2 class="h2">${ this.props.temperature}°C</h2>
        <i class="wi wi-day-sunny card__icon"></i>
      </header>
    `;
  }
}
