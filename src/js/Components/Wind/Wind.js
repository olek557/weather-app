import Component from "../../framework/Component";

export default class Wind extends Component {
  constructor(host, props) {
    super(host, props);
  }
  render() {
    return this.props.wind_speed + ' ' + this.props.unit;
  }
}
