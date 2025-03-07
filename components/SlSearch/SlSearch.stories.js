import { SlSearch } from "./SlSearch.js";

export default {
  title: "Components/SlSearch",
  component: SlSearch,
  argTypes: {
    placeholder: {
      control: "text",
      description: "Placeholder text for your search.",
    },
    label: {
      control: "text",
      description: "Search field label for screen reader users.",
    },
    btnlabel: {
      control: "text",
      description: "Search button label for screen reader users.",
    },
    variant: {
      control: "select",
      options: ["light", "dark"],
      description: "Component variant.",
    },
    action: {
      control: "text",
      description: "Search destination URL.",
    },
    name: {
      control: "text",
      description: "Name of the entry for the search.",
    },
    value: {
      control: "text",
      description: "Initial value of search field",
    }
  },
  render: ({ ...args }) => {
    return generateSlSearch(args);
  },
};

function generateSlSearch(args) {
    return `
      <sl-search
        ${args.placeholder ? `placeholder="${args.placeholder}"` : ''}
        ${args.label ? `label="${args.label}"` : ''}
        ${args.variant ? `variant="${args.variant}"` : ''}
        ${args.btnlabel ? `btnlabel="${args.btnlabel}"` : ''}
        ${args.action ? `action="${args.action}"` : ''}
        ${args.name ? `name="${args.name}"` : ''}
        ${args.value ? `value="${args.value}"` : ''}
      >
      </sl-search>
    `;  
}

export const Default = {
  args: {
    placeholder: "Search this site",
    label: "Search",
    name: "search",
    value: "",
  },
};

export const Header = {
  args: {
    placeholder: "Search a product",
    btnlabel: "Search",
    variant: "dark",
    name: "header-search",
    value: "Initial Value",
  },
  decorators: [
    (Story) => `
      <div class="bg-blue-piv p-4">
        ${Story()}
      </div>
    `,
  ]
};
Header.storyName = "Search in the Header component";
