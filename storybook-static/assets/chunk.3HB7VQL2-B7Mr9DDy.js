import{i as a,c as l,_ as s,n as i,S as c,e as u}from"./class-map-C-iwQqPe.js";import{S as d,e as b,r as h,o as e}from"./chunk.HBPNMM7A-X2PiGvp-.js";import{i as r,u as p}from"./static-DosL3UPj.js";var f=a`
  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`,t=class extends c{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(o){this.disabled&&(o.preventDefault(),o.stopPropagation())}click(){this.button.click()}focus(o){this.button.focus(o)}blur(){this.button.blur()}render(){const o=!!this.href,n=o?r`a`:r`button`;return p`
      <${n}
        part="base"
        class=${u({"icon-button":!0,"icon-button--disabled":!o&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${e(o?void 0:this.disabled)}
        type=${e(o?void 0:"button")}
        href=${e(o?this.href:void 0)}
        target=${e(o?this.target:void 0)}
        download=${e(o?this.download:void 0)}
        rel=${e(o&&this.target?"noreferrer noopener":void 0)}
        role=${e(o?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${e(this.name)}
          library=${e(this.library)}
          src=${e(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${n}>
    `}};t.styles=[l,f];t.dependencies={"sl-icon":d};s([b(".icon-button")],t.prototype,"button",2);s([h()],t.prototype,"hasFocus",2);s([i()],t.prototype,"name",2);s([i()],t.prototype,"library",2);s([i()],t.prototype,"src",2);s([i()],t.prototype,"href",2);s([i()],t.prototype,"target",2);s([i()],t.prototype,"download",2);s([i()],t.prototype,"label",2);s([i({type:Boolean,reflect:!0})],t.prototype,"disabled",2);export{t as S};
