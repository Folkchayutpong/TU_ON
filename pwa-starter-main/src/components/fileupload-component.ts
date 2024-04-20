import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';

@customElement('file-component')
export class fileComponent extends LitElement {

  static styles = css`
    /* Add your styles here */
    .card {
      margin: 20px 10px;
      padding: 20px;
      background-color: white;
      border-radius: 40px;
      box-shadow: 0 0 10px 0 #00000040;
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

    input[type="file"] {
      width: 80%;
      height: 30px;
      padding: 10px 0 10px 10px;
      border-radius: 20px;
      background-color: #C2E2F5;
      border: none;
      box-shadow: 0 0 5px 0 #00000040 inset;
      align-content: center;
      box-shadow: none;
      margin: 10px 0;
    }
    input[type="file"]::-webkit-file-upload-button {
      background-color: white;
      border: none;
      border-radius: 20px;
      padding: 6px 20px;
    }
    input[type="radio"] {
      box-shadow: none;
    }
    .line {
      display: flex;
      justify-content: flex-start;
    }

    span {
      display: flex;
      align-items: center;
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
    return html`
      <form @submit=${this.post}>
      <div class="card">
        <table>
          <tr>
            <td><h3>อัปโหลดไฟล์</h3></td>
          </tr>
          <tr>
          <td>
            <label for="topic">หัวข้อ</label>
            <input type="text" placeholder="เขียนอะไรสักอย่าง" id="topic" name="topic" required>
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
            <input type="file" id="file" required>
          </td>
          </tr>
          <tr>
          <td class="line">
            <label for="type">ประเภท:  </label>
            <span>
              <input type="radio" id="mid" name="type" value="Midterm" checked>
              <label for="mid">Midterm</label>
            </span>
            <span>
              <input type="radio" id="fin" name="type" value="Final" >
              <label for="fin">Final</label>
            </span>
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

  post(event: Event) {
    // Add your code here
  }
}
