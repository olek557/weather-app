import Component from "../../framework/Component";
import { Search } from "../Search";
import { CurrentWeather } from "../CurrentWeather";
import { FavoritesCity } from "../FavoritesCity";
import { HistorySearch } from "../HistorySearch";
import { WeatherForecast } from "../WeatherForecast";
import fetchWeather from "../../framework/api";

export default class WeatherContainer extends Component {
  constructor(host, props) {
    super(host, props);
    this.props.weatherData = null;
  }

  bindEverything() {
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(city) {
    fetchWeather(city, "weather").then(data => {
      this.props.onDataReceived(data);
    });
  }

  render() {
    if (this.props.weatherData) {
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
              tag: CurrentWeather,
              props: {
                city: this.props.weatherData.name,
                temperature: this.props.weatherData.main.temp,
                shortDescription: this.props.weatherData.weather[0].description,
                pressure: this.props.weatherData.pressure,
                humidity: this.props.weatherData.humidity,
                wind: "Light breeze, 3.0 m/s, West ( 260 )",
                cloudiness: "Broken clouds",
                addToFavorites: this.props.onAddToFavorite
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
              tag: FavoritesCity,
              props: this.props.favoritesCity
            },
            {
              tag: HistorySearch,
              props: this.props.searchHistory
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
              tag: "p",
              content: "Please enter city name"
            },
            {
              tag: Search,
              props: {
                onSearch: this.handleSearch
              }
            }
          ]
        }
      ];
    }
  }
}
