import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { addPost } from '../index';

@customElement('post-component')
export class PostComponent extends LitElement {

  @property({ type: String }) nowdate = new Date().toLocaleString('sv-SE', { timeZone: 'Asia/Bangkok',
    day: '2-digit', month: '2-digit', year: 'numeric',
    hour: '2-digit', minute: '2-digit'}).replace(' ', 'T').slice(0, 16);
  static styles = css`
    /* Add your styles here */
    .card {
      margin: 20px 10px;
      padding: 20px;
      background-color: white;
      border-radius: 40px;
      box-shadow: 0 0 10px 0 #00000040;
      color: black;
    }

    h3 {
      margin: 0;
      padding: 0;
      text-align: center;
    }

    table {
      width: 100%;
    }

    input, label {
      display:block;
    }
    input {
      width: 100%;
      height: 10px;
      padding: 10px 0 10px 10px;
      border-radius: 20px;
      background-color: #C2E2F599;
      border: none;
      box-shadow: 0 0 5px 0 #00000040 inset;
    }
    textarea {
      width: 100%;
      height: 60px;
      padding: 10px 0 10px 10px;
      border-radius: 20px;
      background-color: #C2E2F599;
      border: none;
      box-shadow: 0 0 5px 0 #00000040 inset;
    }

    input[type="datetime-local"] {
      appearance: menulist-button;
    }
    input[type="datetime-local"]::-webkit-calendar-picker-indicator {
      // display: none;
      // -webkit-appearance: none;
      margin-right: 10px;
    }
    .end {
      display: flex;
      justify-content: end;
    }
    button {
      width: 100px;
      height: 40px;
      margin: 10px 0;
      background-color: #C2E2F5;
      border: none;
      border-radius: 20px;
      box-shadow: 0 0 5px 0 #00000040;
    }

  `;

  render() {
    console.log(this.nowdate);
    return html`
      <form @submit=${this.post}>
      <div class="card">
        <table>
          <tr>
            <td><h3>สร้างโพสหาเพื่อนติวหรืออ่านหนังสือ</h3></td>
          </tr>
          <tr>
          <td>
            <label for="topic">หัวข้อ</label>
            <input type="text" placeholder="เขียนอะไรสักอย่าง" id="topic" name="topic" required>
          </td>
          </tr>
          <tr>
          <td>
            <label for="detail">รายละเอียด</label>
            <textarea row="4" placeholder="เขียนอะไรสักอย่าง" id="detail" name="detail" required></textarea>
          </td>
          </tr>
          <tr>
          <td>
            <label for="date">วันที่/เวลา</label>
            <input type="datetime-local" id="date" value="${this.nowdate}" required>
          </td>
          </tr>
          <tr>
          <td>
            <label for="location">สถานที่</label>
            <input type="text" placeholder="เขียนอะไรสักอย่าง" id="location" required>
          </td>
          </tr>
          <tr>
          <td>
            <label for="subject">วิชา</label>
            <input type="text" placeholder="เขียนอะไรสักอย่าง" id="subject" required>
          </td>
          </tr>
          <tr>
          <td>
            <label for="contact">ติดต่อ</label>
            <input type="text" placeholder="เขียนอะไรสักอย่าง" id="contact" required>
          </td>
          </tr>
          <tr>
          <td class="end">
            <button type="submit">POST</button>
          </td>
          </tr>
        </table>
      </div>
      </form>
    `;
  }

  async post(event: Event) {
    event.preventDefault();
    const topicInput = (this.shadowRoot!.getElementById('topic') as HTMLInputElement).value;
    const detailInput = (this.shadowRoot!.getElementById('detail') as HTMLInputElement).value;
    const dateInput = (this.shadowRoot!.getElementById('date') as HTMLInputElement).value;
    const locationInput = (this.shadowRoot!.getElementById('location') as HTMLInputElement).value;
    const subjectInput = (this.shadowRoot!.getElementById('subject') as HTMLInputElement).value;
    const contactInput = (this.shadowRoot!.getElementById('contact') as HTMLInputElement).value;

    try {
      const docRef = await addPost(contactInput, detailInput, subjectInput, dateInput, topicInput, "uID", locationInput);
      console.log("Document ID:", docRef.uID);
      window.location.href = '/home';
      return;

    } catch (error: any) {
      console.error('Post failed:', error.message);
      alert('Post failed. Please try again.');
    }
  }
}
