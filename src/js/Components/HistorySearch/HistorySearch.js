import Component from "../../framework/Component";

export default class HistorySearch extends Component {
  constructor(host, props) {
    super(host, props);
  }
  render() {
    /*html*/
    return `
      <div>
        <h2 class="h2">History</h2>
        <ul class="list">
          <li class="list__item">
            <a href="link">Lviv</a>
           </li>
           <li class="list__item">
            <a href="link">Kyiv</a>
           </li>
        </ul>
      </div>
    `;
  }
}
