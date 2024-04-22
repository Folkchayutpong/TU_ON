import { LitElement, css, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';
// import { resolveRouterPath } from '../router';

import '@shoelace-style/shoelace/dist/components/button/button.js';

@customElement('app-header')
export class AppHeader extends LitElement {
  @property({ type: String }) username = 'demo username';
  @property({ type: String }) faculty = 'demo faculty';

  @property({ type: Boolean }) enableBack: boolean = false;

  static styles = css`
    header {
      color: black;

      position: fixed;
      left: env(titlebar-area-x, 0);
      top: env(titlebar-area-y, 0);
      width: env(titlebar-area-width, 100%);
      -webkit-app-region: drag;
    }

    nav a {
      margin-left: 10px;
    }

    .bgOval {
      position: relative;
      background: var(--header-light-bg-color);
      box-shadow: 0px 0px 4px 2px rgb(0 0 0 / 25%);
      border-radius: 50%;
      width: 150vw;
      height: 25vh;
      left: -50%;
      z-index: -1;
    }

    .bgOval-50 { position: absolute; left: 50%; top: -8vh; }

    .data {
      display: flex;
      gap: 10px;
      position: fixed;
      margin: 20px 32px;
    }

    div.data h1 {
      font-size: 24px;
      margin: 0;
    }
    div.data h2 {
      font-size: 16px;
      font-weight: 400;
      margin: 0;
    }

    div.data img {
      border: 3px solid white;
      border-radius: 40px;
    }
    div.data div {
      position: relative;
      top: 20px;
    }

    @media(orientation: landscape) {
      .bgOval {
        display: none;
      }

    @media(prefers-color-scheme: light) {
      header {
        color: black;
      }

      nav a {
        color: initial;
      }
    }
  `;

  render() {
    return html`
      <header>
        <div class="bgOval-50">
          <div class="bgOval"></div>
        </div>

        <div class="data">
          <img src="/assets/icons/192-192.png" width="125" height="125">
          <div>
            <h1>${this.username}</h1>
            <h2>${this.faculty}</h2>
          </div>
        </div>
      </header>
    `;
  }
}
