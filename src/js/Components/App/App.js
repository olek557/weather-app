import { Temperature } from "../Temperature";
import { Wind } from "../Wind";
import Component from "../../framework/Component";
export default class App extends Component {
  constructor(host) {
    super(host);
  }
  render() {
    const t1 = document.createElement("div");
    new Temperature(t1, { temperature: 7, unit: "C" });
    const t2 = document.createElement("div");
    new Temperature(t2, { temperature: 17, unit: "C" });
    const w1 = document.createElement("div");
    new Wind(w1, { wind_speed: 10040, unit: "mps" });
    return [
    `
    <section class="card">
      <header class="card__header">
        <div class="search-input">
          <label for=""></label>
          <input type="text" class="search-input__input">
          <button class="search-input__btn">
          </button>
        </div>
        <h1 class="h1">Lviv, UA</h1>
        <h3 class="h3">Mostly cloudy</h3>
        <h2 class="h2">21°C</h2>
        <i class="wi wi-day-sunny card__icon"></i>
      </header>
      <div class="card__content">
        <div class="row">
          <div class="row__name">
            Wind
          </div>
          <div class="row__value">
            85m.s
            <i class="wi wi-towards-0-deg"></i>
          </div>
        </div>
        <div class="row">
          <div class="row__name">
            Humidity
          </div>
          <div class="row__value">
            85%
          </div>
        </div>
        <div class="row">
          <div class="row__name">
            Pressure
          </div>
          <div class="row__value">
            1019gPa
          </div>
        </div>
        <div class="row">
          <div class="row__name">
            Max temp
          </div>
          <div class="row__value">
            20°C
          </div>
        </div>
        <div class="row">
          <div class="row__name">
            Min temp
          </div>
          <div class="row__value">
            21°C
          </div>
        </div>
      </div>
      <footer class="card__footer">
        <div class="forecast">
          <div class="forecast__item">
            <div class="forecast__date">
              23.01
            </div>
            <div class="forecast__temp">
              21°C
            </div>
            <div class="forecast__icon">
              <i class="wi wi-night-sleet"></i>
            </div>
          </div>
          <div class="forecast__item">
            <div class="forecast__date">
              23.01
            </div>
            <div class="forecast__temp">
              21°C
            </div>
            <div class="forecast__icon">
              <i class="wi wi-night-sleet"></i>
            </div>
          </div>
          <div class="forecast__item">
            <div class="forecast__date">
              23.01
            </div>
            <div class="forecast__temp">
              21°C
            </div>
            <div class="forecast__icon">
              <i class="wi wi-night-sleet"></i>
            </div>
          </div>
        </div>
      </footer>
    </section>
    `]
    // return [
    //   "temp range",
    //   t1,
    //   t2,
    //   w1,
    //   "some text",
    //   {
    //     tag: Temperature,
    //     props: {
    //       temperature: 30,
    //       unit: "C"
    //     }
    //   },
    //   {
    //     tag: Wind,
    //     props: {
    //       wind_speed: 3000000,
    //       unit: "mps"
    //     }
    //   },
    //   {
    //     tag: "div",
    //     content: "I am div",
    //     classList: ["nice"],
    //     attributes: [
    //       {
    //         name: "title",
    //         value: "I am div title"
    //       }
    //     ]
    //   },
    //   {
    //     tag: "div",
    //     content: "Me div",
    //     classList: ["nice"],
    //     attributes: [
    //       {
    //         name: "title",
    //         value: "I am div title"
    //       }
    //     ],
    //     children: [
    //       {
    //         tag: 'div',
    //         content: 'child1'
    //       },
    //       {
    //         tag: 'div',
    //         content: 'child2'
    //       },
    //       {
    //         tag: 'div',
    //         content: 'child1',
    //         children: [
    //           {tag: 'div', content: "iam child"},
    //           {tag: 'div', content: "iam child"},
    //         ]
    //       }
    //     ]
    //   }
    // ];

  }
}
