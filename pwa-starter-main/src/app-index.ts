import { LitElement, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import './pages/app-home';
import './styles/global.css';
import { router } from './router';

// components
import './components/header';
import './components/bottom-navigation';
import './components/login-component';
import './components/signup-component';
import './components/logout-component';
import './components/post-component';
import './components/fileupload-component';
import './components/feed-list';
import './components/search-bar';
import './components/mid-fin';
import './components/post-list';

@customElement('app-index')
export class AppIndex extends LitElement {
  static styles = css`
    main {
      padding-left: 16px;
      padding-right: 16px;
      padding-bottom: 16px;
    }
  `;

  firstUpdated() {
    router.addEventListener('route-changed', () => {
      if ("startViewTransition" in document) {
        (document as any).startViewTransition(() => this.requestUpdate());
      }
      else {
        this.requestUpdate();
      }
    });
  }

  render() {
    // router config can be round in src/router.ts
    return router.render();
  }
}
