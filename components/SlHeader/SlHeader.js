import { SlSearch } from "../SlSearch/SlSearch.js";
import LogoQuebec from "../../assets/icons/bootstrap.svg";
import Search from "../../assets/icons/search.svg";

import "./SlHeader.css";

class SlHeader extends HTMLElement {
    static get observedAttributes() {
        return ['title', 'class', 'btnlabel', 'contacturl', 'contactlabel', 'search', 'langueurl', 'languagelabel', 'action', 'name', 'query', 'placeholder'];
    }

    constructor() {
        super();
        this.render();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            this.render();
        }
    }

    get template() {
        return `
            <header class="bg-bleu-piv">
                <div class="container">
                    <div class="piv">
                        <a class="sl-logo" href="https://klarence.net/" aria-label="Logo.com">
                            <img src="${Logo}" alt="logo" width="200" height="72" />
                        </a>
                        <p><a href="/">${this.title}</a></p>
                    </div>
                    <nav>
                        <button aria-label="${this.btnlabel}" class="btn-search">
                            <img src="${Search}" alt="Search" width="24" height="24" />
                        </button>
                        <ul ${this.langueurl ? `class="language"` : ''}>
                            ${this.langueurl ? `<li><a href="${this.langueurl}">${this.languagelabel}</a></li>` : ''}
                            <li><a href="${this.contacturl}">${this.contactlabel}</a></li>
                        </ul>
                    </nav>
                </div>
                ${this.search === 'oui' ? `<sl-search variant="dark" placeholder="${this.placeholder}" action="${this.action}" name="${this.name}" value="${this.query}"></sl-search>` : ''}
            </header>
        `;
    }

    get title() {
        return this.getAttribute('title') || 'Title du site';
    }

    get btnlabel() {
        return this.getAttribute('btnlabel') || 'Searchr';
    }

    get contacturl() {
        return this.getAttribute('contacturl') || '/';
    }

    get contactlabel() {
        return this.getAttribute('contactlabel') || 'Nous joindre';
    }

    get search() {
        return this.getAttribute('search') || 'non';
    }

    set search(value) {
        this.setAttribute('search', value);
    }

    get langueurl() {
        return this.getAttribute('langueurl');
    }

    get languagelabel() {
        return this.getAttribute('languagelabel') || 'English';
    }

    get placeholder() {
        return this.getAttribute('placeholder');
    }

    // Modification ici pour gérer la langue dans l'action
    get action() {
        const currentLang = document.documentElement.lang || 'fr'; // Obtention de la langue du document
        const baseAction = this.getAttribute('action') || '/';
        return `${baseAction}?lang=${currentLang}`; // Ajout de la langue à l'URL d'action
    }

    get name() {
        return this.getAttribute('name') || 'search';
    }

    get query() {
        return this.getAttribute('query') || '';
    }

    render() {
        this.innerHTML = this.template;

        const searchButton = this.querySelector('.btn-search');
        if (searchButton) {
            searchButton.addEventListener('click', () => {
                this.search = this.search === 'oui' ? 'non' : 'oui';
                this.render();  // Rerender to update the DOM
                this.updateSearchAction();
            });
        }

        if (this.search === 'oui') {
            const slSearch = this.querySelector('sl-search');
            if (slSearch) {
                slSearch.setAttribute('action', this.action); // Met à jour l'action with la langue
                slSearch.setAttribute('name', this.name);
                slSearch.setAttribute('value', this.query);
                const input = slSearch.querySelector('input');
                if (input) {
                    input.focus();
                }
            }
        }
    }

    updateSearchAction() {
        const slSearch = this.querySelector('sl-search');
        if (slSearch) {
            slSearch.setAttribute('action', this.action); // Met à jour l'action with la langue
            slSearch.setAttribute('name', this.name);
            slSearch.setAttribute('value', this.query);
        }
    }
}

customElements.get('sl-header') || customElements.define('sl-header', SlHeader);

export { SlHeader }
