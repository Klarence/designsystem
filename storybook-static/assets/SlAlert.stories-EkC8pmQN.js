import{S as M}from"./chunk.3HB7VQL2-B7Mr9DDy.js";import{a as j,b as B,i as W,c as R,_ as o,n as p,S as U,x as h,e as g,s as K}from"./class-map-C-iwQqPe.js";import{L as V}from"./chunk.WLV3FVBR-BTBv_Sfe.js";import{e as D,r as X,w as O,H as Y}from"./chunk.HBPNMM7A-X2PiGvp-.js";var q=new Map,G=new WeakMap;function J(e){return e??{keyframes:[],options:{duration:0}}}function v(e,t){return t.toLowerCase()==="rtl"?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function F(e,t){q.set(e,J(t))}function f(e,t,a){const n=G.get(e);if(n!=null&&n[t])return v(n[t],a.dir);const i=q.get(t);return i?v(i,a.dir):{keyframes:[],options:{duration:0}}}function y(e,t){return new Promise(a=>{function n(i){i.target===e&&(e.removeEventListener(t,n),a())}e.addEventListener(t,n)})}function w(e,t,a){return new Promise(n=>{if((a==null?void 0:a.duration)===1/0)throw new Error("Promise-based animations must be finite.");const i=e.animate(t,j(B({},a),{duration:Q()?0:a.duration}));i.addEventListener("cancel",n,{once:!0}),i.addEventListener("finish",n,{once:!0})})}function Q(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function _(e){return Promise.all(e.getAnimations().map(t=>new Promise(a=>{t.cancel(),requestAnimationFrame(a)})))}var Z=W`
  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-top-width: calc(var(--sl-panel-border-width) * 3);
    border-radius: var(--sl-border-radius-medium);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-normal);
    line-height: 1.6;
    color: var(--sl-color-neutral-700);
    margin: inherit;
    overflow: hidden;
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-large);
    padding-inline-start: var(--sl-spacing-large);
  }

  .alert--has-countdown {
    border-bottom: none;
  }

  .alert--primary {
    border-top-color: var(--sl-color-primary-600);
  }

  .alert--primary .alert__icon {
    color: var(--sl-color-primary-600);
  }

  .alert--success {
    border-top-color: var(--sl-color-success-600);
  }

  .alert--success .alert__icon {
    color: var(--sl-color-success-600);
  }

  .alert--neutral {
    border-top-color: var(--sl-color-neutral-600);
  }

  .alert--neutral .alert__icon {
    color: var(--sl-color-neutral-600);
  }

  .alert--warning {
    border-top-color: var(--sl-color-warning-600);
  }

  .alert--warning .alert__icon {
    color: var(--sl-color-warning-600);
  }

  .alert--danger {
    border-top-color: var(--sl-color-danger-600);
  }

  .alert--danger .alert__icon {
    color: var(--sl-color-danger-600);
  }

  .alert__message {
    flex: 1 1 auto;
    display: block;
    padding: var(--sl-spacing-large);
    overflow: hidden;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
    padding-inline-end: var(--sl-spacing-medium);
  }

  .alert__countdown {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: calc(var(--sl-panel-border-width) * 3);
    background-color: var(--sl-panel-border-color);
    display: flex;
  }

  .alert__countdown--ltr {
    justify-content: flex-end;
  }

  .alert__countdown .alert__countdown-elapsed {
    height: 100%;
    width: 0;
  }

  .alert--primary .alert__countdown-elapsed {
    background-color: var(--sl-color-primary-600);
  }

  .alert--success .alert__countdown-elapsed {
    background-color: var(--sl-color-success-600);
  }

  .alert--neutral .alert__countdown-elapsed {
    background-color: var(--sl-color-neutral-600);
  }

  .alert--warning .alert__countdown-elapsed {
    background-color: var(--sl-color-warning-600);
  }

  .alert--danger .alert__countdown-elapsed {
    background-color: var(--sl-color-danger-600);
  }

  .alert__timer {
    display: none;
  }
`,s=Object.assign(document.createElement("div"),{className:"sl-toast-stack"}),r=class extends U{constructor(){super(...arguments),this.hasSlotController=new Y(this,"icon","suffix"),this.localize=new V(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0,this.remainingTime=this.duration}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){this.handleCountdownChange(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration),this.remainingTime=this.duration,this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100))}pauseAutoHide(){var e;(e=this.countdownAnimation)==null||e.pause(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval)}resumeAutoHide(){var e;this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.remainingTime),this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100),(e=this.countdownAnimation)==null||e.play())}handleCountdownChange(){if(this.open&&this.duration<1/0&&this.countdown){const{countdownElement:e}=this,t="100%",a="0";this.countdownAnimation=e.animate([{width:t},{width:a}],{duration:this.duration,easing:"linear"})}}handleCloseClick(){this.hide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await _(this.base),this.base.hidden=!1;const{keyframes:e,options:t}=f(this,"alert.show",{dir:this.localize.dir()});await w(this.base,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),await _(this.base);const{keyframes:e,options:t}=f(this,"alert.hide",{dir:this.localize.dir()});await w(this.base,e,t),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,y(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,y(this,"sl-after-hide")}async toast(){return new Promise(e=>{this.handleCountdownChange(),s.parentElement===null&&document.body.append(s),s.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{s.removeChild(this),e(),s.querySelector("sl-alert")===null&&s.remove()},{once:!0})})}render(){return h`
      <div
        part="base"
        class=${g({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-countdown":!!this.countdown,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
        role="alert"
        aria-hidden=${this.open?"false":"true"}
        @mouseenter=${this.pauseAutoHide}
        @mouseleave=${this.resumeAutoHide}
      >
        <div part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </div>

        <div part="message" class="alert__message" aria-live="polite">
          <slot></slot>
        </div>

        ${this.closable?h`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                @click=${this.handleCloseClick}
              ></sl-icon-button>
            `:""}

        <div role="timer" class="alert__timer">${this.remainingTime}</div>

        ${this.countdown?h`
              <div
                class=${g({alert__countdown:!0,"alert__countdown--ltr":this.countdown==="ltr"})}
              >
                <div class="alert__countdown-elapsed"></div>
              </div>
            `:""}
      </div>
    `}};r.styles=[R,Z];r.dependencies={"sl-icon-button":M};o([D('[part~="base"]')],r.prototype,"base",2);o([D(".alert__countdown-elapsed")],r.prototype,"countdownElement",2);o([p({type:Boolean,reflect:!0})],r.prototype,"open",2);o([p({type:Boolean,reflect:!0})],r.prototype,"closable",2);o([p({reflect:!0})],r.prototype,"variant",2);o([p({type:Number})],r.prototype,"duration",2);o([p({type:String,reflect:!0})],r.prototype,"countdown",2);o([X()],r.prototype,"remainingTime",2);o([O("open",{waitUntilFirstUpdate:!0})],r.prototype,"handleOpenChange",1);o([O("duration")],r.prototype,"handleDurationChange",1);F("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});F("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});var ee=r;r.define("sl-alert");K("../../..");const te={title:"Components/SlAlert",component:ee,argTypes:{variant:{options:["primary","success","warning","danger","neutral"],control:{type:"radio"}},iconName:{options:["info-circle","check2-circle","gear","exclamation-triangle","exclamation-octagon"],control:{type:"radio"}},closable:{type:"boolean"},open:{type:"boolean"}},render:({...e})=>`

<sl-alert variant="${e.variant?e.variant:"primary"}" 
${e.closable?"closable":""}
${e.open?"open":""}>
  <sl-icon slot="icon" name="${e.iconName?e.iconName:"info-circle"}"></sl-icon>
  <strong>This is super informative</strong><br />
  You can tell by how pretty the alert is.
</sl-alert>

    `},l={args:{variant:"primary",iconName:"info-circle",open:!0,closable:!0},decorators:[e=>e()]},c={args:{variant:"success",iconName:"check2-circle",open:!0},decorators:[e=>e()]},d={args:{variant:"neutral",iconName:"gear",open:!0},decorators:[e=>e()]},u={args:{variant:"gear",iconName:"exclamation-triangle",open:!0},decorators:[e=>e()]},m={args:{variant:"gear",iconName:"exclamation-octagon",open:!0},decorators:[e=>e()]};var b,S,A;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    iconName: "info-circle",
    open: true,
    closable: true
  },
  decorators: [Story => Story()]
}`,...(A=(S=l.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};var k,T,C;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    variant: "success",
    iconName: "check2-circle",
    open: true
  },
  decorators: [Story => Story()]
}`,...(C=(T=c.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var x,I,$;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: "neutral",
    iconName: "gear",
    open: true
  },
  decorators: [Story => Story()]
}`,...($=(I=d.parameters)==null?void 0:I.docs)==null?void 0:$.source}}};var H,N,E;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    variant: "gear",
    iconName: "exclamation-triangle",
    open: true
  },
  decorators: [Story => Story()]
}`,...(E=(N=u.parameters)==null?void 0:N.docs)==null?void 0:E.source}}};var z,P,L;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    variant: "gear",
    iconName: "exclamation-octagon",
    open: true
  },
  decorators: [Story => Story()]
}`,...(L=(P=m.parameters)==null?void 0:P.docs)==null?void 0:L.source}}};const re=["Primary","Success","Neutral","Warning","Danger"],se=Object.freeze(Object.defineProperty({__proto__:null,Danger:m,Neutral:d,Primary:l,Success:c,Warning:u,__namedExportsOrder:re,default:te},Symbol.toStringTag,{value:"Module"}));export{se as A};
