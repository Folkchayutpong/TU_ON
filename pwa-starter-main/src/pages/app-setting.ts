//app-setting.ts
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

// Import components for navigation (if needed)

@customElement('app-setting')
export class AppSetting extends LitElement {
  @property() activeTab: string = 'account'; // Optional for tabbed navigation

  static styles = css`
    /* Styles for the settings page */
    .settings {
      display: flex;
      flex-direction: column;
      gap: 16px;
      padding: 16px;
    }

    .setting-group {
      display: flex;
      flex-direction: column;
      border-bottom: 1px solid var(--sl-color-neutral-200);
      padding-bottom: 16px;
    }

    .setting-group:last-child {
      border-bottom: none;
    }

    .setting-option {
      display: flex;
      align-items: center;
      gap: 8px;
      cursor: pointer;
    }

    .setting-option svg {
      width: 24px;
      height: 24px;
      fill: var(--sl-text-color-primary);
    }
  `;

  render() {
    return html`
      <div class="settings">
        <h2>Settings</h2>

        <div class="setting-group">
          <h3 class="setting-group-title">Account Settings</h3>
          <div class="setting-option" @click="<span class="math-inline">\{this\.updateData\}"\>
<svg viewBox\="0 0 24 24"\>
<path d\="M17 3h\-4v4h4zm\-6 0h\-4v4h4zm\-6 0h\-4v4h4zM11 17h2v\-2h\-2zm0\-4h2v\-2h\-2zM11 7h2v\-2h\-2z" /\>
</svg\>
<span\>Update Data</span\>
</div\>
<div class\="setting\-option" @click\="</span>{this.changePassword}">
            <svg viewBox="0 0 24 24">
              <path d="M18 8h2V5c0-1.1-.9-2-2-2H10a2 2 0 0 0-2 2v3H6c-1.1 0-2 .9-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm4 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
            </svg>
            <span>Change Password</span>
          </div>
        </div>

        <div class="setting-group">
          <h3 class="setting-group-title">General</h3>
          <div class="setting-option">
            <svg viewBox="0 0 24 24">
              </svg>
            <span>Dark Mode</span>
            </div>
        </div>

        <div class="setting-group">
          <h3 class="setting-group-title">Notifications</h3>
          </div>

        <div class="setting-group">
          <h3 class="setting-group-title
  }