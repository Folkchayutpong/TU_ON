import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { resolveRouterPath } from '../../router';
// import { getCookie, deleteCookie, url } from '../../utils/cookie-utils';

// You can also import styles from another file
// if you prefer to keep your CSS seperate from your component
// import { styles } from './profile-styles';

import { styles as sharedStyles } from '../../styles/shared-styles'

import '@shoelace-style/shoelace/dist/components/card/card.js';

@customElement('app-setting')
export class AppSetting extends LitElement {

  static styles = [
    sharedStyles,
    css`
      /* Add your styles here */
      div.account,
      div.general,
      div.other {
        background-color: white;
        border-radius: 46px;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 16px;
        width: 300px;
      }
      div.account,
      div.general {
        padding-bottom: 46px;
        margin-bottom: 16px;
      }

      div.back {
        position: fixed;
        top: 16px;
        left: 16px;
        z-index: 2;
      }

      h1 {
        margin: 5px 20px;
        padding-top: 50px;
      }
      h2 {
        text-align: center;
        padding: 16px;
        margin-bottom: 0;
      }

      button {
        background-color: white;
        border: none;
        margin: 0 15px;
        width: 100%;
        padding: 0;
        cursor: pointer;
      }
      img {
        position: relative;
      }

      logout-component {
        justify-content: center;
      }

      main {
        width: 328px;
        height: 100%;
        padding: 0;
        margin: 0 auto;
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

    <div class="back">
        <a href="${resolveRouterPath('profile')}">
        <img src="/assets/fa/Back.svg" alt="settings" width="32" height="32">
        </a>
    </div>

    <main>
    <h1>Settings</h1>
        <div class="account">
            <h2>Account Settings</h2>
            <button>
                <img src="/assets/btn/set_func-6.svg" alt="Update Data" />
            </button>
            <button>
                <img src="/assets/btn/set_func-5.svg" alt="Change Password" />
            </button>
        </div>
        <div class="general">
            <h2>General</h2>
            <button>
                <img src="/assets/btn/set_func-4.svg" alt="Notification" />
            </button>
        </div>
        <div class="other">
            <h2>Other</h2>
            <button>
                <img src="/assets/btn/set_func-1.svg" alt="About" />
            </button>
            <button>
                <img src="/assets/btn/set_func-2.svg" alt="Rate Us" />
            </button>
            <button>
                <img src="/assets/btn/set_func-3.svg" alt="FQA" />
            </button>
            <logout-component></logout-component>
        </div>
    </main>

    `;
  }
}
