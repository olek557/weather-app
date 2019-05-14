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
    fetchWeather(city, 'weather').then(data => {
      // this.props.weatherData = data;
      // console.log('this', this);
      this.props.onDataRecived(data)
    });
  }


  render() {
    if (this.props.weatherData) {
      console.log('I am render number 1');
      // console.log(this.props.weatherData ? 'true' : 'false')
      // console.log(this.props.weatherData.main.temp)
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
      console.log('I am render number 2');
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
