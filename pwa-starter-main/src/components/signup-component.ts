import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { setCookie, url } from '../utils/cookie-utils';
import { addData, encrypt} from '../index';

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
          <input type="name" placeholder="Display Name" id="name" required>
          <input type="faculty" placeholder="Faculty" id="faculty" required>
          <button type="submit">Signup</button>
        </div>
      </form>
    `;
  }
  //อยากให้ encrypt และตรวจสอบว่า user ซ้ำมั้ย?
  async signup(event: Event) {
    event.preventDefault();
    const usernameInput = (this.shadowRoot!.getElementById('username') as HTMLInputElement).value;
    const passwordInput = this.shadowRoot!.getElementById('password') as HTMLInputElement;
    const nameInput = (this.shadowRoot!.getElementById('name') as HTMLInputElement).value;
    const facultyInput = (this.shadowRoot!.getElementById('faculty') as HTMLInputElement).value;

    // Encrypt the username and password
    const password = await encrypt(passwordInput.value);

    try {
      const docRef = await addData(usernameInput, password, nameInput, facultyInput);
      console.log("Document ID:", docRef.id);

      // Set the username and password in cookies
      //setCookie('username', username, 30);
      //setCookie('password', password, 30);

      window.location.href = '/login';
    } catch (error: any) {
      console.error('Signup failed:', error.message);
      alert('Signup failed. Please try again.');
    }
  }
}
//const username = await encrypt(usernameInput.value);