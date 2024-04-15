import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { setCookie } from '../utils/cookie-utils';

@customElement('logout-component')
export class LogoutComponent extends LitElement {

  static styles = css`
    /* Add your styles here */
  `;

  render() {
    return html`
      <form @submit=${this.logout}>
        <button type="submit">Logout</button>
      </form>
    `;
  }

  logout(event: Event) {
    event.preventDefault();
    setCookie('user', '', 0);  // Clear user data in cookie
    window.location.href = '/';
  }
}
