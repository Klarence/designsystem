class m extends HTMLElement{static get observedAttributes(){return["titre"]}attributeChangedCallback(i,a,e){a!==e&&this.render()}constructor(){super(),this.render()}connectedCallback(){this.render(),this.setupAnchors()}get template(){return`
            <div class="tdm-container">
                <h2 class="h5">${this.titre}</h2>
                <ul class="tdm-list">
                    ${this.generateAnchors()}
                </ul>
            </div>
        `}render(){this.innerHTML=this.template}get titre(){return this.getAttribute("titre")||"Table des matières"}generateAnchors(){const i=[];return document.querySelectorAll(".tdm").forEach((e,l)=>{const s=e.getAttribute("tdm-titre")||e.textContent.trim(),n=`tdm-anchor-${l}`;e.id=n,i.push(`<li><a href="#${n}" class="tdm-link">${s}</a></li>`)}),i.join("")}setupAnchors(){this.querySelectorAll(".tdm-link").forEach(a=>{a.addEventListener("click",e=>{e.preventDefault();const l=a.getAttribute("href").substring(1),s=document.getElementById(l);s&&s.scrollIntoView({behavior:"smooth"})})})}}customElements.get("qc-tdm")||customElements.define("qc-tdm",m);const p={title:"Composants/QcTdm",component:m,argTypes:{titre:{control:"text",description:"Titre de la table des matières"}},render:({...u})=>`
  <qc-tdm titre="${u.titre}"></qc-tdm>
    `},t={args:{titre:"Table des matières"},decorators:[u=>`
<qc-up></qc-up>
<div class="container">
 <qc-tdm titre="Sommaire"></qc-tdm>

  <h2 class="tdm" tdm-titre="Introduction">Introduction</h2>
  <p>Ultricies, natoque velit adipiscing elit cubilia habitant fusce sociis tellus dis erat inceptos. Ultricies gravida duis sagittis habitasse venenatis libero malesuada praesent augue consectetur ac. Lobortis aliquam tempor congue mus aenean netus mattis phasellus nulla odio. Ac congue sociis etiam morbi. Iaculis vel, velit vulputate ante. Massa augue sollicitudin eros. Proin aptent platea eros at consequat nec pulvinar purus dis. Convallis; ridiculus a rutrum neque. Magnis lorem elit phasellus maecenas porttitor porttitor magna risus nec. Mattis at fusce consectetur. Interdum ullamcorper vel fusce luctus augue. Erat in nam senectus porta porta ligula mauris blandit turpis. Nisi etiam sem habitasse ligula nibh dignissim ullamcorper amet luctus. Etiam venenatis ligula donec et vulputate eget. Magna torquent.</p>
  <p>Ultricies, natoque velit adipiscing elit cubilia habitant fusce sociis tellus dis erat inceptos. Ultricies gravida duis sagittis habitasse venenatis libero malesuada praesent augue consectetur ac. Lobortis aliquam tempor congue mus aenean netus mattis phasellus nulla odio. Ac congue sociis etiam morbi. Iaculis vel, velit vulputate ante. Massa augue sollicitudin eros. Proin aptent platea eros at consequat nec pulvinar purus dis. Convallis; ridiculus a rutrum neque. Magnis lorem elit phasellus maecenas porttitor porttitor magna risus nec. Mattis at fusce consectetur. Interdum ullamcorper vel fusce luctus augue. Erat in nam senectus porta porta ligula mauris blandit turpis. Nisi etiam sem habitasse ligula nibh dignissim ullamcorper amet luctus. Etiam venenatis ligula donec et vulputate eget. Magna torquent.</p>
  <p>Ultricies, natoque velit adipiscing elit cubilia habitant fusce sociis tellus dis erat inceptos. Ultricies gravida duis sagittis habitasse venenatis libero malesuada praesent augue consectetur ac. Lobortis aliquam tempor congue mus aenean netus mattis phasellus nulla odio. Ac congue sociis etiam morbi. Iaculis vel, velit vulputate ante. Massa augue sollicitudin eros. Proin aptent platea eros at consequat nec pulvinar purus dis. Convallis; ridiculus a rutrum neque. Magnis lorem elit phasellus maecenas porttitor porttitor magna risus nec. Mattis at fusce consectetur. Interdum ullamcorper vel fusce luctus augue. Erat in nam senectus porta porta ligula mauris blandit turpis. Nisi etiam sem habitasse ligula nibh dignissim ullamcorper amet luctus. Etiam venenatis ligula donec et vulputate eget. Magna torquent.</p>

  <h2 class="tdm" tdm-titre="Méthodologie">Méthodologie</h2>
  <p>Ultricies, natoque velit adipiscing elit cubilia habitant fusce sociis tellus dis erat inceptos. Ultricies gravida duis sagittis habitasse venenatis libero malesuada praesent augue consectetur ac. Lobortis aliquam tempor congue mus aenean netus mattis phasellus nulla odio. Ac congue sociis etiam morbi. Iaculis vel, velit vulputate ante. Massa augue sollicitudin eros. Proin aptent platea eros at consequat nec pulvinar purus dis. Convallis; ridiculus a rutrum neque. Magnis lorem elit phasellus maecenas porttitor porttitor magna risus nec. Mattis at fusce consectetur. Interdum ullamcorper vel fusce luctus augue. Erat in nam senectus porta porta ligula mauris blandit turpis. Nisi etiam sem habitasse ligula nibh dignissim ullamcorper amet luctus. Etiam venenatis ligula donec et vulputate eget. Magna torquent.</p>
  <p>Ultricies, natoque velit adipiscing elit cubilia habitant fusce sociis tellus dis erat inceptos. Ultricies gravida duis sagittis habitasse venenatis libero malesuada praesent augue consectetur ac. Lobortis aliquam tempor congue mus aenean netus mattis phasellus nulla odio. Ac congue sociis etiam morbi. Iaculis vel, velit vulputate ante. Massa augue sollicitudin eros. Proin aptent platea eros at consequat nec pulvinar purus dis. Convallis; ridiculus a rutrum neque. Magnis lorem elit phasellus maecenas porttitor porttitor magna risus nec. Mattis at fusce consectetur. Interdum ullamcorper vel fusce luctus augue. Erat in nam senectus porta porta ligula mauris blandit turpis. Nisi etiam sem habitasse ligula nibh dignissim ullamcorper amet luctus. Etiam venenatis ligula donec et vulputate eget. Magna torquent.</p>
  <p>Ultricies, natoque velit adipiscing elit cubilia habitant fusce sociis tellus dis erat inceptos. Ultricies gravida duis sagittis habitasse venenatis libero malesuada praesent augue consectetur ac. Lobortis aliquam tempor congue mus aenean netus mattis phasellus nulla odio. Ac congue sociis etiam morbi. Iaculis vel, velit vulputate ante. Massa augue sollicitudin eros. Proin aptent platea eros at consequat nec pulvinar purus dis. Convallis; ridiculus a rutrum neque. Magnis lorem elit phasellus maecenas porttitor porttitor magna risus nec. Mattis at fusce consectetur. Interdum ullamcorper vel fusce luctus augue. Erat in nam senectus porta porta ligula mauris blandit turpis. Nisi etiam sem habitasse ligula nibh dignissim ullamcorper amet luctus. Etiam venenatis ligula donec et vulputate eget. Magna torquent.</p>

  <h2 class="tdm" tdm-titre="Résultats">Résultats</h2>
  <p>Ultricies, natoque velit adipiscing elit cubilia habitant fusce sociis tellus dis erat inceptos. Ultricies gravida duis sagittis habitasse venenatis libero malesuada praesent augue consectetur ac. Lobortis aliquam tempor congue mus aenean netus mattis phasellus nulla odio. Ac congue sociis etiam morbi. Iaculis vel, velit vulputate ante. Massa augue sollicitudin eros. Proin aptent platea eros at consequat nec pulvinar purus dis. Convallis; ridiculus a rutrum neque. Magnis lorem elit phasellus maecenas porttitor porttitor magna risus nec. Mattis at fusce consectetur. Interdum ullamcorper vel fusce luctus augue. Erat in nam senectus porta porta ligula mauris blandit turpis. Nisi etiam sem habitasse ligula nibh dignissim ullamcorper amet luctus. Etiam venenatis ligula donec et vulputate eget. Magna torquent.</p>
  <p>Ultricies, natoque velit adipiscing elit cubilia habitant fusce sociis tellus dis erat inceptos. Ultricies gravida duis sagittis habitasse venenatis libero malesuada praesent augue consectetur ac. Lobortis aliquam tempor congue mus aenean netus mattis phasellus nulla odio. Ac congue sociis etiam morbi. Iaculis vel, velit vulputate ante. Massa augue sollicitudin eros. Proin aptent platea eros at consequat nec pulvinar purus dis. Convallis; ridiculus a rutrum neque. Magnis lorem elit phasellus maecenas porttitor porttitor magna risus nec. Mattis at fusce consectetur. Interdum ullamcorper vel fusce luctus augue. Erat in nam senectus porta porta ligula mauris blandit turpis. Nisi etiam sem habitasse ligula nibh dignissim ullamcorper amet luctus. Etiam venenatis ligula donec et vulputate eget. Magna torquent.</p>
  <p>Ultricies, natoque velit adipiscing elit cubilia habitant fusce sociis tellus dis erat inceptos. Ultricies gravida duis sagittis habitasse venenatis libero malesuada praesent augue consectetur ac. Lobortis aliquam tempor congue mus aenean netus mattis phasellus nulla odio. Ac congue sociis etiam morbi. Iaculis vel, velit vulputate ante. Massa augue sollicitudin eros. Proin aptent platea eros at consequat nec pulvinar purus dis. Convallis; ridiculus a rutrum neque. Magnis lorem elit phasellus maecenas porttitor porttitor magna risus nec. Mattis at fusce consectetur. Interdum ullamcorper vel fusce luctus augue. Erat in nam senectus porta porta ligula mauris blandit turpis. Nisi etiam sem habitasse ligula nibh dignissim ullamcorper amet luctus. Etiam venenatis ligula donec et vulputate eget. Magna torquent.</p>


</div>
    `]};t.storyName="Avec bouton de défilement";var r,o,c;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    titre: 'Table des matières'
  },
  decorators: [Story => \`
<qc-up></qc-up>
<div class="container">
 <qc-tdm titre="Sommaire"></qc-tdm>

  <h2 class="tdm" tdm-titre="Introduction">Introduction</h2>
  <p>Ultricies, natoque velit adipiscing elit cubilia habitant fusce sociis tellus dis erat inceptos. Ultricies gravida duis sagittis habitasse venenatis libero malesuada praesent augue consectetur ac. Lobortis aliquam tempor congue mus aenean netus mattis phasellus nulla odio. Ac congue sociis etiam morbi. Iaculis vel, velit vulputate ante. Massa augue sollicitudin eros. Proin aptent platea eros at consequat nec pulvinar purus dis. Convallis; ridiculus a rutrum neque. Magnis lorem elit phasellus maecenas porttitor porttitor magna risus nec. Mattis at fusce consectetur. Interdum ullamcorper vel fusce luctus augue. Erat in nam senectus porta porta ligula mauris blandit turpis. Nisi etiam sem habitasse ligula nibh dignissim ullamcorper amet luctus. Etiam venenatis ligula donec et vulputate eget. Magna torquent.</p>
  <p>Ultricies, natoque velit adipiscing elit cubilia habitant fusce sociis tellus dis erat inceptos. Ultricies gravida duis sagittis habitasse venenatis libero malesuada praesent augue consectetur ac. Lobortis aliquam tempor congue mus aenean netus mattis phasellus nulla odio. Ac congue sociis etiam morbi. Iaculis vel, velit vulputate ante. Massa augue sollicitudin eros. Proin aptent platea eros at consequat nec pulvinar purus dis. Convallis; ridiculus a rutrum neque. Magnis lorem elit phasellus maecenas porttitor porttitor magna risus nec. Mattis at fusce consectetur. Interdum ullamcorper vel fusce luctus augue. Erat in nam senectus porta porta ligula mauris blandit turpis. Nisi etiam sem habitasse ligula nibh dignissim ullamcorper amet luctus. Etiam venenatis ligula donec et vulputate eget. Magna torquent.</p>
  <p>Ultricies, natoque velit adipiscing elit cubilia habitant fusce sociis tellus dis erat inceptos. Ultricies gravida duis sagittis habitasse venenatis libero malesuada praesent augue consectetur ac. Lobortis aliquam tempor congue mus aenean netus mattis phasellus nulla odio. Ac congue sociis etiam morbi. Iaculis vel, velit vulputate ante. Massa augue sollicitudin eros. Proin aptent platea eros at consequat nec pulvinar purus dis. Convallis; ridiculus a rutrum neque. Magnis lorem elit phasellus maecenas porttitor porttitor magna risus nec. Mattis at fusce consectetur. Interdum ullamcorper vel fusce luctus augue. Erat in nam senectus porta porta ligula mauris blandit turpis. Nisi etiam sem habitasse ligula nibh dignissim ullamcorper amet luctus. Etiam venenatis ligula donec et vulputate eget. Magna torquent.</p>

  <h2 class="tdm" tdm-titre="Méthodologie">Méthodologie</h2>
  <p>Ultricies, natoque velit adipiscing elit cubilia habitant fusce sociis tellus dis erat inceptos. Ultricies gravida duis sagittis habitasse venenatis libero malesuada praesent augue consectetur ac. Lobortis aliquam tempor congue mus aenean netus mattis phasellus nulla odio. Ac congue sociis etiam morbi. Iaculis vel, velit vulputate ante. Massa augue sollicitudin eros. Proin aptent platea eros at consequat nec pulvinar purus dis. Convallis; ridiculus a rutrum neque. Magnis lorem elit phasellus maecenas porttitor porttitor magna risus nec. Mattis at fusce consectetur. Interdum ullamcorper vel fusce luctus augue. Erat in nam senectus porta porta ligula mauris blandit turpis. Nisi etiam sem habitasse ligula nibh dignissim ullamcorper amet luctus. Etiam venenatis ligula donec et vulputate eget. Magna torquent.</p>
  <p>Ultricies, natoque velit adipiscing elit cubilia habitant fusce sociis tellus dis erat inceptos. Ultricies gravida duis sagittis habitasse venenatis libero malesuada praesent augue consectetur ac. Lobortis aliquam tempor congue mus aenean netus mattis phasellus nulla odio. Ac congue sociis etiam morbi. Iaculis vel, velit vulputate ante. Massa augue sollicitudin eros. Proin aptent platea eros at consequat nec pulvinar purus dis. Convallis; ridiculus a rutrum neque. Magnis lorem elit phasellus maecenas porttitor porttitor magna risus nec. Mattis at fusce consectetur. Interdum ullamcorper vel fusce luctus augue. Erat in nam senectus porta porta ligula mauris blandit turpis. Nisi etiam sem habitasse ligula nibh dignissim ullamcorper amet luctus. Etiam venenatis ligula donec et vulputate eget. Magna torquent.</p>
  <p>Ultricies, natoque velit adipiscing elit cubilia habitant fusce sociis tellus dis erat inceptos. Ultricies gravida duis sagittis habitasse venenatis libero malesuada praesent augue consectetur ac. Lobortis aliquam tempor congue mus aenean netus mattis phasellus nulla odio. Ac congue sociis etiam morbi. Iaculis vel, velit vulputate ante. Massa augue sollicitudin eros. Proin aptent platea eros at consequat nec pulvinar purus dis. Convallis; ridiculus a rutrum neque. Magnis lorem elit phasellus maecenas porttitor porttitor magna risus nec. Mattis at fusce consectetur. Interdum ullamcorper vel fusce luctus augue. Erat in nam senectus porta porta ligula mauris blandit turpis. Nisi etiam sem habitasse ligula nibh dignissim ullamcorper amet luctus. Etiam venenatis ligula donec et vulputate eget. Magna torquent.</p>

  <h2 class="tdm" tdm-titre="Résultats">Résultats</h2>
  <p>Ultricies, natoque velit adipiscing elit cubilia habitant fusce sociis tellus dis erat inceptos. Ultricies gravida duis sagittis habitasse venenatis libero malesuada praesent augue consectetur ac. Lobortis aliquam tempor congue mus aenean netus mattis phasellus nulla odio. Ac congue sociis etiam morbi. Iaculis vel, velit vulputate ante. Massa augue sollicitudin eros. Proin aptent platea eros at consequat nec pulvinar purus dis. Convallis; ridiculus a rutrum neque. Magnis lorem elit phasellus maecenas porttitor porttitor magna risus nec. Mattis at fusce consectetur. Interdum ullamcorper vel fusce luctus augue. Erat in nam senectus porta porta ligula mauris blandit turpis. Nisi etiam sem habitasse ligula nibh dignissim ullamcorper amet luctus. Etiam venenatis ligula donec et vulputate eget. Magna torquent.</p>
  <p>Ultricies, natoque velit adipiscing elit cubilia habitant fusce sociis tellus dis erat inceptos. Ultricies gravida duis sagittis habitasse venenatis libero malesuada praesent augue consectetur ac. Lobortis aliquam tempor congue mus aenean netus mattis phasellus nulla odio. Ac congue sociis etiam morbi. Iaculis vel, velit vulputate ante. Massa augue sollicitudin eros. Proin aptent platea eros at consequat nec pulvinar purus dis. Convallis; ridiculus a rutrum neque. Magnis lorem elit phasellus maecenas porttitor porttitor magna risus nec. Mattis at fusce consectetur. Interdum ullamcorper vel fusce luctus augue. Erat in nam senectus porta porta ligula mauris blandit turpis. Nisi etiam sem habitasse ligula nibh dignissim ullamcorper amet luctus. Etiam venenatis ligula donec et vulputate eget. Magna torquent.</p>
  <p>Ultricies, natoque velit adipiscing elit cubilia habitant fusce sociis tellus dis erat inceptos. Ultricies gravida duis sagittis habitasse venenatis libero malesuada praesent augue consectetur ac. Lobortis aliquam tempor congue mus aenean netus mattis phasellus nulla odio. Ac congue sociis etiam morbi. Iaculis vel, velit vulputate ante. Massa augue sollicitudin eros. Proin aptent platea eros at consequat nec pulvinar purus dis. Convallis; ridiculus a rutrum neque. Magnis lorem elit phasellus maecenas porttitor porttitor magna risus nec. Mattis at fusce consectetur. Interdum ullamcorper vel fusce luctus augue. Erat in nam senectus porta porta ligula mauris blandit turpis. Nisi etiam sem habitasse ligula nibh dignissim ullamcorper amet luctus. Etiam venenatis ligula donec et vulputate eget. Magna torquent.</p>


</div>
    \`]
}`,...(c=(o=t.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};const d=["AvecBoutonUp"],g=Object.freeze(Object.defineProperty({__proto__:null,AvecBoutonUp:t,__namedExportsOrder:d,default:p},Symbol.toStringTag,{value:"Module"}));export{g as T};
