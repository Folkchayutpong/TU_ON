import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
// import { getCookie} from '../utils/cookie-utils';
// import { resolveRouterPath } from '../router';

import { styles } from '../styles/shared-styles';

@customElement('app-load')
export class AppLoad extends LitElement {

  // For more information on using properties and state in lit
  // check out this link https://lit.dev/docs/components/properties/

  static styles = [
    styles,
    css`
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }
    `
  ];

    async firstUpdated() {

        await this.sleep(300);

        // const session = getCookie('user');
        // if (session) {
        //     window.location.href = '/home';
        // } else {
        //     window.location.href = '/login';
        // }
        window.location.href = '/home';

    }

    sleep(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }

    render() {
        return html`
        <div>
            <img src="/assets/icons/loading.png" alt="loading" />
        </div>
        `;
    }
}