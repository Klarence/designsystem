import SlButton from './SlButton.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';

// <sl-button> is ready to use!

export default {
    title: "Components/SlButton",
    component:
    SlButton,
    argTypes:
        {
            variant: {
                options: ['default', 'primary', 'success', 'neutral', 'warning', 'danger', 'text'],
                control: {type: 'radio'},
            },
            size: {
                options: ['small', 'medium', 'large'],
                control: {type: 'radio'},
            },
            text: {
                // options: ['http://klarence.net'],
                control: "text",
                // defaultValue: "Button",
            },
            href: {
                options: ['https://klarence.net'],
                control: {type: 'text'},
            },
            caret: {type: 'boolean'},
            circle: {type: 'boolean'},
            disabled: {
                name: "disabled",
                control: "boolean"
            },
            loading: {type: 'boolean'},
            outline: {type: 'boolean'},
            pill: {type: 'boolean'},
        }
    ,
    render: ({...args}) => {
        return `

<sl-button variant="${args.variant ? args.variant : 'primary'}" 
size="${args.size ? args.size : 'medium'}"
${args.caret ? 'caret' : ''}
${args.circle ? 'circle' : ''}
${args.loading ? 'loading' : ''}
${args.outline ? 'outline' : ''}
${args.pill ? 'pill' : ''}
${args.disabled ? 'disabled' : ''}>
<!--  <sl-icon slot="icon" ></sl-icon>-->
  ${args.text ? args.text : 'Button'}
</sl-button>

    `;
    },
};

export const Default = {
    args: {
        variant: "default",
        size: "medium",
    }
    ,
    decorators: [
        (Story) => Story()
    ]
};

export const Primary = {
    args: {
        variant: "primary",
        size: "medium",
    }
    ,
    decorators: [
        (Story) => Story()
    ]
};

export const Success = {
    args: {
        variant: "success",
        size: "medium",
    }
    ,
    decorators: [
        (Story) => Story(),
    ]
};

export const Neutral = {
    args: {
        variant: "neutral",
        size: "medium",
    }
    ,
    decorators: [
        (Story) => Story(),
    ]
};

export const Warning = {
    args: {
        variant: "warning",
        size: "medium",
    }
    ,
    decorators: [
        (Story) => Story(),
    ]
};


export const Danger = {
    args: {
        variant: "danger",
        size: "medium",
    }
    ,
    decorators: [
        (Story) => Story(),
    ]
};

export const Text = {
    args: {
        variant: "text",
        size: "medium",
    }
    ,
    decorators: [
        (Story) => Story(),
    ]
};

export const PrimaryDisabled = {
    args: {
        variant: "primary",
        size: "medium",
        disabled: true,
    }
    ,
    decorators: [
        (Story) => Story(),
    ]
};

export const PrimaryLink = {
    args: {
        variant: "primary",
        size: "medium",
        href: true,
    }
    ,
    decorators: [
        (Story) => Story(),
    ]
};