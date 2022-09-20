const icon_list = {
    close: `
        <svg width="9px" height="9px" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
            <path style="fill: none; stroke: rgb(230, 230, 230); stroke-linecap: round; stroke-width: 2px;" d="M 1.5 7.5 L 7.5 1.5"/>
            <path style="fill: none; stroke: rgb(230, 230, 230); stroke-linecap: round; stroke-width: 2px;" d="M 1.5 1.5 L 7.5 7.5"/>
        </svg>`,
    maximise: `
        <svg width="9px" height="9px" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
            <rect x="1.5" y="1.5" width="6" height="6" style="fill: none; stroke: rgb(230, 230, 230); stroke-linejoin: round; stroke-width: 2px;"/>
        </svg>`,
    minimise: `
        <svg width="9px" height="9px" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
            <path style="fill: none; stroke: rgb(230, 230, 230); stroke-linecap: round; stroke-width: 2px;" d="M 1.5 7.5 L 7.5 7.5"/>
        </svg>`
}

class RoundButton extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({mode: 'open'});

        const linkElem = document.createElement('link');
        linkElem.setAttribute('rel', 'stylesheet');
        linkElem.setAttribute('href', './style.css');
        shadow.appendChild(linkElem);

        const icon_type = this.getAttribute('icon');
        switch (icon_type) {
            case 'close':
                this.shadowRoot.innerHTML += icon_list.close;
                break;
            case 'maximise':
                this.shadowRoot.innerHTML += icon_list.maximise;
                break;
            case 'minimise':
                this.shadowRoot.innerHTML += icon_list.minimise;
                break;
            default:
                this.shadowRoot.innerHTML += '';
                break;
        }
    }
}

window.customElements.define('round-button', RoundButton);