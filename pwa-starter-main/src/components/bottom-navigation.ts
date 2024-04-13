// src/components/bottom-navigation.ts

import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { resolveRouterPath } from '../router';

import '@shoelace-style/shoelace/dist/components/button/button.js';

@customElement('bottom-navigation')
export class BottomNavigation extends LitElement {
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
      text-align: center;
      font-size: 12px;
      color: white;
      width: 48px;
      height: 48px;
      margin: auto 0;
    }

    @media(prefers-color-scheme: light) {
      nav {
        color: black;
        background-color: var(--nav-light-color);
      }

      nav a {
        color: initial;
      }
    }
  `;

// <a href="${resolveRouterPath('#/app-home')}">Home</a>
  render() {
    return html`
      <nav>
        <a href="#HOME">
            <img src="/assets/fa/Home.svg" alt="Home">
        </a>
        <a href="#SLIDE">
            <img src="/assets/fa/Slide.svg" alt="Slide">
        </a>
        <a href="#TUTOR">
            <img src="/assets/fa/Tutor.svg" alt="Tutor">
        </a>
        <a href="#PROFILE">
            <img src="/assets/fa/User.svg" alt="Profile">
        </a>
      </nav>
    `;
  }
}
