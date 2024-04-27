import { LitElement, css, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { getCollUser, JoinedProfilefeedPostList, timeLeft } from '../index';

import '@shoelace-style/shoelace/dist/components/button/button.js';

export async function getUser(): Promise<any> {
    try {
        let d = getCollUser(String(document.cookie));
        return await d;
    } catch (error) {
        console.error("Error fetching user data:", error);
        return {};
    }
}

export async function getData(uID: string): Promise<any> {
    try {
        let d = await JoinedProfilefeedPostList(uID);
        return d;
    } catch (error) {
        console.error("Error fetching user data:", error);
        return {};
    }
}



@customElement('my-schedule')
export class Schedule extends LitElement {
    @property({ type: String }) name = 'demo';
    @property({ type: Number }) numDay = 3;
    @property({ type: String }) uID = 'demo';
    @property({ type: Array }) joinedList: any[] = [];

    async connectedCallback() {
        super.connectedCallback();
        await getUser().then(data => {
            this.name = data["name"] || "undefined";
            this.uID = data["id"] || "undefined";
        });
        this.joinedList = await getData(this.uID);
    }

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
        font-weight: bold;
        padding: 0;
        background-color: #C2E2F5;
        position: relative;
        justify-content: center;

    }

  `;

    render() {
        let d = this.joinedList;
        return this.joinedFeedList(d);
    }

    joinedFeedList(list: any[]) {
        return html`
        <h2>${this.name}'s Schedule</h2>
        ${(list.map((alist) => html`
            <div>
                <span>
                <img src="/assets/icons/192-192.png" alt="profile">
                    <div class="numjoin">
                        <h5>${alist.tag}</h5>
                    </div>
                </span>
                <span><p>Start in ${alist.time}</p></span>
                <span><p class="bold">Joined</p></span>
            </div>
        `))
            }
    `;
    }

}
