import { LitElement, html } from 'lit';
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
    sharedStyles
  ]

  async firstUpdated() {
    // this method is a lifecycle even in lit
    // for more info check out the lit docs https://lit.dev/docs/components/lifecycle/
  }

  render() {
    return html`
      <main>
        <h1>Sign</h1>
        <sl-card>
          <signup-component></signup-component>
        </sl-card>
      </main>
    `;
  }
}
