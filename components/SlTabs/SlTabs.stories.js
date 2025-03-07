import { SlTabs } from "./SlTabs.js";

export default {
  title: "Components/SlTabs",
  component: SlTabs,
  argTypes: {},
  render: ({ ...args }) => {
    return generateSlSearch(args);
  },
};

function generateSlSearch(args) {
    return `
<!--<style>-->
<!--  sl-tab {-->
<!--    border: 1px solid black;-->
<!--    padding: 20px;-->
<!--  }-->
<!--  sl-panel {-->
<!--    padding: 20px;-->
<!--    background-color: lightgray;-->
<!--  }-->
<!--  sl-tab[selected] {-->
<!--    background-color: bisque;-->
<!--  }-->
<!--  -->
<!--  sl-tabs:not(:defined),-->
<!--  sl-tab:not(:defined),-->
<!--  sl-panel:not(:defined) {-->
<!--    display: block;-->
<!--  }-->
<!--</style>-->

<sl-tabs>
  
  ${args.tab1 ? `<sl-tab role="heading" slot="tab">${args.tab1}</sl-tab>` : ''}
  ${args.content1 ? `<sl-panel role="region" slot="panel">${args.content1}</sl-panel>` : ''}
   ${args.tab2 ? `<sl-tab role="heading" slot="tab">${args.tab2}</sl-tab>` : ''}
  ${args.content2 ? `<sl-panel role="region" slot="panel">${args.content2}</sl-panel>` : ''}
   ${args.tab3 ? `<sl-tab role="heading" slot="tab">${args.tab3}</sl-tab>` : ''}
  ${args.content3 ? `<sl-panel role="region" slot="panel">${args.content3}</sl-panel>` : ''}
</sl-tabs>
    `;  
}

export const Default = {
  args: {
    tab1: "Tab 1",
    content1: "Content for Tab 1",
    tab2: "Tab 2",
    content2: "Content for Tab 2",
    tab3: "Tab 3",
    content3: "Content for Tab 3",
  },
};