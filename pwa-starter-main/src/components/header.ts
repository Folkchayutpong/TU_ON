import { LitElement, css, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { resolveRouterPath } from '../router';

import '@shoelace-style/shoelace/dist/components/button/button.js';
@customElement('app-header')
export class AppHeader extends LitElement {
  @property({ type: String }) title = 'PWA Starter';

  @property({ type: Boolean}) enableBack: boolean = false;

  static styles = css`
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: var(--app-color-primary);
      color: white;
      padding: 12px;
      padding-top: 4px;

      position: fixed;
      left: env(titlebar-area-x, 0);
      top: env(titlebar-area-y, 0);
      height: env(titlebar-area-height, 30px);
      width: env(titlebar-area-width, 100%);
      -webkit-app-region: drag;
    }

    header h1 {
      margin-top: 0;
      margin-bottom: 0;
      font-size: 12px;
      font-weight: bold;
    }

    nav a {
      margin-left: 10px;
    }

    #back-button-block {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 8px;
    }

    .bgOval {
      position: relative;
      background: var(--header-light-bg-color);
      box-shadow: 0px 0px 4px 2px rgb(0 0 0 / 25%);
      border-radius: 50%;
      width: 540px;
      height: 209px;
      left: -50%;
      z-index: -1;
    }

    .bgOval-50 { position: absolute; left: 50%; top: -72px; }

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
        <!-- example code -->
        <!--
        <div id="back-button-block">
          ${this.enableBack ? html`<sl-button size="small" href="${resolveRouterPath()}">
            Back
          </sl-button>` : null}

          <h1>${this.title}</h1>
        </div>
        -->
      </header>
    `;
  }
}
