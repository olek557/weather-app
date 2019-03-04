import Component from "../../framework/Component";

export default class Temperature extends Component{
  constructor(host) {
    super(host);
  }
  render() {
    super.render();
    this.host.innerHTML = "I am a temperature";
  }
}