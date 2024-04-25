import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';

@customElement('feed-list')
export class FeedList extends LitElement {

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

    input[type="submit"] {
      margin: 9px 0;
      padding: 5px 5px;
      width: 50px;
      height: 30px;
      border-radius: 20px;
      background-color: #C2E2F599;
      border: none;
  `;

//   example feedList data
  @property({ type: Array }) feedList: any[] = [{ title: 'Title 1', content: 'Content1.pdf', tag: 'CN101' }, { title: 'Title 2', content: 'Content2.pdf', tag: 'CN102'}];

  render() {
    return this.mapFeedList(this.feedList);
  }

  mapFeedList(feedList: any[]) {
    return feedList.map((feed) => {
      return html`
        <div>
          <img src="/assets/icons/192-192.png" alt="logo" width="100" height="100">
          <span class="content">
            <h2>${feed.title}</h2>
            <p>${feed.content}</p>
            <p>Tag: #${feed.tag}</p>
          </span>
          <span class="download">
          <form @submit=${this.download}>
            <input type="hidden" name="content" value="${feed.content}">
            <input type="submit" value="1">
          </form>
          </span>
        </div>
      `;
    });
  }

  download() {

  }
}
