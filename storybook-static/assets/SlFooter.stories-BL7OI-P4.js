import"./SlSocial-CeMG_SgF.js";const l="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='16'%20height='16'%20fill='currentColor'%20class='bi%20bi-bootstrap'%20viewBox='0%200%2016%2016'%3e%3cpath%20d='M5.062%2012h3.475c1.804%200%202.888-.908%202.888-2.396%200-1.102-.761-1.916-1.904-2.034v-.1c.832-.14%201.482-.93%201.482-1.816%200-1.3-.955-2.11-2.542-2.11H5.062V12zm1.313-4.875V4.658h1.78c.973%200%201.542.457%201.542%201.237%200%20.802-.604%201.23-1.764%201.23H6.375zm0%203.762V8.162h1.822c1.236%200%201.887.463%201.887%201.348%200%20.896-.627%201.377-1.811%201.377H6.375z'/%3e%3cpath%20d='M0%204a4%204%200%200%201%204-4h8a4%204%200%200%201%204%204v8a4%204%200%200%201-4%204H4a4%204%200%200%201-4-4V4zm4-3a3%203%200%200%200-3%203v8a3%203%200%200%200%203%203h8a3%203%200%200%200%203-3V4a3%203%200%200%200-3-3H4z'/%3e%3c/svg%3e";class a extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.render()}static get observedAttributes(){return["site-name","site-url"]}attributeChangedCallback(h,n,r){n!==r&&this.render()}get siteName(){return this.getAttribute("site-name")||"Gouvernement du Québec"}get siteUrl(){return this.getAttribute("site-url")||"https://www.quebec.ca"}render(){this.shadowRoot.innerHTML=`
      <style>
        :host {
          --main-background-color: #223654;
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

        .section-liens-copyright {
          padding: 0 0 2rem 0;
          text-align: center;
        }

        .section-liens-copyright p {
          margin: 0;
        }

      </style>

      <footer>
        <section class="section-secondary-links">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <a class="footer-title" href="${this.siteUrl}">${this.siteName}</a>
                        <h2 class="visually-hidden">Navigation de pied de page de Québec.ca</h2>
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

        <section class="section-liens-copyright">
          <div class="container">
            <img src="${l}" alt="Logo" width="117" height="35" />
            <p><slot name="copyright"></slot></p>
          </div>
        </section>
      </footer>
    `}}customElements.get("sl-footer")||customElements.define("sl-footer",a);const c={title:"Templates/SlFooter",component:a,argTypes:{siteurl:{control:"text",description:"URL of site"},sitename:{control:"text",description:"Name of site"}},render:({...e})=>`
      <sl-footer 
          ${e.siteurl?`site-url="${e.siteurl}"`:""}
          ${e.sitenom?`site-nom="${e.sitenom}"`:""}
      >
        <div slot="secondary-links">
          <nav>
            <h3>Section 1</h3>
            <ul>
              <li><a href="#link1">Link 1</a></li>
              <li><a href="#link2">Link 2</a></li>
            </ul>
          </nav>
          <nav>
            <h3>Section 1</h3>
            <ul>
              <li><a href="#link1">Link 1</a></li>
              <li><a href="#link2">Link 2</a></li>
            </ul>
          </nav>
          <nav>
            <h3>Section 1</h3>
            <ul>
              <li><a href="#link1">Link 1</a></li>
              <li><a href="#link2">Link 2</a></li>
            </ul>
          </nav>
          <sl-social
            title="Follow Us"
            theme="dark"
            medias='[{"icon":"/assets/icons/facebook-dark.svg","url":"https://facebook.com","text":"Facebook"},{"icon":"/assets/icons/twitterX-dark.svg","url":"https://twitter.com","text":"Twitter"},{"icon":"/assets/icons/youtube-dark.svg","url":"https://linkedin.com","text":"LinkedIn"}]'
          >
          </sl-social>
        </div>
        <div slot="secondary-links">
            <ul>
                <li><a href="/accessibility">Accessibility</a></li>
                <li><a href="/sitemap">Sitemap</a></li>
                <li><a href="/privacy-policy">Privacy Policy</a></li>
                <li><a href="/conditions-of-use">Conditions of use</a></li>
                <li><a href="/about">About</a></li>
            </ul>
        </div>
        <div slot="copyright">
        <a href="/copyright">© &nbsp;2024</a>
        </div>
      </sl-footer>
    `},t={args:{siteurl:"https://www.quebec.ca",sitename:"Gouvernement du Québec"}};var i,o,s;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    siteurl: 'https://www.quebec.ca',
    sitename: 'Gouvernement du Québec'
  }
}`,...(s=(o=t.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const d=["Default"],m=Object.freeze(Object.defineProperty({__proto__:null,Default:t,__namedExportsOrder:d,default:c},Symbol.toStringTag,{value:"Module"}));export{m as F};
