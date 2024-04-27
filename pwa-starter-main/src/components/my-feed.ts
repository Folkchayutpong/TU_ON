import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';

@customElement('my-feed')
export class MyFeedList extends LitElement {

  static styles = css`
    /* Add your styles here */
    div {
      display: flex;
      flex-direction: row;
      gap: 8px;
      width: 328px;
      // align-items: center;
      background-color: white;
      border-radius: 46px;
      margin-bottom: 15px;
    }

    img {
      border-radius: 40px;
      margin: 6px;
    }

    h2, p {
      margin: 0;
    }
    p {
      display: inline-block;
    }
    .ebtn{
      margin: 9px 0px;
      padding: 5px;
      width: 50px;
      height: 30px;
      border-radius: 20px;
      background-color: rgba(194, 226, 245, 0.6);
      border: none;
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

    button {
      margin: 9px 0;
      padding: 5px 5px;
      width: 50px;
      height: 30px;
      border-radius: 20px;
      background-color: #C2E2F599;
      border: none;
    }
    button img {
      margin: 0;
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
      align-content: center;
    }
    .modal-content {
      background-color: #fefefe;
      margin: auto;
      margin-top: 200px;
      padding: 20px;
      border: 1px solid #888;
      border-radius: 40px;
      width: 300px;
      flex-direction: column;
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

  //   example feedList data
  @property({ type: Array }) feedList: any[] = [{ title: 'Title 1', content: 'Content1.pdf', tag: 'CN101' }, { title: 'Title 2', content: 'Content2.pdf', tag: 'CN102' }];

  render() {
    return this.mapFeedList(this.feedList);
  }

  mapFeedList(feedList: any[]) {
    return feedList.map((feed, index) => {
      return html`
        <div>
          <img src="/assets/icons/192-192.png" alt="logo" width="100" height="100">
          <span class="content">
            <h2>${feed.title}</h2>
            <p>${feed.content}</p>
            <p>Tag: #${feed.tag}</p>
          </span>
          <span class="download">
            <button class="ebtn" @click="${() => this.toggleModal(index)}">EDIT</button>
          </span>
        </div>

        <div id="edit-${index}" class="modal" style="display: none;">
          <div class="modal-content">
            <div style="display: flex; justify-content: space-between; width:290px;">
              <h2 class="mt-0">แก้ไขไฟล์</h2><h2><span class="close" @click="${() => this.closeModal(index)}">&times;</span></h2>
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
                <input type="hidden" name="id" value="${feed.id}">
                <button type="submit" name="action" value="save">SAVE</button>
                <button type="submit" name="action" value="delete">DELETE</button>
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

  // connectedCallback() {
  //   super.connectedCallback();
  //   window.addEventListener('click', (event) => {
  //     if (!(event.target as HTMLElement).closest('.modal-content')) {
  //       this.closeAllModals();
  //     }
  //   });
  // }

  // closeAllModals() {
  //   const modals = this.shadowRoot?.querySelectorAll('.modal');
  //   if (modals) {
  //     modals.forEach((modal) => {
  //       (modal as HTMLElement).style.display = 'none';
  //     });
  //   }
  // }
}
