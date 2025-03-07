import{ae as e,af as r,ag as t,ah as l,ai as a}from"./index-BZgQM0p8.js";import{useMDXComponents as o}from"./index-CFTnJw_j.js";import{F as c}from"./SlFooter.stories-BL7OI-P4.js";import"./iframe-Day1-2IS.js";import"../sb-preview/runtime.js";import"./index-B0EJvtKl.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-BHYIh-Xd.js";import"./index-DrFu-skq.js";import"./SlSocial-CeMG_SgF.js";function s(n){const i={code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:c}),`
`,e.jsx(i.h1,{id:"footer",children:"Footer"}),`
`,e.jsx(i.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(i.p,{children:"The component accepts two main attributes:"}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:"site-name"}),` : The name of the site to display in the footer. By default, it is set to “Government of Quebec”.
`,e.jsx(i.code,{children:"site-url"}),' : The URL of the site. By default, it is set to "https://www.quebec.ca".']}),`
`,e.jsx(i.h2,{id:"slots",children:"Slots"}),`
`,e.jsxs(i.p,{children:["The ",e.jsx(i.code,{children:"<sl-footer>"})," component uses named slots to insert custom content. Here are the different slots available:"]}),`
`,e.jsx(i.h4,{id:"main-links",children:e.jsx(i.code,{children:"main-links"})}),`
`,e.jsx(i.p,{children:"Used to insert the main links of the site. This slot is intended to contain main navigation elements."}),`
`,e.jsx(t,{code:`
<div slot="main-links"
  <nav>
    <h3>Title Section</h3>
    <ul>
      <li><a href="#link1">Link 1</a></li>
      <li><a href="#link2">Link 2</a></li>
    </ul>
  </nav>
</div>
`}),`
`,e.jsx(i.h4,{id:"secondary-links",children:e.jsx(i.code,{children:"secondary-links"})}),`
`,e.jsx(i.p,{children:"Used to insert secondary links such as site policies and accessibility information."}),`
`,e.jsx(t,{code:`
<div slot="secondary-links">
    <ul>
      <li><a href="#link1">Link 1</a></li>
      <li><a href="#link2">Link 2</a></li>
    </ul>
</div>
`}),`
`,e.jsx(i.h4,{id:"copyright",children:e.jsx(i.code,{children:"copyright"})}),`
`,e.jsx(i.p,{children:"Used to insert copyright and other legal information."}),`
`,e.jsx(t,{code:`
<div slot="copyright">
    <ul>
      <li><a href="#link1">Link 1</a></li>
      <li><a href="#link2">Link 2</a></li>
    </ul>
</div>
`}),`
`,e.jsx(i.h2,{id:"complete-example",children:"complete example"}),`
`,e.jsx(l,{}),`
`,e.jsx(a,{})]})}function g(n={}){const{wrapper:i}={...o(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(s,{...n})}):s(n)}export{g as default};
