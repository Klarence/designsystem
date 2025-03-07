import { SlHeader } from "./SlHeader.js";

export default {
    title: "Templates/SlHeader",
    component: SlHeader,
    argTypes: {
        title: {
            control: "text",
            description: "Title of site",
        },
        btnlabel: {
            control: "text",
            description: "Search button label for screen reader users.",
        },
        contacturl: {
            control: "text",
            description: "Contact page URL\n",
        },
        contactlabel: {
            control: "text",
            description: "Label of the link to the contact page",
        },
        action: {
            control: "text",
            description: "Search Destination URL.",
        },
        name: {
            control: "text",
            description: "Name of input for search.",
        },
        query: {
            control: "text",
            description: "Initial value of search field.",
        },
        placeholder: {
            control: "text",
            description: "Placeholder for search field.",
        }
    },
    render: ({ ...args }) => {
        return `
          <sl-header
            ${args.title ? `title="${args.title}"` : ''}
            ${args.btnlabel ? `btnlabel="${args.btnlabel}"` : ''}
            ${args.contacturl ? `contacturl="${args.contacturl}"` : ''}
            ${args.contactlabel ? `contactlabel="${args.contactlabel}"` : ''}
            ${args.action ? `action="${args.action}"` : ''}
            ${args.languageurl ? `languageurl="${args.languageurl}"` : ''}
            ${args.name ? `name="${args.name}"` : ''}
            ${args.query ? `query="${args.query}"` : ''}
            ${args.placeholder ? `query="${args.placeholder}"` : ''}
          >
          </sl-header>`;
      },
};

export const Default = {
    args: {
        title: "My site",
        languageurl: "https://www.klarence.net",
        name: "search",
        query: "",
    },
};

export const WithReviews = {
    args: {
        title: "Review Site",
        placeholder: "Search for ...",
        btnlabel: "Search",
        variant: "dark",
        name: "search-alert",
        query: "",
    },
    decorators: [
        (Story) => `
            ${Story()}
            <sl-alert 
                variant="neutral" 
                closable open>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. <a href='#'>Cras venenatis euismod</a> malesuada.</p>
            </sl-alert>
        `,
    ]
};

// WithAlert.storyName = "With an Alert";

export const WithNavigation = {
    args: {
        title: "My site with navigation",
        placeholder: "Search for ...",
        btnlabel: "Search",
        variant: "dark",
        name: "search-navigation",
        query: "",
    },
    decorators: [
        (Story) => `
            ${Story()}
            <sl-navigation>
                <ul>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a>Content</a>
                </li>
                <li>
                    <a href="#">Design</a>
                </li>
                <li>
                    <a href="#">Resources</a>
                    <button>
                    <span class="lnr lnr-chevron-down"></span>
                    </button>
                    <ul>
                    <li><a href="#">Articles</a></li>
                    <li><a href="#">Videos</a></li>
                    </ul>
                </li>
                </ul>
            </sl-navigation>
            <sl-alert 
                variant="neutral" 
                closable open >
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. <a href='#'>Cras venenatis euismod</a> malesuada.</p>
            </sl-alert>
        `,
    ]
};

WithNavigation.storyName = "With navigation";
