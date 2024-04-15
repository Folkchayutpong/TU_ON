import { LitElement, css, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { getCookie } from '../../utils/cookie-utils';
import { resolveRouterPath } from '../../router';

// You can also import styles from another file
// if you prefer to keep your CSS seperate from your component
// import { styles } from './profile-styles';

import { styles as sharedStyles } from '../../styles/shared-styles'

import '@shoelace-style/shoelace/dist/components/card/card.js';

@customElement('app-login')
export class AppLogin extends LitElement {
  @property() activeTab: string = 'profile';

  static styles = [
    sharedStyles,
    css`
      sl-card {
        justify-content: center;
        align-items: center;
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding: 16px;
      }
    `
  ]

  async firstUpdated() {
    // this method is a lifecycle even in lit
    // for more info check out the lit docs https://lit.dev/docs/components/lifecycle/

    // Check if user exists in cookie
    const userCookie = getCookie('user');
    if (userCookie) {
      window.location.href = '/home';
      }
    }

  render() {
    return html`
      <main>
        <h1>Login</h1>
        <sl-card>
          <login-component></login-component>
        </sl-card>
        <br>
        <sl-card>
            <a href="${resolveRouterPath('signup')}">Sign Up</a>
        </sl-card>
      </main>
    `;
  }
}
