import '../styles/globals.css';
import { themes } from '@storybook/theming';

export const parameters = {
    darkMode: {
        // Override the default dark theme
        dark: { ...themes.dark, appBg: 'black' },
        // Override the default light theme
        light: { ...themes.normal, appBg: 'red' }
    }
};

/** @type { import('@storybook/html').Preview } */
const preview = {
    parameters: {
        options: {
            storySort: {
                includeNames: true,
                order: [
                    'Introduction',
                    'Design Tokens',
                    'Components',
                    [
                        '*',
                        [
                            'Docs',
                            '*'
                        ],
                    ],
                    'Forms',
                    'Templates',
                    [
                        '*',
                        'QcHeader',
                        [
                            'Docs',
                            '*'
                        ],
                        'SlFooter',
                        [
                            'Docs',
                            '*'
                        ]
                    ],
                    '*'
                ],
            },
        },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
};

export default preview;