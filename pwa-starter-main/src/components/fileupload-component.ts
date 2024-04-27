import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { addFile} from "../index";
import { getData } from './header';

@customElement('file-component')
export class FileComponent extends LitElement {

  @property({ type: String }) uID: string = '';
  @property({ type: String }) afileID: string = '';

  async connectedCallback() {
    super.connectedCallback();
    try {
      const data = await getData();
      this.uID = data.id || "undefined";
    } catch (error) {
      console.error('Error:', error);
    }
  }


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
              <input type="radio" id="ismid" name="type" value="MID" checked>
              <label for="mid">Midterm</label>
            </span>
            <span>
              <input type="radio" id="isfin" name="type" value="Final" >
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
  async post(event: Event) {
    event.preventDefault();
    const topicInput = this.shadowRoot!.getElementById('topic') as HTMLInputElement;
    const subjectInput = this.shadowRoot!.getElementById('subject') as HTMLInputElement;
    const fileInput = this.shadowRoot!.getElementById('file') as HTMLInputElement;
    const ismid = this.shadowRoot!.getElementById('ismid') as HTMLInputElement;
    const isfin = this.shadowRoot!.getElementById('isfin') as HTMLInputElement;

    const topic = topicInput.value;
    const subject = subjectInput.value;
    const file = fileInput.files;
    let type = '';

    if (ismid.checked) {
      type = ismid.value;
    } else {
      type = isfin.value;
    }

    try {
      if (file) {
        const docRef = await addFile(file, type, subject, topic, this.uID);
        console.log("isMid: ", type)
        console.log("uID: ", this.uID);
        console.log("fileID: ", this.afileID);
        //await updateFileID(this.uID, this.afileID);
        window.location.href = '/home';
        return;
      } else {
        throw new Error('Please select a file.');
      }
    } catch (error: any) {
      console.error('Post failed:', error.message);
      alert('Post failed. Please try again.');
    }
  }

}