import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { feedPostList, joinPost, } from '../index'
import { getData } from './header';


@customElement('post-list')
export class PostList extends LitElement {
  @property({ type: String }) uID: string = '';

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
    h2 {
      height: 1.75rem;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis
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

  @property({ type: Array }) postList: any[] = [];
  @property({ type: String }) tag: string = "";

  search(event: CustomEvent) {
    try {
      const searchValue = event.detail;
      this.tag = searchValue;
      console.log("from search: ", this.tag)
      this.getFeed();
    } catch (error) {
      console.log(error)
    }
  };

  async getFeed(): Promise<any[]> {
    try {
      const d = await feedPostList(this.tag);
      this.postList = d.filter(feed => feed.tag.toLowerCase().includes(this.tag.toLowerCase()));
      return this.postList;
    } catch (error) {
      console.error("Error fetching user data:", error);
      return [];
    }
  }

  async connectedCallback() {
    super.connectedCallback();
    try {
      this.getFeed().then(data => {
        this.postList = data || [];
      });
      const data = await getData();
      this.uID = data.id || "undefined";
    } catch (error) {
      console.error('Error:', error);
    }
  }

  render() {
    return html`
    <search-bar @search=${this.search}></search-bar>
    ${this.mapPostList(this.postList)}`;
  }

  mapPostList(postList: any[]) {
    // if (this.postList.length == 0) {
    //   return html`
    //       <div>
    //         <search-bar @search=${this.search}></search-bar>
    //       </div>
    //     `;
    // };
    return postList.map((post) => {
      const img = ["Boar", "Cactus", "Pig"];
      const random = Math.floor(Math.random() * img.length);

      return html`
        <div>
        <div class="flex">
          <img src="/assets/icons/${img[random]}.svg" alt="logo" width="100" height="100">
          <!-- <search-bar @search=${this.search}></search-bar> -->
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
            <form class="end" @submit=${(e: Event) => this.join(e, post)}>
                <input type="hidden" name="post" value="${post.id}">
                <input type="submit" value=${post.joined ? 'Joined' : 'Join'}>
            </form>
          </span>
        </div>
      `;
    });
  }


  join(e: Event, post: any) {
    e.preventDefault();
    const postID = (e.target as HTMLFormElement).post.value;
    joinPost(this.uID, postID);
    post.joined = true;
    this.requestUpdate();
  }
}