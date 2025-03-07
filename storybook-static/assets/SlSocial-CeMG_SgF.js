class r extends HTMLElement{static get observedAttributes(){return["title","medias","theme"]}constructor(){super(),this.render()}get template(){const s=this.theme==="light"?"theme-light":"theme-dark",t=JSON.parse(this.medias||"[]").map(e=>`
            <li>
                <a href="${e.url}" target="_blank" rel="noopener noreferrer">
                    <img src="${e.icon}" alt="${e.text} icon">
                    <span class="visually-hidden">${e.text}</span>
                </a>
            </li>
        `).join("");return`
            <div class="qc-social ${s}">
                <h3>${this.titre}</h3>
                <ul>
                    ${t}
                </ul>
            </div>
        `}get titre(){return this.getAttribute("title")||"Follow us on social media"}get medias(){return this.getAttribute("medias")}get theme(){return this.getAttribute("theme")||"dark"}attributeChangedCallback(s,i,t){i!==t&&this.render()}render(){this.innerHTML=this.template}}customElements.get("sl-social")||customElements.define("sl-social",r);export{r as S};
