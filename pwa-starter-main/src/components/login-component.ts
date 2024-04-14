import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { setCookie, url } from '../utils/cookie-utils';

@customElement('login-component')
export class LoginComponent extends LitElement {

  static styles = css`
    /* Add your styles here */
  `;

  render() {
    return html`
      <form @submit=${this.login}>
        <input type="text" placeholder="Username" id="username" required>
        <input type="password" placeholder="Password" id="password" required>
        <button type="submit">Login</button>
      </form>
    `;
  }

  login(event: Event) {
    event.preventDefault();
    const username = (this.shadowRoot!.getElementById('username') as HTMLInputElement).value;
    const password = (this.shadowRoot!.getElementById('password') as HTMLInputElement).value;

    // Edit the URL to match your API endpoint
    fetch(`${url}/users?username=${username}&password=${password}`)
    .then(response => response.json())
    .then(data => {
      if (data.length > 0) {
        setCookie('user', JSON.stringify(data[0]), 1);  // Set user data in cookie for 1 day
        window.location.href = '/';
      } else {
        alert('Invalid username or password');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Login failed. Please try again.');
    });
  }
}
