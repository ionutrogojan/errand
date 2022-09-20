const style = (colour) => {
    return `
        @import url('./style.css');
        span {
            background-color: ${colour};
            width: 16px;
            height: 16px;
            display: grid;
            border-radius: 50%;
        }
        h3 {
            width: 100%;
            margin: 0;
            font-size: 16px;
            font-weight: normal;
            text-align: start;
        }
        p {
            font-size: 14px;
            color: hsl(0, 0%, 50%);
        }
    `
}

class TabButton extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({mode: 'open'});

        // const colour_code = this.getAttribute('colour');

        const styleSheet = document.createElement('style');
        styleSheet.innerHTML = style(this.getAttribute('colour'));
        shadow.appendChild(styleSheet);


        const btn_colour = document.createElement('span');
        shadow.appendChild(btn_colour);

        const btn_element = document.createElement('h3');
        btn_element.textContent = this.innerHTML;
        shadow.appendChild(btn_element);

        const btn_count = document.createElement('p');
        btn_count.textContent = this.getAttribute('count');
        shadow.appendChild(btn_count);
    }
}

window.customElements.define('tab-button', TabButton);