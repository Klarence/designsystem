const s={title:"Pages/Page",parameters:{layout:"fullscreen"},render:()=>`
      <sl-header></sl-header>
      <sl-navigation>
        <ul>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Content</a>
          </li>
          <li>
            <a href="#">Design</a>
          </li>
          <li>
            <a href="#">Resources</a>
            <button>
              <span class="lnr lnr-chevron-down"></span>
            </button>
            <ul>
              <li><a href="#">Articles</a></li>
              <li><a href="#">Videos</a></li>
            </ul>
          </li>
        </ul>
        <div>
          <sl-button variant="primary">Connection</sl-button>
        </div>
      </sl-navigation>
      <main>
        <div class="container py-5">
          <div class="row">
            <div class="col-md-10">
           </div>
      </main>

      <sl-footer 
        site-url=""
        site-name="Design System"
      >
        <div slot="main-links">
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
        <a href="/copyright">©&nbsp;2024</a>
        </div>
      </sl-footer>
    `},i={};i.storyName="Page complete";var a,e,l;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(l=(e=i.parameters)==null?void 0:e.docs)==null?void 0:l.source}}};const t=["Integration"];export{i as Integration,t as __namedExportsOrder,s as default};
