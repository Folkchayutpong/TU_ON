import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';
// import { getFileDownloadURL, feedDataList } from "../index";

@customElement('my-post')
export class MyPostList extends LitElement {

  @property({ type: String }) nowdate = new Date().toLocaleString('sv-SE', { timeZone: 'Asia/Bangkok',
    day: '2-digit', month: '2-digit', year: 'numeric',
    hour: '2-digit', minute: '2-digit'}).replace(' ', 'T').slice(0, 16);

  static styles = css`
    div {
      width: 328px;
      background-color: white;
      border-radius: 46px;
      margin-bottom: 15px;
    }
    div.flex {
      display: flex;
      flex-direction: row;
      gap: 8px;
      margin: 0;
    }
    span h1,
    span h5,
    span>p,
    .oneline>h5
    {
        margin-left: 30px;
    }
    h1, h5, p {
        margin: 0;
        margin-top: 5px;
    }
    span.content>p {
        margin-left: 0;
    }
    .content {
        flex-direction: column;
        align-self: center;
        width: 120px;
        align-items: flex-start;
    }
    .download {
    align-self: flex-end;
    }

    div.oneline {
        display: flex;
        flex-direction: row;
        gap: 8px;
        margin: 0;
        background-color: #C2E2F500;
    }
    div span {
        margin-left: 15px;
    }

    img {
      border-radius: 40px;
      margin: 6px;
      background-color: orange;
      align-self: center;
    }

    p {
      display: inline-block;
    }

    .content {
      align-self: center;
      width: 120px;
    }

    input[type="submit"] {
      margin: 15px 20px;
      padding: 5px 5px;
      width: 80px;
      height: 40px;
      border-radius: 20px;
      background-color: #C2E2F599;
      border: none;
    }
    span.end {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        margin-top: -50px;
    }

    .end {
        display: flex;
        justify-content: end;
      }
    button {
      width: 100px;
      height: 40px;
      margin: 10px 0;

      border-radius: 20px;
      box-shadow: 0 0 5px 0 #00000040;
      margin: 9px 0;
      padding: 5px 5px;
      border-radius: 20px;
      background-color: #C2E2F599;

      border: none;
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

      .modal {
        position: fixed; /* Stay in place */
        z-index: 1; /* Sit on top */
        padding-top: 100px; /* Location of the box */
        left: 0;
        top: -100px;
        width: 100%; /* Full width */
        height: 100%; /* Full height */
        overflow: auto; /* Enable scroll if needed */
        background-color: rgb(0,0,0); /* Fallback color */
        background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
      }
      .modal-content {
        background-color: #fefefe;
        margin: auto;
        margin-top: 100px;
        padding: 20px;
        border: 1px solid #888;
        border-radius: 40px;
        width: 300px;
        flex-direction: column;
      }
      .ebtn{
        margin: 20px 50px;
        padding: 5px;
        width: 50px;
        height: 30px;
        border-radius: 20px;
        background-color: rgba(194, 226, 245, 0.6);
        border: none;
      }

      h3 {
        margin: 0;
        padding: 0;
        text-align: center;
      }

      table {
        width: 100%;
      }
  `;

  @property({ type: Array }) postList: any[] = [{ id:'12', title: 'Title 1', location: 'Location 1', tag: 'CN101', datetime: '2024-04-26T23:00', description: 'lolem is som', contact: '+66654966' },{ id:'22', title: 'Title 2', location: 'Location 2', tag: 'CN102', datetime: '2024-04-26T23:00', description: 'lolem is som', contact: '+66654966' }];
  // @property({ type: Array }) postList: any[] = [];
  // async getPost(): Promise<any[]> {
  //   try {
  //     const d = await postDataList(true);
  //     return d;
  //   } catch (error) {
  //     console.error("Error fetching user data:", error);
  //     return [];
  //   }
  // }


  // connectedCallback() {
  //   super.connectedCallback();
  //   this.getPost().then(data => {
  //     this.postList = data || [];
  //   });
  // }


  render() {
    return this.mapPostList(this.postList);
  }

  mapPostList(postList: any[]) {
    return postList.map((post, index) => {
      return html`
        <div>
        <div class="flex">
          <img src="/assets/icons/192-192.png" alt="logo" width="100" height="100">
          <span class="content">
            <h2>${post.title}</h2>
            <p>${post.location}</p>
            <p>Tag: #${post.tag}</p>
          </span>
        </div class="content">
          <span>
            <h5>หัวข้อ</h5>
            <h1>${post.title}</h1>
            <h5>รายละเอียด</h5>
            <p>${post.description}</p> <br>
            <div class="oneline">
                <h5>เวลา:</h5>
                <p>${post.datetime}</p> <br>
            </div>
            <div class="oneline">
                <h5>สถานที่:</h5>
                <p>${post.location}</p> <br>
            </div>
            <div class="oneline">
                <h5>วิชา:</h5>
                <p>${post.tag}</p> <br>
            </div>
            <div class="oneline">
                <h5>ติดต่อ:</h5>
                <p>${post.contact}</p> <br>
            </div>
          </span>
          <span class="end">
            <button class="ebtn" @click="${() => this.toggleModal(index)}">EDIT</button>
          </span>
        </div>

        <div id="edit-${index}" class="modal" style="display: none;">
          <div class="modal-content">
            <div style="display: flex; justify-content: space-between; width:290px;">
              <h2 class="mt-0">แก้ไขโพสต์</h2><h2><span class="close" @click="${() => this.closeModal(index)}">&times;</span></h2>
            </div>

            <form @submit=${this.save}>
            <table>
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
              <tr>
              <td class="end">
                <button type="submit">SAVE</button>
              </td>
              </tr>
            </table>
            </form>
          </div>
        </div>
      `;
    });
  }

  toggleModal(index: number) {
    const modal = this.shadowRoot?.getElementById(`edit-${index}`);
    if (modal) {
      modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
    }
  }

  closeModal(index: number) {
    const modal = this.shadowRoot?.getElementById(`edit-${index}`);
    if (modal) {
      modal.style.display = 'none';
    }
  }

  save() {

  }
}