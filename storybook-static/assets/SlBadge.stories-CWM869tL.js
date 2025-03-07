import{i as B,c as k,_ as l,n as c,S as P,x as j,e as O,s as $}from"./class-map-C-iwQqPe.js";var z=B`
  :host {
    display: inline-flex;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: max(12px, 0.75em);
    font-weight: var(--sl-font-weight-semibold);
    letter-spacing: var(--sl-letter-spacing-normal);
    line-height: 1;
    border-radius: var(--sl-border-radius-small);
    border: solid 1px var(--sl-color-neutral-0);
    white-space: nowrap;
    padding: 0.35em 0.6em;
    user-select: none;
    -webkit-user-select: none;
    cursor: inherit;
  }

  /* Variant modifiers */
  .badge--primary {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--success {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--neutral {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--warning {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--danger {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /* Pill modifier */
  .badge--pill {
    border-radius: var(--sl-border-radius-pill);
  }

  /* Pulse modifier */
  .badge--pulse {
    animation: pulse 1.5s infinite;
  }

  .badge--pulse.badge--primary {
    --pulse-color: var(--sl-color-primary-600);
  }

  .badge--pulse.badge--success {
    --pulse-color: var(--sl-color-success-600);
  }

  .badge--pulse.badge--neutral {
    --pulse-color: var(--sl-color-neutral-600);
  }

  .badge--pulse.badge--warning {
    --pulse-color: var(--sl-color-warning-600);
  }

  .badge--pulse.badge--danger {
    --pulse-color: var(--sl-color-danger-600);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--pulse-color);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }
`,a=class extends P{constructor(){super(...arguments),this.variant="primary",this.pill=!1,this.pulse=!1}render(){return j`
      <span
        part="base"
        class=${O({badge:!0,"badge--primary":this.variant==="primary","badge--success":this.variant==="success","badge--neutral":this.variant==="neutral","badge--warning":this.variant==="warning","badge--danger":this.variant==="danger","badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};a.styles=[k,z];l([c({reflect:!0})],a.prototype,"variant",2);l([c({type:Boolean,reflect:!0})],a.prototype,"pill",2);l([c({type:Boolean,reflect:!0})],a.prototype,"pulse",2);var C=a;a.define("sl-badge");$("../../..");const D={title:"Components/SlBadge",component:C,argTypes:{variant:{options:["primary","success","warning","danger","neutral"],control:{type:"radio"}}},render:({...r})=>`

<sl-badge variant="${r.variant?r.variant:"primary"}">${r.variant?r.variant:"primary"}</sl-badge>

    `},e={args:{variant:"primary"},decorators:[r=>r()]},s={args:{variant:"success"},decorators:[r=>r()]},o={args:{variant:"neutral"},decorators:[r=>r()]},t={args:{variant:"gear"},decorators:[r=>r()]},n={args:{variant:"gear"},decorators:[r=>r()]};var i,d,u;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    variant: "primary"
  },
  decorators: [Story => Story()]
}`,...(u=(d=e.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var p,g,m;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: "success"
  },
  decorators: [Story => Story()]
}`,...(m=(g=s.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var b,v,y;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: "neutral"
  },
  decorators: [Story => Story()]
}`,...(y=(v=o.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var S,f,h;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    variant: "gear"
  },
  decorators: [Story => Story()]
}`,...(h=(f=t.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var w,_,x;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: "gear"
  },
  decorators: [Story => Story()]
}`,...(x=(_=n.parameters)==null?void 0:_.docs)==null?void 0:x.source}}};const E=["Primary","Success","Neutral","Warning","Danger"],T=Object.freeze(Object.defineProperty({__proto__:null,Danger:n,Neutral:o,Primary:e,Success:s,Warning:t,__namedExportsOrder:E,default:D},Symbol.toStringTag,{value:"Module"}));export{T as B};
