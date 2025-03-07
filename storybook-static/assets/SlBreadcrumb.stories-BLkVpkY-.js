import{i as h,c as f,_ as r,n as i,S as _,x as l,e as g,s as y}from"./class-map-C-iwQqPe.js";import{L as S}from"./chunk.WLV3FVBR-BTBv_Sfe.js";import{S as v,e as c,r as x,w,H as C,o as m}from"./chunk.HBPNMM7A-X2PiGvp-.js";var $=h`
  .breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`,s=class extends _{constructor(){super(...arguments),this.localize=new S(this),this.separatorDir=this.localize.dir(),this.label=""}getSeparator(){const e=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[e,...e.querySelectorAll("[id]")].forEach(n=>n.removeAttribute("id")),e.setAttribute("data-default",""),e.slot="separator",e}handleSlotChange(){const t=[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>e.tagName.toLowerCase()==="sl-breadcrumb-item");t.forEach((e,n)=>{const d=e.querySelector('[slot="separator"]');d===null?e.append(this.getSeparator()):d.hasAttribute("data-default")&&d.replaceWith(this.getSeparator()),n===t.length-1?e.setAttribute("aria-current","page"):e.removeAttribute("aria-current")})}render(){return this.separatorDir!==this.localize.dir()&&(this.separatorDir=this.localize.dir(),this.updateComplete.then(()=>this.handleSlotChange())),l`
      <nav part="base" class="breadcrumb" aria-label=${this.label}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </nav>

      <span hidden aria-hidden="true">
        <slot name="separator">
          <sl-icon name=${this.localize.dir()==="rtl"?"chevron-left":"chevron-right"} library="system"></sl-icon>
        </slot>
      </span>
    `}};s.styles=[f,$];s.dependencies={"sl-icon":v};r([c("slot")],s.prototype,"defaultSlot",2);r([c('slot[name="separator"]')],s.prototype,"separatorSlot",2);r([i()],s.prototype,"label",2);var T=s;s.define("sl-breadcrumb");var z=h`
  :host {
    display: inline-flex;
  }

  .breadcrumb-item {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-600);
    line-height: var(--sl-line-height-normal);
    white-space: nowrap;
  }

  .breadcrumb-item__label {
    display: inline-block;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    text-decoration: none;
    color: inherit;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    padding: 0;
    margin: 0;
    cursor: pointer;
    transition: var(--sl-transition-fast) --color;
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label {
    color: var(--sl-color-primary-600);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:hover {
    color: var(--sl-color-primary-500);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:active {
    color: var(--sl-color-primary-600);
  }

  .breadcrumb-item__label:focus {
    outline: none;
  }

  .breadcrumb-item__label:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .breadcrumb-item__prefix,
  .breadcrumb-item__suffix {
    display: none;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .breadcrumb-item--has-prefix .breadcrumb-item__prefix {
    display: inline-flex;
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .breadcrumb-item--has-suffix .breadcrumb-item__suffix {
    display: inline-flex;
    margin-inline-start: var(--sl-spacing-x-small);
  }

  :host(:last-of-type) .breadcrumb-item__separator {
    display: none;
  }

  .breadcrumb-item__separator {
    display: inline-flex;
    align-items: center;
    margin: 0 var(--sl-spacing-x-small);
    user-select: none;
    -webkit-user-select: none;
  }
`,a=class extends _{constructor(){super(...arguments),this.hasSlotController=new C(this,"prefix","suffix"),this.renderType="button",this.rel="noreferrer noopener"}setRenderType(){const t=this.defaultSlot.assignedElements({flatten:!0}).filter(e=>e.tagName.toLowerCase()==="sl-dropdown").length>0;if(this.href){this.renderType="link";return}if(t){this.renderType="dropdown";return}this.renderType="button"}hrefChanged(){this.setRenderType()}handleSlotChange(){this.setRenderType()}render(){return l`
      <div
        part="base"
        class=${g({"breadcrumb-item":!0,"breadcrumb-item--has-prefix":this.hasSlotController.test("prefix"),"breadcrumb-item--has-suffix":this.hasSlotController.test("suffix")})}
      >
        <span part="prefix" class="breadcrumb-item__prefix">
          <slot name="prefix"></slot>
        </span>

        ${this.renderType==="link"?l`
              <a
                part="label"
                class="breadcrumb-item__label breadcrumb-item__label--link"
                href="${this.href}"
                target="${m(this.target?this.target:void 0)}"
                rel=${m(this.target?this.rel:void 0)}
              >
                <slot @slotchange=${this.handleSlotChange}></slot>
              </a>
            `:""}
        ${this.renderType==="button"?l`
              <button part="label" type="button" class="breadcrumb-item__label breadcrumb-item__label--button">
                <slot @slotchange=${this.handleSlotChange}></slot>
              </button>
            `:""}
        ${this.renderType==="dropdown"?l`
              <div part="label" class="breadcrumb-item__label breadcrumb-item__label--drop-down">
                <slot @slotchange=${this.handleSlotChange}></slot>
              </div>
            `:""}

        <span part="suffix" class="breadcrumb-item__suffix">
          <slot name="suffix"></slot>
        </span>

        <span part="separator" class="breadcrumb-item__separator" aria-hidden="true">
          <slot name="separator"></slot>
        </span>
      </div>
    `}};a.styles=[f,z];r([c("slot:not([name])")],a.prototype,"defaultSlot",2);r([x()],a.prototype,"renderType",2);r([i()],a.prototype,"href",2);r([i()],a.prototype,"target",2);r([i()],a.prototype,"rel",2);r([w("href",{waitUntilFirstUpdate:!0})],a.prototype,"hrefChanged",1);a.define("sl-breadcrumb-item");y("../../..");const B={title:"Components/SlBreadcrumb",component:T,render:({...t})=>`

<sl-breadcrumb>
  <span slot="separator">/</span>
  <sl-breadcrumb-item>First</sl-breadcrumb-item>
  <sl-breadcrumb-item>Second</sl-breadcrumb-item>
  <sl-breadcrumb-item>Third</sl-breadcrumb-item>
</sl-breadcrumb>
    `},o={decorators:[t=>t()]};var b,p,u;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  decorators: [Story => Story()]
}`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const E=["Primary"],L=Object.freeze(Object.defineProperty({__proto__:null,Primary:o,__namedExportsOrder:E,default:B},Symbol.toStringTag,{value:"Module"}));export{L as B};
