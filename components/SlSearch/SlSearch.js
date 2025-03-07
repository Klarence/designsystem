import searchLight from '../../assets/icons/search.svg';
import searchDark from '../../assets/icons/search.svg';
import './SlSearch.css';
import generateUUID from '../../helpers/generateUUID.js';

class SlSearch extends HTMLElement {
  static get observedAttributes() {
    return ['placeholder', 'class', 'label', 'btnlabel', 'variant', 'action', 'id', 'name', 'value'];
  }

  constructor() {x``
    super();
    this.uuid = `input-${generateUUID()}`;
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render();
    }
  }

  connectedCallback() {
    const clearBtn = this.querySelector('.clear-btn');
    if (clearBtn) {
      clearBtn.addEventListener('click', this.clearInput.bind(this));
    }
  }

  clearInput() {
    const input = this.querySelector('input');
    if (input) {
      input.value = '';
      input.focus();
    }
  }

  render() {
    this.innerHTML = this.template;
  }

  get template() {
    return `
      <form method="get" action="${this.action}" class="container">
        <div class="input-group">
          <label for="${this.inputId}" class="visually-hidden">${this.label}</label>
          <input
            id="${this.inputId}"
            name="${this.inputName}"
            type="text"
            placeholder="${this.placeholder}"
            class="form-control search-input"
            value="${this.inputValue}"
          />
          <button type="button" aria-label="Effacer" class="clear-btn"><span class="lnr lnr-cross"></span></button>
          <span class="input-group-btn">
            <button type="submit" aria-label="${this.btnlabel}" class="btn-search">
              ${this.generateSearchIcon()}
            </button>
          </span>
        </div>
      </form>
    `;
  }

  generateSearchIcon() {
    const iconSrc = this.variant === 'dark' ? searchDark : searchLight;
    return `<img src="${iconSrc}" alt="Search" width="24" height="24" />`;
  }

  get placeholder() {
    return this.getAttribute('placeholder') || 'Search';
  }

  get label() {
    return this.getAttribute('label') || 'Search';
  }

  get btnlabel() {
    return this.getAttribute('btnlabel') || 'Search';
  }

  get variant() {
    return this.getAttribute('variant') || 'light';
  }

  get action() {
    const currentLang = document.documentElement.lang || 'en'; // Getting the document language
    const baseAction = this.getAttribute('action') || '/';
    return `${baseAction}?lang=${currentLang}`; // Adding language to action URL
  }

  get inputId() {
    return this.getAttribute('id') || this.uuid;
  }

  get inputName() {
    return this.getAttribute('name') || 'query'; // Using 'query' as default name
  }

  get inputValue() {
    const urlParams = new URLSearchParams(window.location.search);
    return this.getAttribute('value') || urlParams.get('query') || ''; // Getting value from URL
  }
}

customElements.get('sl-search') || customElements.define('sl-search', SlSearch);
export { SlSearch };
