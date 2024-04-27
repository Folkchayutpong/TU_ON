import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { getFileDownloadURL, feedDataList } from "../index";
import { MidFin } from './mid-fin';

const midFin = new MidFin();
async function getMidFin() {
  var aState = midFin.activeTab
  if (aState == 'mid') {
    return true;
  }
  else {
    return false;
  }
}

@customElement('feed-list')
export class FeedList extends LitElement {

  static styles = css`
    div {
      display: flex;
      flex-direction: row;
      gap: 8px;
      width: 328px;
      background-color: white;
      border-radius: 46px;
      margin-bottom: 15px;
    }

    img {
      border-radius: 40px;
      margin: 6px;
      background-color: orange;
      align-self: center;
    }

    h2, p {
      margin: 0;
    }

    p {
      display: inline-block;
    }

    .content {
      align-self: center;
      width: 120px;
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
  `;

  @property({ type: Array }) feedList: any[] = [];
  @property({ type: String }) tag: string = "";

  async getFeed(): Promise<any[]> {
    try {
      const d = await feedDataList(await getMidFin(), this.tag);
      return d;
    } catch (error) {
      console.error("Error fetching user data:", error);
      return [];
    }
  }

  connectedCallback() {
    super.connectedCallback();
    this.getFeed().then(data => {
      this.feedList = data || [];
    });
  }

  render() {
    return this.mapFeedList(this.feedList);
  }
  mapFeedList(feedList: any[]) {
    return feedList.map((feed) => {
      return html`
          <div>
            <img src="/assets/icons/192-192.png" alt="logo" width="100" height="100">
            <search-bar @search=${this.handleSearch} value=></search-bar>
            <span class="content">
              <h2>${feed.title}</h2>
              <p>Tag: #${feed.tag}</p>
            </span>
            <span class="download">
              <form @submit=${this.download}>
                <input type="hidden" name="content" value="${feed.content}">
                <button type="submit" value="1"><img src="/assets/fa/Download.svg"></button>
              </form>
            </span>
          </div>
        `;
    });
  }

  async download(event: Event) {
    event.preventDefault(); // ป้องกันการส่งค่าโดยไม่ได้รับอนุญาต
    const feedContent = (event.target as HTMLFormElement).content.value;
    const url = await getFileDownloadURL(feedContent);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
  }

  handleSearch(event: CustomEvent) {
    try {
      const searchInput = (event.target as HTMLInputElement).value;
      this.tag = String(searchInput);
      console.log("tag: " + this.tag)
      console.log("isMid: ", getMidFin())

    } catch (error) {
      return (error)
    }

  }

}


