import { WeatherContainer } from "../WeatherContainer";
import Component from "../../framework/Component";

export default class App extends Component {
  constructor(host) {
    super(host);
    this.cityWeatherData = null;
    this.history = [];
    this.favorites = [];
  }

  bindEverything() {
    this.handleData = this.handleData.bind(this);
    this.handleAddToFavorites = this.handleAddToFavorites.bind(this);
  }

  handleData(city) {
    this.cityWeatherData = city;
    this.history.push(city.name);
    console.log("history", this.history);
    this._render();
  }

  handleAddToFavorites(city) {
    if (this.favorites.indexOf(city) === -1) {
      this.favorites.push(city);
    }
    console.log("favorites", this.favorites);
  }

  render() {
    return [
      {
        tag: WeatherContainer,
        props: {
          onDataReceived: this.handleData,
          onAddToFavorite: this.handleAddToFavorites,
          weatherData: this.cityWeatherData,
          searchHistory: this.history,
          favoritesCity: this.favorites
        }
      }
    ];
  }
}
