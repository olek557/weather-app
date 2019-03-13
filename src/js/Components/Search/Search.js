import Component from "../../framework/Component";

export default class Search extends Component {
  constructor(host, props) {
    super(host, props);
  }
  render() {
    /*html*/
    return `
      <div class="search-input">
        <label for=""></label>
        <input type="text" class="search-input__input">
        <button class="search-input__btn">
          <i class="search-input__icon"></i>
        </button>
      </div>
    `;
  }
}
