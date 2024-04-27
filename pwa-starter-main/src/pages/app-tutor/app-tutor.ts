import { LitElement, css, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';
// import { getCookie, deleteCookie, url } from '../../utils/cookie-utils';

// You can also import styles from another file
// if you prefer to keep your CSS seperate from your component


import { styles as sharedStyles } from '../../styles/shared-styles'

import '@shoelace-style/shoelace/dist/components/card/card.js';

@customElement('app-tutor')
export class AppTutor extends LitElement {
  @property() activeTab: string = 'tutor';

  static styles = [
    sharedStyles,
    css`
      post-list {
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

  }

  render() {
    return html`
      <search-bar></search-bar>

      <main>
        <post-list></post-list>
      </main>

      <bottom-navigation activeTab="${this.activeTab}"></bottom-navigation>
    `;
  }
}