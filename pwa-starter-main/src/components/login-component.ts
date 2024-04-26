import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { setCookie, url, getCookie } from '../utils/cookie-utils';
import { getUser, decryptText } from "../index"

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

  async login(event: Event) {
    event.preventDefault();
    const usernameInput = (this.shadowRoot!.getElementById('username') as HTMLInputElement).value;
    const passwordInput = (this.shadowRoot!.getElementById('password') as HTMLInputElement).value;
    try {
      const userData = await getUser();
      for (const aUser of userData.docs) {
        const data = aUser.data();
        const decryptedUser = await decryptText(data.username);
        const decryptedPass = await decryptText(data.password);

        const isValidCredentials = decryptedUser === usernameInput && decryptedPass === passwordInput;

        if (isValidCredentials) {
          setCookie(data.id)
          window.location.href = '/home';
          return;
        }
      }
      alert('Invalid username or password');

    } catch (error) {
      console.error('Error while logging in:', error);
      alert('Error occurred while logging in');
    }


  }
}
// async login(event: Event) {
//   event.preventDefault();
//   const usernameInput = (this.shadowRoot!.getElementById('username') as HTMLInputElement).value;
//   const passwordInput = (this.shadowRoot!.getElementById('password') as HTMLInputElement).value;
//   try {
//     const userData = await getUser(); // Wait for the Promise to resolve
//     for (const aUser of userData.docs) {
//       const data = aUser.data;
//       const decryptedUser = await decryptText(data.username);
//       const decryptedPass = await decryptText(data.password);

//       const isValidCredentials = decryptedUser === usernameInput && decryptedPass === passwordInput;

//       if (isValidCredentials) {
//         setCookie(data.id)
//         window.location.href = '/home';
//         return;
//       }
//     }
//     alert('Invalid username or password');

//   } catch (error) {
//     console.error('Error while logging in:', error);
//     alert('Error occurred while logging in');
//   }
// }

