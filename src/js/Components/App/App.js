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
      "temp range",
      t1,
      t2,
      "wind",
      w1,
      "some text",
      {
        tag: Temperature,
        props: {
          temperature: 30,
          unit: "C"
        }
      },
      {
        tag: Wind,
        props: {
          wind_speed: 3000000,
          unit: "mps"
        }
      }
    ];
  }
}
