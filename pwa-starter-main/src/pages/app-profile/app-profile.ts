//app-profile.ts
import { LitElement, css, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { resolveRouterPath } from '../../router';
// import { getCookie, deleteCookie, url } from '../../utils/cookie-utils';

// You can also import styles from another file
// if you prefer to keep your CSS seperate from your component
// import { styles } from './profile-styles';

import { styles as sharedStyles } from '../../styles/shared-styles'

import '@shoelace-style/shoelace/dist/components/card/card.js';

@customElement('app-profile')
export class AppProfile extends LitElement {
  @property() activeTab: string = 'profile';

  static styles = [
    sharedStyles,
    css`
      /* Add your styles here */
      main {
        display: flex;
        flex-direction: column;
        gap: 16px;
        padding: 16px;
        margin-top: 150px;
        align-items: center;
        padding-bottom: 80px;
      }

      .settings-icon {
          position: absolute;
          top: 16px;
          right: 16px;
        }

      my-schedule {
        width: 328px;
      }
      app-header {
        z-index: 1;
        position: relative;
      }
      .settings {
        position: fixed;
        right: 0;
        top: 0;
        padding: 16px;
        z-index: 2;
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
      <app-header></app-header>
      <div class="settings">
        <a href="${resolveRouterPath('settings')}">
          <img src="/assets/fa/Set.svg" alt="settings" width="24" height="24">
        </a>
      </div>

      <main>

        <my-schedule></my-schedule>

        <div>
          <h2 style="border-bottom: 2px solid var(--sl-color-neutral-1000);">My Post</h2>
          <my-feed></my-feed>
          <my-post></my-post>
          <setting></setting>
        </div>
      </main>

      <bottom-navigation activeTab="${this.activeTab}"></bottom-navigation>
    `;
  }
}
