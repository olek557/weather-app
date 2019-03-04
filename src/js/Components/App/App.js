import { Temperature } from '../Temperature';
import Component from '../../framework/Component';
export default class App extends Component {
  constructor(host) {
    super(host);
  }
  
  render() {
    super.render();
    const temperature1 = document.createElement('div');
    new Temperature(temperature1);
    this.host.append(temperature1);
  }
}
