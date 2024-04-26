import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { downLoad } from "../index"
import { getDownloadURL } from 'firebase/storage';

@customElement('post-list')
export class PostList extends LitElement {

    static styles = css`
    `;

}