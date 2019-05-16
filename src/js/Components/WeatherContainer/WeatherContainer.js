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
    fetchWeather(city, "weather").then(data => {
      this.state.onDataReceived(data);
    });
  }

  render() {
    console.log('i was rendeered');
    if (this.state.weatherData) {
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
                city: this.state.weatherData.name,
                temperature: this.state.weatherData.main.temp,
                weatherIcon: getIconClass(this.state.weatherData.weather[0].id),
                shortDescription: this.state.weatherData.weather[0].description,
                pressure: this.state.weatherData.main.pressure,
                humidity: this.state.weatherData.main.humidity,
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
      console.log('state', this.state)
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
