const __vite__fileDeps=["./index-ByTgGhYT.js","./index-C-ZhoMRo.js","./index-CFLyRSnV.js","./iframe-DL6UtLZ7.js","./_commonjsHelpers-Cpj98o6Y.js","./index-D-8MO0q_.js","./index-Cef7vbu6.js","./index-DrFu-skq.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as h}from"./iframe-DL6UtLZ7.js";import{ao as E,ap as s,aq as d,ar as v,as as R,ak as n,at as w}from"./index-CFLyRSnV.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-Cef7vbu6.js";import"./index-DrFu-skq.js";var l,m=E;l=m.createRoot,m.hydrateRoot;var a=new Map;function _(){return globalThis.IS_REACT_ACT_ENVIRONMENT}var f=({callback:e,children:t})=>{let r=s.useRef();return s.useLayoutEffect(()=>{r.current!==e&&(r.current=e,e())},[e]),t};typeof Promise.withResolvers>"u"&&(Promise.withResolvers=()=>{let e=null,t=null;return{promise:new Promise((r,o)=>{e=r,t=o}),resolve:e,reject:t}});var x=async(e,t,r)=>{let o=await g(t,r);if(_()){o.render(e);return}let{promise:i,resolve:u}=Promise.withResolvers();return o.render(s.createElement(f,{callback:u},e)),i},y=(e,t)=>{let r=a.get(e);r&&(r.unmount(),a.delete(e))},g=async(e,t)=>{let r=a.get(e);return r||(r=l(e,t),a.set(e,r)),r},D={code:d,a:v,...R},C=class extends s.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){let{showException:t}=this.props;t(e)}render(){let{hasError:e}=this.state,{children:t}=this.props;return e?null:n.createElement(n.Fragment,null,t)}},S=class{constructor(){this.render=async(e,t,r)=>{let o={...D,...t==null?void 0:t.components},i=w;return new Promise((u,p)=>{h(async()=>{const{MDXProvider:c}=await import("./index-ByTgGhYT.js");return{MDXProvider:c}},__vite__mapDeps([0,1,2,3,4,5,6,7]),import.meta.url).then(({MDXProvider:c})=>x(n.createElement(C,{showException:p,key:Math.random()},n.createElement(c,{components:o},n.createElement(i,{context:e,docsParameter:t}))),r)).then(()=>u())})},this.unmount=e=>{y(e)}}};export{S as DocsRenderer,D as defaultComponents};
