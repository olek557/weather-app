import Component from "../../framework/Component";
import { Search } from "../Search";
import { CurrentWeather } from "../CurrentWeather";
import { WeatherForecast } from "../WeatherForecast";
import fetchWeather from "../../framework/api";
import { Cities } from "../Cities";
import getIconClass from "../../framework/icon";

export default class WeatherContainer extends Component {
  constructor(host, props) {
    super(host, props);
  }

  init() {
    this.handleSearch = this.handleSearch.bind(this);
    this.handleClearHistory = this.handleClearHistory.bind(this);
    this.handleAddToFavorites = this.handleAddToFavorites.bind(this);

    this.state = {
      history: this.getCityList("searchCityHistory"),
      favorites: this.getCityList("favoriteCity"),
      cityForesast: []
    };
  }

  getCityList(listName) {
    return window.localStorage.getItem(listName)
      ? JSON.parse(window.localStorage.getItem(listName))
      : [];
  }

  updateLocalStorage(variable, value) {
    window.localStorage.setItem(variable, JSON.stringify(value));
  }

  convertFarengateToCelsius(temp) {
    return Math.round(temp - 273.15);
  }

  handleAddToFavorites(city) {
    let { favorites, isFavorite } = this.state;
    const index = favorites.indexOf(city);
    isFavorite = !isFavorite;
    isFavorite ? favorites.push(city) : favorites.splice(index, 1);
    this.updateLocalStorage("favoriteCity", favorites);
    this.updateState({ isFavorite });
  }
  handleSearch(city) {
    let isCityInFavorite = false;
    const { history, favorites } = this.state;
    fetchWeather(city, "forecast")
      .then(data => {
        const { city, list } = data;
        history.push(city.name);
        this.updateLocalStorage("searchCityHistory", history);
        if (favorites.indexOf(city.name) !== -1) {
          isCityInFavorite = true;
        }
        this.updateState({
          isFavorite: isCityInFavorite,
          cityWeatherData: data,
          cityForesast: list,
          history: history
        });
      })
      .catch(error => {
        console.log(
          "There has been a problem with your fetch operation: ",
          error.message
        );
      });
  }
  handleClearHistory() {
    this.updateLocalStorage("searchCityHistory", "");
    this.updateState({ history: [] });
  }

  render() {
    console.log(this.state);
    if (this.state.cityWeatherData) {
      return [
        {
          tag: "section",
          classList: ["card", `${this.state.isFavorite && "card--favorite"}`],
          children: [
            {
              tag: Search,
              props: {
                onSearch: this.handleSearch
              }
            },
            {
              tag: CurrentWeather,
              props: {
                city: this.state.cityWeatherData.city.name,
                temperature: this.state.cityWeatherData.list[0].main.temp,
                weatherIcon: getIconClass(
                  this.state.cityWeatherData.list[0].weather[0].id
                ),
                shortDescription: this.state.cityWeatherData.list[0].weather[0]
                  .description,
                pressure: this.state.cityWeatherData.list[0].main.pressure,
                humidity: this.state.cityWeatherData.list[0].main.humidity,
                wind: "Light breeze, 3.0 m/s, West ( 260 )",
                cloudiness: "Broken clouds",
                addToFavorites: this.handleAddToFavorites
              }
            },
            {
              tag: WeatherForecast,
              props: {
                forecast: this.state.cityForesast
                  .filter(item => {
                    const date = new Date(item.dt_txt);
                    if (date > new Date() && date.getHours() === 15) {
                      return true;
                    }
                  })
                  .slice(0, -1)
                  .map(item => {
                    const date = new Date(item.dt_txt);
                    return {
                      date: `${date.getDate()}.${date.getMonth()}`,
                      temperature: this.convertFarengateToCelsius(
                        item.main.temp
                      ),
                      units: "metric",
                      icon: getIconClass(item.weather[0].id)
                    };
                  })
              }
            },
            {
              tag: Cities,
              props: {
                cityFavorite: this.state.favorites,
                cityHistory: this.state.history,
                onClick: this.handleSearch,
                onClearHistory: this.handleClearHistory
              }
            }
          ]
        }
      ];
    } else {
      return [
        {
          tag: "section",
          classList: ["card"],
          children: [
            {
              tag: Search,
              props: {
                onSearch: this.handleSearch
              }
            },
            {
              tag: Cities,
              props: {
                cityFavorite: this.state.favorites,
                cityHistory: this.state.history,
                onClick: this.handleSearch,
                onClearHistory: this.handleClearHistory
              }
            }
          ]
        }
      ];
    }
  }
}
