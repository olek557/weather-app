import { WeatherContainer } from "../WeatherContainer";
import Component from "../../framework/Component";

export default class App extends Component {
  constructor(host) {
    super(host);
    this.cityWeatherData = null;
    this.weatherIcon = null;
  }

  init() {
    this.state = {};
    this.updateState({ isFavorite: false });
    console.log('this.state',this.state)
    this.handleData = this.handleData.bind(this);
    this.handleAddToFavorites = this.handleAddToFavorites.bind(this);
    this.history = window.localStorage.getItem("searchCityHistory")
      ? JSON.parse(window.localStorage.getItem("searchCityHistory"))
      : [];
    this.favorites = window.localStorage.getItem("favoriteCity")
      ? JSON.parse(window.localStorage.getItem("favoriteCity"))
      : [];
  }

  handleData(city) {
    this.cityWeatherData = city;
    this.history.push(city.name);
    console.log(city);
    if (this.favorites.indexOf(city.name) !== -1) {
      this.updateState({ isFavorite: true });
    } else {
      this.updateState({ isFavorite: false });
    }
    window.localStorage.setItem(
      "searchCityHistory",
      JSON.stringify(this.history)
    );
    this._render();
  }

  handleAddToFavorites(city) {
    this.updateState({ isFavorite: true });
    if (this.favorites.indexOf(city) === -1) {
      this.favorites.push(city);
      window.localStorage.setItem(
        "favoriteCity",
        JSON.stringify(this.favorites)
      );
    }
  }

  render() {
    return [
      {
        tag: WeatherContainer,
        props: {
          isFavorite: this.state.isFavorite,
          onDataReceived: this.handleData,
          onAddToFavorite: this.handleAddToFavorites,
          searchHistory: this.history,
          favoritesCity: this.favorites,
          weatherData: this.cityWeatherData
        }
      }
    ];
  }
}
