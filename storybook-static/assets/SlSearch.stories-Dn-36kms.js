import{S as i}from"./SlSearch-DhpL5MiP.js";const d={title:"Components/SlSearch",component:i,argTypes:{placeholder:{control:"text",description:"Placeholder text for your search."},label:{control:"text",description:"Search field label for screen reader users."},btnlabel:{control:"text",description:"Search button label for screen reader users."},variant:{control:"select",options:["light","dark"],description:"Component variant."},action:{control:"text",description:"Search destination URL."},name:{control:"text",description:"Name of the entry for the search."},value:{control:"text",description:"Initial value of search field"}},render:({...e})=>h(e)};function h(e){return`
      <sl-search
        ${e.placeholder?`placeholder="${e.placeholder}"`:""}
        ${e.label?`label="${e.label}"`:""}
        ${e.variant?`variant="${e.variant}"`:""}
        ${e.btnlabel?`btnlabel="${e.btnlabel}"`:""}
        ${e.action?`action="${e.action}"`:""}
        ${e.name?`name="${e.name}"`:""}
        ${e.value?`value="${e.value}"`:""}
      >
      </sl-search>
    `}const r={args:{placeholder:"Search this site",label:"Search",name:"search",value:""}},a={args:{placeholder:"Search a product",btnlabel:"Search",variant:"dark",name:"header-search",value:"Initial Value"},decorators:[e=>`
      <div class="bg-blue-piv p-4">
        ${e()}
      </div>
    `]};a.storyName="Search in the Header component";var t,n,o;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    placeholder: "Search this site",
    label: "Search",
    name: "search",
    value: ""
  }
}`,...(o=(n=r.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};var l,c,s;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    placeholder: "Search a product",
    btnlabel: "Search",
    variant: "dark",
    name: "header-search",
    value: "Initial Value"
  },
  decorators: [Story => \`
      <div class="bg-blue-piv p-4">
        \${Story()}
      </div>
    \`]
}`,...(s=(c=a.parameters)==null?void 0:c.docs)==null?void 0:s.source}}};const p=["Default","Header"],S=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Header:a,__namedExportsOrder:p,default:d},Symbol.toStringTag,{value:"Module"}));export{a as H,S};
