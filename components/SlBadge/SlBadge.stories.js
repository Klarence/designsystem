import SlBadge from './SlBadge.js';

    // <sl-badge> is ready to use!

export default {
title: "Components/SlBadge",
    component
:
SlBadge,
    argTypes
:
{
    variant: {
        options: ['primary', 'success', 'warning', 'danger', 'neutral'],
        control: { type: 'radio' },
    }
}
,
render: ({...args}) => {
    return `

<sl-badge variant="${args.variant ? args.variant : 'primary'}">${args.variant ? args.variant : 'primary'}</sl-badge>

    `;
},
};


export const Primary = {
    args: {
        variant: "primary",
    }
    ,
    decorators: [
        (Story) => Story()
    ]
};

export const Success = {
    args: {
        variant: "success",
    }
    ,
    decorators: [
        (Story) => Story(),
    ]
};

export const Neutral = {
    args: {
        variant: "neutral",
    }
    ,
    decorators: [
        (Story) => Story(),
    ]
};

export const Warning = {
    args: {
        variant: "gear",
    }
    ,
    decorators: [
        (Story) => Story(),
    ]
};


export const Danger = {
    args: {
        variant: "gear",
    }
    ,
    decorators: [
        (Story) => Story(),
    ]
};