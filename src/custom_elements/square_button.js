const icon = `
    <svg width="15px" height="15px" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
        <path style="fill: rgb(216, 216, 216); stroke: rgb(230, 230, 230); stroke-width: 2px; stroke-linecap: round;" d="M 1.5 1.5 L 13.5 1.5"/>
        <path style="fill: rgb(216, 216, 216); stroke: rgb(230, 230, 230); stroke-width: 2px; stroke-linecap: round;" d="M 1.5 7.5 L 13.5 7.5"/>
        <path style="fill: rgb(216, 216, 216); stroke: rgb(230, 230, 230); stroke-width: 2px; stroke-linecap: round;" d="M 1.5 13.5 L 13.5 13.5"/>
    </svg>
`

const style =  `@import url('./style.css')`

class SquareButton extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({mode: 'open'});

        const styleSheet = document.createElement('style');
        styleSheet.innerHTML = style;
        shadow.appendChild(styleSheet);

        this.shadowRoot.innerHTML += icon;
    }
}

window.customElements.define('square-button', SquareButton);