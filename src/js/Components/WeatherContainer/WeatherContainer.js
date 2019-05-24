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
    this.state = this.props;
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(city) {
    fetchWeather(city, "forecast").then(data => {
      this.props.onDataReceived(data);
    });
  }

  render() {
    if (this.state.weatherData) {
      console.log(this.state)
      return [
        {
          tag: "section",
          classList: ["card", `${this.props.isFavorite ? "card--favorite" : null}`],
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
                city: this.state.weatherData.city.name,
                temperature: this.state.weatherData.list[0].main.temp,
                weatherIcon: getIconClass(this.state.weatherData.list[0].weather[0].id),
                shortDescription: this.state.weatherData.list[0].weather[0].description,
                pressure: this.state.weatherData.list[0].main.pressure,
                humidity: this.state.weatherData.list[0].main.humidity,
                wind: "Light breeze, 3.0 m/s, West ( 260 )",
                cloudiness: "Broken clouds",
                addToFavorites: this.state.onAddToFavorite
              }
            },
            {
              tag: WeatherForecast,
              props: {
                forecast: [
                  {
                    date: "23.01",
                    temperature: "21",
                    units: "metric"
                  },
                  {
                    date: "24.01",
                    temperature: "12",
                    units: "metric"
                  },
                  {
                    date: "25.01",
                    temperature: "22",
                    units: "metric"
                  }
                ]
              }
            },
            {
              tag: Cities,
              props: {
                cityFavorite: this.state.favoritesCity,
                cityHistory: this.state.searchHistory,
                onClick: this.handleSearch
              }
            }
          ]
        }
      ];
    } else {
      console.log("state", this.state);
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
                cityFavorite: this.state.favoritesCity,
                cityHistory: this.state.searchHistory,
                onClick: this.handleSearch
              }
            }
          ]
        }
      ];
    }
  }
}
