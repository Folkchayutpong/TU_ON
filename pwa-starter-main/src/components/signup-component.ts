import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { setCookie, url } from '../utils/cookie-utils';

@customElement('signup-component')
export class SignupComponent extends LitElement {

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
    label.at:before {
      content: "";
      position: absolute;
      left: 0px;
      top: 0;
      bottom: 0;
      width: 24px;
      background: url("/assets/fa/sign-at.svg") no-repeat;
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
      <form @submit=${this.signup}>
      <div>
        <label for="username" class="user">
          <input type="text" placeholder="Username" id="username" required>
        </label>
        <label for="password" class="log">
          <input type="password" placeholder="Password" id="password" required>
        </label>
        <label for="username" class="user">
          <input type="name" placeholder="Display Name" id="name" required>
        </label>
        <label for="faculty" class="at">
          <input type="faculty" placeholder="Faculty" id="faculty" required>
        </label>
        <button type="submit">Signup</button>
      </div>
      </form>
    `;
  }

  signup(event: Event) {
    event.preventDefault();
    const username = (this.shadowRoot!.getElementById('username') as HTMLInputElement).value;
    const password = (this.shadowRoot!.getElementById('password') as HTMLInputElement).value;

    // Edit the URL to match your API endpoint
    fetch(`${url}/users`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      if (data.id) {
        setCookie('user', JSON.stringify(data), 1);  // Set user data in cookie for 1 day
        window.location.href = '/';
      } else {
        alert('Signup failed. Please try again.');
      }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Signup failed. Please try again.');
    });

    // Redirect to home page after signup
    window.location.href = '/';
  }
}
