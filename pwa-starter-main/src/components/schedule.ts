import { LitElement, css, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';

import '@shoelace-style/shoelace/dist/components/button/button.js';

@customElement('my-schedule')
export class Schedule extends LitElement {
    @property({ type: String }) username = 'demo';
    @property({ type: Number }) numDay = 0;

    static styles = css`
    h2 {
        text-align: flex-start;
        width: 100%;
    }
    h3 {
        margin: 0;
        padding: 0;
        text-align: center;
    }
    div {
        display: flex;
        flex-direction: row;
        gap: 8px;
        width: 328px;
        align-items: center;
        background-color: white;
        border-radius: 46px;
        margin-bottom: 15px;
        justify-content: space-between;
        padding: 2px;
    }
    span {
        height: 50px;
    }

    img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
    .bold {
        font-weight: bold;
        margin-right: 10px;
    }

    .numjoin {
        width: 50px;
        height: 50px;
        margin-top: -54px;
        margin-left: 20px;
        padding: 0;
        background-color: #C2E2F5;
        position: relative;
        justify-content: center;
    }

  `;

    render() {
        return html`
            <h2>${this.username}'s Schedule</h2>
            ${this.renderSchedule()}
        `;
    }
    renderSchedule() {
        return html`
        <div>
        <span>
            <img src="/assets/icons/192-192.png" alt="profile">
            <div class="numjoin">
                <h3>${this.numDay}</h3>
            </div>
        </span>
        <span><p>Start in ${this.numDay} Day...</p></span>
        <span><p class="bold">Joined</p></span>
        </div>
    `;
    }
}
