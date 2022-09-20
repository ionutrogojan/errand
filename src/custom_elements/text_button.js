class TextButton extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({mode: 'open'});
        
        const linkElem = document.createElement('link');
        linkElem.setAttribute('rel', 'stylesheet');
        linkElem.setAttribute('href', './style.css');
        shadow.appendChild(linkElem);

        const btn_text = this.innerHTML;
        const btn_element = document.createElement('p');
        btn_element.textContent = btn_text;
        shadow.appendChild(btn_element);
    }
}

window.customElements.define('text-button', TextButton);