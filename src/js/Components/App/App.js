// import { Temperature } from "../Temperature";
// import { Wind } from "../Wind";
import { WeatherContainer } from "../WeatherContainer";
import Component from "../../framework/Component";

export default class App extends Component {
  constructor(host) {
    super(host);
  }
  render() {
    return [{tag: WeatherContainer}]
  }
}
