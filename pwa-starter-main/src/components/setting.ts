// setting.ts
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('setting')
export class Setting extends LitElement {
  static styles = css`
    svg {
      width: 24px;
      height: 24px;
      fill: var(--sl-text-color-primary);
      cursor: pointer;
    }
  `;

  render() {
    return html`
      <svg viewBox="0 0 24 24" @click="${this.navigateToSettings}">
        <path d="M12 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 13a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9zm7-6a1 1 0 0 0-1-1v-4h-4a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v4h-4a1 1 0 0 0-1 1h4v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4h4a1 1 0 0 0-1-1z"></path>
      </svg>
    `;
  }

  navigateToSettings() {
    // Handle navigation to the settings page
    window.location.href = "setting.html";
  }
}