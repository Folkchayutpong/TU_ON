import { LitElement, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';
//import { getCookie, deleteCookie, url } from '../../utils/cookie-utils';

// You can also import styles from another file
// if you prefer to keep your CSS seperate from your component
import { styles } from './profile-styles';

import { styles as sharedStyles } from '../../styles/shared-styles'

import '@shoelace-style/shoelace/dist/components/card/card.js';

@customElement('app-profile')
export class AppProfile extends LitElement {
  @property() activeTab: string = 'profile';

  static styles = [
    sharedStyles,
    styles
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
      <app-header ?enableBack="${true}"></app-header>

      <main>
        <h2>About Page</h2>

        <sl-card>
          <h2>Did you know?</h2>

          <p>PWAs have access to many useful APIs in modern browsers! These
            APIs have enabled many new types of apps that can be built as PWAs, such as advanced graphics editing apps, games,
            apps that use machine learning and more!
          </p>

          <p>Check out <a
              href="https://docs.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/handle-files">these
              docs</a> to learn more about the advanced features that you can use in your PWA</p>
        </sl-card>
      </main>

      <logout-component></logout-component>

      <bottom-navigation activeTab="${this.activeTab}"></bottom-navigation>
    `;
  }
}
