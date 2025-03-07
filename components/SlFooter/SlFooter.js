import slLogo from '../../assets/images/logos/koy-logo.svg';
import './SlFooter.css'


class SlFooter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.render();
  }

  static get observedAttributes() {
    return ['site-name', 'site-url'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render();
    }
  }

  get siteName() {
    return this.getAttribute('site-name') || 'KOYdesigns';
  }

  get siteUrl() {
    return this.getAttribute('site-url') || 'https://www.koydesigns.net';
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          --main-background-color: #dedede;
          --link-color: #095797;
          --link-color-dark: white;
          --link-color-hover: #3374cc;
          display: block;
        }

        .visually-hidden {
          position: absolute;
          overflow: hidden;
          clip: rect(0 0 0 0);
          height: 1px;
          width: 1px;
          margin: -1px;
          padding: 0;
          border: 0;
        }

        .container {
            width: 100%;
            padding-right: 15px;
            padding-left: 15px;
            margin-right: auto;
            margin-left: auto;
        }

        @media (min-width: 1200px) {
            .container {
                max-width: 1110px;
            }
        }

        .section-secondary-links {
          background-color: var(--main-background-color);
          padding: 3rem 0;
          color: var(--link-color-dark);
        }

        a.footer-title {
          font-family: "Roboto", sans-serif;
          display: block;
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          font-weight: 500;
          text-decoration: none;
          color: var(--link-color-dark);
        }

        a.footer-title:hover {
          text-decoration: underline;
        }

        .copyright-section {
          padding: 0 0 2rem 0;
          text-align: center;
        }

        .copyright-section p {
          margin: 0;
        }

      </style>

      <footer>
        <section class="section-secondary-links">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <img src="${slLogo}" alt="Logo" height="35" />
                        <a class="footer-title" href="${this.siteUrl}">${this.siteName}</a>
                        <h2 class="visually-hidden">Footer Navigation</h2>
                    </div>
                </div>
                <div class="row">
                    <slot name="secondary-links"></slot>
                </div>
            </div>
        </section>

        <section class="section-secondary-links">
          <div class="container">
            <div class="row">
              <div class="col-12 d-flex">
                <slot name="secondary-links"></slot>
              </div>
            </div>
          </div>
        </section>

        <section class="copyright-section">
          <div class="container">
            <p><slot name="copyright"></slot></p>
          </div>
        </section>
      </footer>
    `;
  }
}

customElements.get('sl-footer') || customElements.define('sl-footer', SlFooter);

export { SlFooter };
