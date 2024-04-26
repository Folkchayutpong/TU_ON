import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';

@customElement('mid-fin')
export class MidFin extends LitElement {
  @property({ type: String }) queryString: string = window.location.search;
  @property({ type: String }) activeTab: string = this.queryString.includes('time=fin') ? 'fin' : 'mid';
  static styles = css`
  /* Add your styles here */
  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
  }

  form {
    display: flex;
    flex-direction: row;
    background-color: white;
    border-radius: 15px;
    height: 30px;
    width: 300px;
    box-shadow: 0 0 5px 0 #00000040;
    margin: 10px;
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
    border-radius: 15px;
    background-color: #C2E2F500;
    width: 50%;
  }

  button.active {
    background-color: #C2E2F5;
    box-shadow: 0 0 5px 0 #00000040;
  }
  `;

  render() {
    return html`
    <div>
    <form @submit=${this.toggle}>
      <button type="submit" name="time" value="mid" class="${this.activeTab === 'mid' ? 'active' : ''}">Mid</button>
      <button type="submit" name="time" value="fin" class="${this.activeTab === 'fin' ? 'active' : ''}">Final</button>
    </form>
    </div>
    `;
  }

  toggle() {

  }
}
