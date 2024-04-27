import { LitElement, css, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';

// You can also import styles from another file
// if you prefer to keep your CSS seperate from your component
// import { styles } from './profile-styles';

import { styles as sharedStyles } from '../../styles/shared-styles'

import '@shoelace-style/shoelace/dist/components/card/card.js';

@customElement('app-signup')
export class AppSignup extends LitElement {
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
  signup-component {
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
  }

  render() {
    return html`
    <main>
    <h1>Sign Up</h1>
      <signup-component></signup-component>
    </main>
    `;
  }
}
