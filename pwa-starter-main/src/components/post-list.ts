import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';
// import { getFileDownloadURL, feedDataList } from "../index";

@customElement('post-list')
export class PostList extends LitElement {

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
    form.end {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        margin-top: -50px;
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
    return postList.map((post) => {
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
            <form class="end" @submit=${this.join}>
                <input type="hidden" name="post" value="${post.id}">
                <input type="submit" value="Join">
            </form>
          </span>
        </div>
      `;
    });
  }

  join(e: any) {
  }
}