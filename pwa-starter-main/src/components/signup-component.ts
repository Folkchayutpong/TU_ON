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
  `;

  render() {
    return html`
      <form @submit=${this.signup}>
      <div>
        <input type="text" placeholder="Username" id="username" required>
        <input type="password" placeholder="Password" id="password" required>
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
