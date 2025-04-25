import { SlAccordion } from "./SlAccordion.js";

export default {
  title: "Components/SlAccordion",
  component: SlAccordion,
  argTypes: {},
  render: ({ ...args }) => {
    return generateSlSearch(args);
  },
};

function generateSlSearch(args) {
    return `

<style>
  
  sl-accordion-heading {
    background-color: white; /* Headings need a background color so they are not transparent. Otherwise the content will shine through during the animation. */
    border: 1px solid black;
  }
  sl-accordion-heading[expanded] {
    background-color: bisque;
  }
  sl-accordion-panel {
    padding: 20px;
    background-color: lightgray;
  }
</style>

<sl-accordion>
  
  ${args.tab1 ? `<sl-accordion-heading>${args.tab1}</sl-accordion-heading>` : ''}
  ${args.content1 ? `<sl-accordion-panel>${args.content1}</sl-accordion-panel>` : ''}
  ${args.tab2 ? `<sl-accordion-heading>${args.tab2}</sl-accordion-heading>` : ''}
  ${args.content2 ? `<sl-accordion-panel>${args.content2}</sl-accordion-panel>` : ''}
  ${args.tab3 ? `<sl-accordion-heading>${args.tab3}</sl-accordion-heading>` : ''}
  ${args.content3 ? `<sl-accordion-panel>${args.content3}</sl-accordion-panel>` : ''}
</sl-accordion>
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