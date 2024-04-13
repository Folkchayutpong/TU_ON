// src/components/bottom-navigation.ts

import { LitElement, css, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { resolveRouterPath } from '../router';

import '@shoelace-style/shoelace/dist/components/button/button.js';

@customElement('bottom-navigation')
export class BottomNavigation extends LitElement {
  @property({ type: String }) activeTab: string = 'home';
  static styles = css`
    nav {
      display: flex;
      justify-content: space-around;
      align-items: center;
      background-color: var(--nav-light-color);
      box-shadow: 0px 1px 4px 2px rgb(0 0 0 / 25%);
      border-radius: 20px 20px 0 0;
      color: white;
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 60px;
    }

    nav a {
      text-decoration: none;
      color: white;
      text-align: center;
      font-size: 12px;
      width: 48px;
      height: 48px;
      margin: auto 0;
      cursor: alias;
      opacity: 0.5;
    }

    nav a.active {
        opacity: 1;
    }

    @media(prefers-color-scheme: light) {
      nav {
        color: black;
        background-color: var(--nav-light-color);
      }

    }
  `;

  updated(changedProperties: Map<string, any>) {
    if (changedProperties.has('activeTab')) {
      this.requestUpdate(); // Update the component to re-render when activeTab changes
    }
  }

// <a href="${resolveRouterPath('#/app-home')}">Home</a>
  render() {
    return html`
      <nav>
        <a href="${resolveRouterPath()}" class="${this.activeTab === 'home' ? 'active' : ''}">
            <img src="/assets/fa/Home.svg" alt="Home" id="btn-home">
        </a>
        <a href="#SLIDE" class="${this.activeTab === 'slide' ? 'active' : ''}>
            <img src="/assets/fa/Slide.svg" alt="Slide" id="btn-slide">
        </a>
        <a href="#TUTOR" class="${this.activeTab === 'tutor' ? 'active' : ''}>
            <img src="/assets/fa/Tutor.svg" alt="Tutor" id="btn-tutor">
        </a>
        <a href="${resolveRouterPath('about')}" class="${this.activeTab === 'profile' ? 'active' : ''}">
            <img src="/assets/fa/User.svg" alt="Profile" id="btn-profile">
        </a>
      </nav>
    `;
  }
}
