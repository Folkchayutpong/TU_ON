import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { addData } from '../index';

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
  //อยากให้ encrypt และตรวจสอบว่า user ซ้ำมั้ย?
  async signup(event: Event) {
    event.preventDefault();
    const username = (this.shadowRoot!.getElementById('username') as HTMLInputElement).value;
    const password = (this.shadowRoot!.getElementById('password') as HTMLInputElement).value;

    try {
      const docRef = await addData(username, password);
      console.log("Document ID:", docRef.id);
      window.location.href = '/login';
    } catch (error: any) {
      console.error('Signup failed:', error.message);
      alert('Signup failed. Please try again.');
    }
  }
}
