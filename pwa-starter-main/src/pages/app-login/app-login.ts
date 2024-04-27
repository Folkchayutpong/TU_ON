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
    main {
        display: flex;
        flex-direction: column;
        gap: 16px;
        padding: 16px;
        margin-top: 150px;
        align-items: center;
        padding-bottom: 80px;
      }
    login-component {
        justify-content: center;
        align-items: center;
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding: 16px;
      }
    h1 {
        text-align: center;
      }
    `
  ]

  async firstUpdated() {
    // this method is a lifecycle even in lit
    // for more info check out the lit docs https://lit.dev/docs/components/lifecycle/

    // Check if user exists in cookie
    // const userCookie = getCookie('user');
    // if (userCookie) {
    //   window.location.href = '/home';
    //   }
    }

  render() {
    return html`
      <main>
        <h1>Login</h1>
          <login-component></login-component>
          <p>Don't have an account yet? <a href="${resolveRouterPath('signup')}">Sign Up</a></p>
      </main>
    `;
  }
}
