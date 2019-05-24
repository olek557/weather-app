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
    this.handleData = this.handleData.bind(this);
    this.handleAddToFavorites = this.handleAddToFavorites.bind(this);
    this.history = this.getCityList("searchCityHistory");
    this.favorites = this.getCityList("favoriteCity");
    // this.updateState({ isFavorite: false });
  }

  getCityList(listName) {
    return window.localStorage.getItem(listName)
      ? JSON.parse(window.localStorage.getItem(listName))
      : [];
  }

  handleData(cityObj) {
    const { city } = cityObj;
    console.log("city", city);
    this.cityWeatherData = cityObj;
    this.history.push(city.name);
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
    if (this.favorites.indexOf(city) === -1) {
      this.favorites.push(city);
      window.localStorage.setItem(
        "favoriteCity",
        JSON.stringify(this.favorites)
      );
      this.updateState({ isFavorite: true });
    } else {
      const index = this.favorites.indexOf(city);
      this.favorites.splice(index, 1);
      window.localStorage.setItem(
        "favoriteCity",
        JSON.stringify(this.favorites)
      );
      this.updateState({ isFavorite: false });
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
