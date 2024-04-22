import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { setCookie, url } from '../utils/cookie-utils';
import { getUserByUsername } from "../index"

@customElement('login-component')
export class LoginComponent extends LitElement {

  static styles = css`
    /* Add your styles here */
    div {
      display: flex;
      flex-direction: column;
      gap: 8px;
      justify-content: center;
    }
  `;

  render() {
    return html`
      <form @submit=${this.login}>
      <div>
        <input type="text" placeholder="Username" id="username" required>
        <input type="password" placeholder="Password" id="password" required>
        <button type="submit">Login</button>
      </div>
      </form>   
    `;
  }
  //อยากให้ encrypt ตรงนี้ด้วย
  async login(event: Event) {
    event.preventDefault();
    const username = (this.shadowRoot!.getElementById('username') as HTMLInputElement).value;
    const password = (this.shadowRoot!.getElementById('password') as HTMLInputElement).value;

    try {
      const data = await getUserByUsername(username);
      if (data.username === username && data.password === password) {
        setCookie('username', data.username, 1);
        window.location.href = `/home`;
      } else {
        alert('Invalid username or password');
      }
    } catch (error) {
      console.error("Error to login: ", error);
      alert('Error occurred while logging in');
    }
  }

}