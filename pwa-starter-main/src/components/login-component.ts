import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { setCookie, url } from '../utils/cookie-utils';

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
    input {
      background-color: #00000000;
      border: none;
      padding: 8px;
      border-bottom: 1px solid #333;
      text-indent: 25px;
      margin-bottom: 15px;
    }
    input:focus {
      outline: none;
    }
    div {
      display:
    }

    label {
      position: relative;
    }

    label.user:before {
      content: "";
      position: absolute;
      left: 0px;
      top: 0;
      bottom: 0;
      width: 24px;
      background: url("/assets/fa/User_C.svg") no-repeat;
    }
    label.log:before {
      content: "";
      position: absolute;
      left: 0px;
      top: 0;
      bottom: 0;
      width: 24px;
      background: url("/assets/fa/Log_S.svg") no-repeat;
    }
    button {
      background-color: white;
      width: 100px;
      margin: 10px auto;
      border: none;
      padding: 8px;
      border-radius: 8px;
      cursor: alias;
    }

  `;

  render() {
    return html`
      <form @submit=${this.login}>
      <div>
        <label for="username" class="user">
          <input type="text" placeholder="Username" id="username" required>
        </label>
        <label for="password" class="log">
          <input type="password" placeholder="Password" id="password" required>
        </label>
        <button type="submit">Login</button>
      </div>
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
