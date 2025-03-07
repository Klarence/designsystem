import{i as b,c as y,S as v,x as w,e as x,s as _}from"./class-map-C-iwQqPe.js";import{H as k}from"./chunk.HBPNMM7A-X2PiGvp-.js";import{S}from"./chunk.3HB7VQL2-B7Mr9DDy.js";var C=b`
  :host {
    --border-color: var(--sl-color-neutral-200);
    --border-radius: var(--sl-border-radius-medium);
    --border-width: 1px;
    --padding: var(--sl-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    display: flex;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    display: block;
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .card__body {
    display: block;
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    display: block;
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`,s=class extends v{constructor(){super(...arguments),this.hasSlotController=new k(this,"footer","header","image")}render(){return w`
      <div
        part="base"
        class=${x({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};s.styles=[y,C];var j=s;s.define("sl-card");_("../../..");S.define("sl-icon-button");const T={title:"Components/SlCard",component:j,render:()=>`

            <sl-card class="card-basic">
              This is just a basic card. No image, no header, and no footer. Just your content.
            </sl-card>
            
            <style>
              .card-basic {
                max-width: 300px;
              }
            </style>

        `},r={render:()=>`

<sl-card class="card-overview">
  <img
    slot="image"
    src="https://images.unsplash.com/photo-1559209172-0ff8f6d49ff7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
    alt="A kitten sits patiently between a terracotta pot and decorative grasses."
  />

  <strong>Mittens</strong><br />
  This kitten is as cute as he is playful. Bring him home today!<br />
  <small>6 weeks old</small>

  <div slot="footer">
    <sl-button variant="primary" pill>More Info</sl-button>
    <sl-rating></sl-rating>
  </div>
</sl-card>

<style>
  .card-overview {
    max-width: 300px;
  }

  .card-overview small {
    color: var(--sl-color-neutral-500);
  }

  .card-overview [slot='footer'] {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>

        `},a={render:()=>`

            <sl-card class="card-header">
              <div slot="header">
                Header Title
                <sl-icon-button name="gear" label="Settings"></sl-icon-button>
              </div>
            
              This card has a header. You can put all sorts of things in it!
            </sl-card>
            
            <style>
              .card-header {
                max-width: 300px;
              }
            
              .card-header [slot='header'] {
                display: flex;
                align-items: center;
                justify-content: space-between;
              }
            
              .card-header h3 {
                margin: 0;
              }
            
              .card-header sl-icon-button {
                font-size: var(--sl-font-size-medium);
              }
            </style>

        `},e={render:()=>`

<sl-card class="card-footer">
This card has a footer. You can put all sorts of things in it!

<div slot="footer">
<sl-rating></sl-rating>
<sl-button variant="primary">Preview</sl-button>
</div>
</sl-card>

<style>
.card-footer {
max-width: 300px;
}

.card-footer [slot='footer'] {
display: flex;
justify-content: space-between;
align-items: center;
}
</style>

        `},t={render:()=>`

<sl-card class="card-image">
  <img
    slot="image"
    src="https://images.unsplash.com/photo-1547191783-94d5f8f6d8b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"
    alt="A kitten walks towards camera on top of pallet."
  />
  This is a kitten, but not just any kitten. This kitten likes walking along pallets.
</sl-card>

<style>
  .card-image {
    max-width: 300px;
  }
</style>

        `};var o,n,d;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => {
    return \`

<sl-card class="card-overview">
  <img
    slot="image"
    src="https://images.unsplash.com/photo-1559209172-0ff8f6d49ff7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
    alt="A kitten sits patiently between a terracotta pot and decorative grasses."
  />

  <strong>Mittens</strong><br />
  This kitten is as cute as he is playful. Bring him home today!<br />
  <small>6 weeks old</small>

  <div slot="footer">
    <sl-button variant="primary" pill>More Info</sl-button>
    <sl-rating></sl-rating>
  </div>
</sl-card>

<style>
  .card-overview {
    max-width: 300px;
  }

  .card-overview small {
    color: var(--sl-color-neutral-500);
  }

  .card-overview [slot='footer'] {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>

        \`;
  }
}`,...(d=(n=r.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};var i,l,c;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    return \`

            <sl-card class="card-header">
              <div slot="header">
                Header Title
                <sl-icon-button name="gear" label="Settings"></sl-icon-button>
              </div>
            
              This card has a header. You can put all sorts of things in it!
            </sl-card>
            
            <style>
              .card-header {
                max-width: 300px;
              }
            
              .card-header [slot='header'] {
                display: flex;
                align-items: center;
                justify-content: space-between;
              }
            
              .card-header h3 {
                margin: 0;
              }
            
              .card-header sl-icon-button {
                font-size: var(--sl-font-size-medium);
              }
            </style>

        \`;
  }
}`,...(c=(l=a.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var m,p,h;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    return \`

<sl-card class="card-footer">
This card has a footer. You can put all sorts of things in it!

<div slot="footer">
<sl-rating></sl-rating>
<sl-button variant="primary">Preview</sl-button>
</div>
</sl-card>

<style>
.card-footer {
max-width: 300px;
}

.card-footer [slot='footer'] {
display: flex;
justify-content: space-between;
align-items: center;
}
</style>

        \`;
  }
}`,...(h=(p=e.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var u,f,g;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    return \`

<sl-card class="card-image">
  <img
    slot="image"
    src="https://images.unsplash.com/photo-1547191783-94d5f8f6d8b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"
    alt="A kitten walks towards camera on top of pallet."
  />
  This is a kitten, but not just any kitten. This kitten likes walking along pallets.
</sl-card>

<style>
  .card-image {
    max-width: 300px;
  }
</style>

        \`;
  }
}`,...(g=(f=t.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const H=["Primary","CardWithHeader","CardWithFooter","CardWithImage"],O=Object.freeze(Object.defineProperty({__proto__:null,CardWithFooter:e,CardWithHeader:a,CardWithImage:t,Primary:r,__namedExportsOrder:H,default:T},Symbol.toStringTag,{value:"Module"}));export{O as C};
