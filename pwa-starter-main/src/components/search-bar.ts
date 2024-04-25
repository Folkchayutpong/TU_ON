import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';

@customElement('search-bar')
export class SearchBar extends LitElement {

  static styles = css`
  /* Add your styles here */
  div {
    display: flex;
    flex-direction: row;
    gap: 8px;
    margin-bottom: 15px;
    justify-content: center;
    background-color: var(--header-light-bg-color);
    box-shadow: 0px 0px 4px 2px rgb(0 0 0 / 25%);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
  }

  form {
    display: flex;
    flex-direction: row;
    gap: 8px;
    background-color: white;
    border-radius: 10px;
    height: 40px;
    width: 300px;
    box-shadow: 0 0 5px 0 #00000040 inset;
    margin-top: 30px;
    margin-bottom: 10px;
  }

  input {
    flex-grow: 2;
    border: none;
    border-radius: 10px;
  }
  input[type=text] {
    background-color: #00000000;
    padding-left: 10px;
  }
  input[type=text]:focus {
    outline: none;
  }
  button {
    border: none;
    border-radius: 10px;
    background-color: #C2E2F500;
  }
  `;
  updated(changedProperties: Map<string, any>) {
    if (changedProperties.has('activeTab')) {
      this.requestUpdate(); // Update the component to re-render when activeTab changes
    }
  }

  render() {
  return html`
    <div>
    <form @submit=${this.search}>
      <input type="text" name="search" placeholder="Search..." />
      <button type="submit"><img src="/assets/fa/Search.svg" alt="Search" id="btn-search"></button>
    </form>
    </div>
    `;
  }

  search() {

  }
}
