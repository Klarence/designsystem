import{a as v}from"./SlSearch-DhpL5MiP.js";class g extends HTMLElement{static get observedAttributes(){return["title","class","btnlabel","contacturl","contactlabel","search","langueurl","languelabel","action","name","query","placeholder"]}constructor(){super(),this.render()}attributeChangedCallback(t,a,i){a!==i&&this.render()}get template(){return`
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
                            <img src="${v}" alt="Search" width="24" height="24" />
                        </button>
                        <ul ${this.langueurl?'class="language"':""}>
                            ${this.langueurl?`<li><a href="${this.langueurl}">${this.languelabel}</a></li>`:""}
                            <li><a href="${this.contacturl}">${this.contactlabel}</a></li>
                        </ul>
                    </nav>
                </div>
                ${this.search==="oui"?`<sl-search variant="dark" placeholder="${this.placeholder}" action="${this.action}" name="${this.name}" value="${this.query}"></sl-search>`:""}
            </header>
        `}get title(){return this.getAttribute("title")||"Title du site"}get btnlabel(){return this.getAttribute("btnlabel")||"Searchr"}get contacturl(){return this.getAttribute("contacturl")||"/"}get contactlabel(){return this.getAttribute("contactlabel")||"Nous joindre"}get search(){return this.getAttribute("search")||"non"}set search(t){this.setAttribute("search",t)}get langueurl(){return this.getAttribute("langueurl")}get languelabel(){return this.getAttribute("languelabel")||"English"}get placeholder(){return this.getAttribute("placeholder")}get action(){const t=document.documentElement.lang||"fr";return`${this.getAttribute("action")||"/"}?lang=${t}`}get name(){return this.getAttribute("name")||"search"}get query(){return this.getAttribute("query")||""}render(){this.innerHTML=this.template;const t=this.querySelector(".btn-search");if(t&&t.addEventListener("click",()=>{this.search=this.search==="oui"?"non":"oui",this.render(),this.updateSearchAction()}),this.search==="oui"){const a=this.querySelector("sl-search");if(a){a.setAttribute("action",this.action),a.setAttribute("name",this.name),a.setAttribute("value",this.query);const i=a.querySelector("input");i&&i.focus()}}}updateSearchAction(){const t=this.querySelector("sl-search");t&&(t.setAttribute("action",this.action),t.setAttribute("name",this.name),t.setAttribute("value",this.query))}}customElements.get("sl-header")||customElements.define("sl-header",g);const f={title:"Templates/SlHeader",component:g,argTypes:{title:{control:"text",description:"Title of site"},btnlabel:{control:"text",description:"Search button label for screen reader users."},contacturl:{control:"text",description:`Contact page URL
`},contactlabel:{control:"text",description:"Label of the link to the contact page"},action:{control:"text",description:"Search Destination URL."},name:{control:"text",description:"Name of input for search."},query:{control:"text",description:"Initial value of search field."},placeholder:{control:"text",description:"Placeholder for search field."}},render:({...e})=>`
          <sl-header
            ${e.title?`title="${e.title}"`:""}
            ${e.btnlabel?`btnlabel="${e.btnlabel}"`:""}
            ${e.contacturl?`contacturl="${e.contacturl}"`:""}
            ${e.contactlabel?`contactlabel="${e.contactlabel}"`:""}
            ${e.action?`action="${e.action}"`:""}
            ${e.languageurl?`languageurl="${e.languageurl}"`:""}
            ${e.name?`name="${e.name}"`:""}
            ${e.query?`query="${e.query}"`:""}
            ${e.placeholder?`query="${e.placeholder}"`:""}
          >
          </sl-header>`},n={args:{title:"My site",languageurl:"https://www.klarence.net",name:"search",query:""}},l={args:{title:"Review Site",placeholder:"Search for ...",btnlabel:"Search",variant:"dark",name:"search-alert",query:""},decorators:[e=>`
            ${e()}
            <sl-alert 
                variant="neutral" 
                closable open>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. <a href='#'>Cras venenatis euismod</a> malesuada.</p>
            </sl-alert>
        `]},r={args:{title:"My site with navigation",placeholder:"Search for ...",btnlabel:"Search",variant:"dark",name:"search-navigation",query:""},decorators:[e=>`
            ${e()}
            <sl-navigation>
                <ul>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a>Content</a>
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
            </sl-navigation>
            <sl-alert 
                variant="neutral" 
                closable open >
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. <a href='#'>Cras venenatis euismod</a> malesuada.</p>
            </sl-alert>
        `]};r.storyName="With navigation";var s,o,c;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    title: "My site",
    languageurl: "https://www.klarence.net",
    name: "search",
    query: ""
  }
}`,...(c=(o=n.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};var u,h,d;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    title: "Review Site",
    placeholder: "Search for ...",
    btnlabel: "Search",
    variant: "dark",
    name: "search-alert",
    query: ""
  },
  decorators: [Story => \`
            \${Story()}
            <sl-alert 
                variant="neutral" 
                closable open>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. <a href='#'>Cras venenatis euismod</a> malesuada.</p>
            </sl-alert>
        \`]
}`,...(d=(h=l.parameters)==null?void 0:h.docs)==null?void 0:d.source}}};var b,m,p;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    title: "My site with navigation",
    placeholder: "Search for ...",
    btnlabel: "Search",
    variant: "dark",
    name: "search-navigation",
    query: ""
  },
  decorators: [Story => \`
            \${Story()}
            <sl-navigation>
                <ul>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a>Content</a>
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
            </sl-navigation>
            <sl-alert 
                variant="neutral" 
                closable open >
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. <a href='#'>Cras venenatis euismod</a> malesuada.</p>
            </sl-alert>
        \`]
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const $=["Default","WithReviews","WithNavigation"],y=Object.freeze(Object.defineProperty({__proto__:null,Default:n,WithNavigation:r,WithReviews:l,__namedExportsOrder:$,default:f},Symbol.toStringTag,{value:"Module"}));export{n as D,y as H};
