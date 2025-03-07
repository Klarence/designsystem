import SlBreadcrumb from './SlBreadcrumb';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';

    // <sl-breadcrumb> is ready to use!

export default {
title: "Components/SlBreadcrumb",
    component
:
SlBreadcrumb,
render: ({...args}) => {
    return `

<sl-breadcrumb>
  <span slot="separator">/</span>
  <sl-breadcrumb-item>First</sl-breadcrumb-item>
  <sl-breadcrumb-item>Second</sl-breadcrumb-item>
  <sl-breadcrumb-item>Third</sl-breadcrumb-item>
</sl-breadcrumb>
    `;
},
};

export const Primary = {
decorators: [
    (Story) => Story()
]

};