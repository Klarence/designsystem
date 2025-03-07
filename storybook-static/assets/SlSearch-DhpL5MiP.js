const n="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='16'%20height='16'%20fill='currentColor'%20class='bi%20bi-search'%20viewBox='0%200%2016%2016'%3e%3cpath%20d='M11.742%2010.344a6.5%206.5%200%201%200-1.397%201.398h-.001c.03.04.062.078.098.115l3.85%203.85a1%201%200%200%200%201.415-1.414l-3.85-3.85a1.007%201.007%200%200%200-.115-.1zM12%206.5a5.5%205.5%200%201%201-11%200%205.5%205.5%200%200%201%2011%200z'/%3e%3c/svg%3e";function i(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){const t=Math.random()*16|0;return(a==="x"?t:t&3|8).toString(16)})}class s extends HTMLElement{static get observedAttributes(){return["placeholder","class","label","btnlabel","variant","action","id","name","value"]}constructor(){x``,super(),this.uuid=`input-${i()}`,this.render()}attributeChangedCallback(t,e,r){e!==r&&this.render()}connectedCallback(){const t=this.querySelector(".clear-btn");t&&t.addEventListener("click",this.clearInput.bind(this))}clearInput(){const t=this.querySelector("input");t&&(t.value="",t.focus())}render(){this.innerHTML=this.template}get template(){return`
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
    `}generateSearchIcon(){return`<img src="${this.variant==="dark",n}" alt="Search" width="24" height="24" />`}get placeholder(){return this.getAttribute("placeholder")||"Search"}get label(){return this.getAttribute("label")||"Search"}get btnlabel(){return this.getAttribute("btnlabel")||"Search"}get variant(){return this.getAttribute("variant")||"light"}get action(){const t=document.documentElement.lang||"en";return`${this.getAttribute("action")||"/"}?lang=${t}`}get inputId(){return this.getAttribute("id")||this.uuid}get inputName(){return this.getAttribute("name")||"query"}get inputValue(){const t=new URLSearchParams(window.location.search);return this.getAttribute("value")||t.get("query")||""}}customElements.get("sl-search")||customElements.define("sl-search",s);export{s as S,n as a};
