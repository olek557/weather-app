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
    this.cityWeatherData = null;
  }
  bindEverything() {
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(city) {
    fetchWeather(city, 'weather').then(data => {
      this.cityWeatherData = data;
      this._render();
    });
  }


  render() {
    if (this.cityWeatherData) {
      console.log(this.cityWeatherData ? 'true' : 'false')
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
                city: 'this.cityWeatherData.name',
                temperature: this.cityWeatherData.main.temp,
                shortDescription: this.cityWeatherData.weather[0].description,
                pressure: this.cityWeatherData.pressure,
                humidity: this.cityWeatherData.humidity,
                wind: "Light breeze, 3.0 m/s, West ( 260 )",
                cloudiness: "Broken clouds"
              }
            },
            {
              tag: WeatherForecast,
              props: {
                forecast: [
                  {
                    date: "23.01",
                    temperature: "21",
                    units: 'metric'
                  },
                  {
                    date: "24.01",
                    temperature: "12",
                    units: 'metric'
                  },
                  {
                    date: "25.01",
                    temperature: "22",
                    units: 'metric'
                  }
                ]
              }
            },
            {
              tag: FavoritesCity,
              props: ['Lviv', 'Kyiv']
            },
            {
              tag: HistorySearch,
              props: ['London', 'Paris']
            },
          ]
        }
      ];

    } else {
      return [{
        tag: "section",
        classList: ["card"],
        children: [
          {
            tag: Search,
            props: {
              onSearch: this.handleSearch
            }
          }
        ]
      }];
    }
  }
}
