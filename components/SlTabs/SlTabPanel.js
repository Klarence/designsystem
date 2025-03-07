import './SlTabPanel.css';


let SlTabPanelCounter = 0;

export class SlTabPanel extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.setAttribute('role', 'tabpanel');
        if (!this.id)
            this.id = `tabPanel-${SlTabPanelCounter++}`;
    }
}

customElements.define('sl-panel', SlTabPanel);