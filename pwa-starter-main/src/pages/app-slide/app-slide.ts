import { LitElement, css, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';
// import { getCookie, deleteCookie, url } from '../../utils/cookie-utils';

// You can also import styles from another file
// if you prefer to keep your CSS seperate from your component


import { styles as sharedStyles } from '../../styles/shared-styles'

import '@shoelace-style/shoelace/dist/components/card/card.js';

@customElement('app-slide')
export class AppSlide extends LitElement {
  @property() activeTab: string = 'slide';

  static styles = [
    sharedStyles,
    css`
      feed-list {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      main {
        margin-top: 80px;
        padding-bottom: 80px;
      }
    `
  ]

  async firstUpdated() {
    // this method is a lifecycle even in lit
    // for more info check out the lit docs https://lit.dev/docs/components/lifecycle/
    // const userCookie = getCookie('user');
    // if (userCookie) {
    //   // Edit the URL to match your API endpoint
    //   fetch(`${url}/users?id=${JSON.parse(userCookie).id}`)
    //   .then(response => response.json())
    //   .then(data => {
    //     if (data.length > 0) {
    //       this.activeTab = 'profile';
    //     } else {
    //       deleteCookie('user');
    //       window.location.href = '/';
    //     }
    //   });
    // } else {
    //   window.location.href = '/';
    // }
  }

  render() {
    return html`
      <search-bar></search-bar>

      <main>
        <mid-fin></mid-fin>
        <feed-list></feed-list>
      </main>

      <bottom-navigation activeTab="${this.activeTab}"></bottom-navigation>
    `;
  }
}
