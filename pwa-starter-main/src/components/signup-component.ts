import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { setCookie, url } from '../utils/cookie-utils';
import { getUser, addData, encryptText, decryptText } from '../index';

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
  //อยากให้ encrypt และตรวจสอบว่า user ซ้ำมั้ย?
  async signup(event: Event) {
    event.preventDefault();
    const usernameInput = (this.shadowRoot!.getElementById('username') as HTMLInputElement).value;
    const passwordInput = (this.shadowRoot!.getElementById('password') as HTMLInputElement).value;
    const nameInput = (this.shadowRoot!.getElementById('name') as HTMLInputElement).value;
    const facultyInput = (this.shadowRoot!.getElementById('faculty') as HTMLInputElement).value;

    // Encrypt the username and password
    const password = await encryptText(passwordInput);
    const username = await encryptText(usernameInput);

    try {
      const userData = await getUser();
      var isUserExist;
      for (const aUser of userData.docs) {
        const data = aUser.data();
        const decryptedUser = await decryptText(data.username);
        isUserExist = decryptedUser === usernameInput;
        if (isUserExist == true) {
          break;
        }
      }
      if (!isUserExist) {
        const docRef = await addData(username, password, nameInput, facultyInput);
        console.log("Document ID:", docRef.id);
        window.location.href = '/login';
        return;
      }
      alert('Username is already exist')

      // Set the username and password in cookies
      //setCookie('username', username, 30);
      //setCookie('password', password, 30);

    } catch (error: any) {
      console.error('Signup failed:', error.message);
      alert('Signup failed. Please try again.');
    }
  }
}
//const username = await encrypt(usernameInput.value);