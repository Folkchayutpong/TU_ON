import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { setCookie } from '../utils/cookie-utils';

@customElement('logout-component')
export class LogoutComponent extends LitElement {

  static styles = css`
    /* Add your styles here */
    button {
      background-color: white;
      border: none;
      margin: 15px;
      width: 200px;
    }
    img {
      position: relative;
      right: 25%;
    }
    `;

  render() {
    return html`
    <form @submit=${this.logout}>
    <button type="submit">
      <img src="/assets/btn/set_func.svg" alt="Logout" />
    </button>
    </form>
    `;
  }

  logout(event: Event) {
    event.preventDefault();
    window.location.href = '/login';
  }
}
