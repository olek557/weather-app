import { WeatherContainer } from "../WeatherContainer";
import Component from "../../framework/Component";

export default class App extends Component {
  constructor(host) {
    super(host);
    this.cityWeatherData = null;
    this.history = window.localStorage.getItem("searchCityHistory") ? JSON.parse(window.localStorage.getItem("searchCityHistory")) : [];
    this.favorites = window.localStorage.getItem("favoriteCity")? JSON.parse(window.localStorage.getItem("favoriteCity")): [] ;
  }

  bindEverything() {
    this.handleData = this.handleData.bind(this);
    this.handleAddToFavorites = this.handleAddToFavorites.bind(this);
  }

  handleData(city) {
    this.cityWeatherData = city;
    this.history.push(city.name);
    window.localStorage.setItem(
      "searchCityHistory",
      JSON.stringify(this.history)
    );
    this._render();
  }

  handleAddToFavorites(city) {
    if (this.favorites.indexOf(city) === -1) {
      this.favorites.push(city);
      window.localStorage.setItem(
        "favoriteCity",
        JSON.stringify(this.favorites)
      );
    }
    this._render();
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
