import SlAlert from './SlAlert';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';

// <sl-alert> is ready to use!

export default {
    title: "Components/SlAlert",
    component:
    SlAlert,
    argTypes:
        {
            variant: {
                options: ['primary', 'success', 'warning', 'danger', 'neutral'],
                control: {type: 'radio'},
            },
            iconName: {
                options: ['info-circle', 'check2-circle', 'gear', 'exclamation-triangle', 'exclamation-octagon'],
                control: {type: 'radio'},
            },
            closable: {type: 'boolean'},
            open: {type: 'boolean'},
        },
    render: ({...args}) => {
        return `

<sl-alert variant="${args.variant ? args.variant : 'primary'}" 
${args.closable ? 'closable' : ''}
${!args.open ? '' : 'open'}>
  <sl-icon slot="icon" name="${args.iconName ? args.iconName : 'info-circle'}"></sl-icon>
  <strong>This is super informative</strong><br />
  You can tell by how pretty the alert is.
</sl-alert>

    `;
    },
};

export const Primary = {
    args: {
        variant: "primary",
        iconName: "info-circle",
        open: true,
        closable: true,
    },
    decorators: [
        (Story) => Story()
    ]
};

export const Success = {
    args: {
        variant: "success",
        iconName: "check2-circle",
        open: true,
    },
    decorators: [
        (Story) => Story(),
    ]
};

export const Neutral = {
    args: {
        variant: "neutral",
        iconName: "gear",
        open: true,
    },
    decorators: [
        (Story) => Story(),
    ]
};

export const Warning = {
    args: {
        variant: "gear",
        iconName: "exclamation-triangle",
        open: true,
    },
    decorators: [
        (Story) => Story(),
    ]
};


export const Danger = {
    args: {
        variant: "gear",
        iconName: "exclamation-octagon",
        open: true,
    },
    decorators: [
        (Story) => Story(),
    ]
};