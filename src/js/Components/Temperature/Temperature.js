import Component from "../../framework/Component";

export default class Temperature extends Component {
  constructor(host) {
    super(host);
  }
  render() {
    super.render();
    return "I am a temperature";
  }
}
