/** @type { import('@storybook/html-vite').StorybookConfig } */
const config = {
  stories: [
    "../components/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../components/**/*.mdx",
    "../documentation/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../documentation/**/*.mdx",
  ],

  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-links",
    "@storybook/addon-a11y",
    'storybook-dark-mode',
    "@storybook/addon-docs"
  ],

  framework: {
    name: "@storybook/html-vite",
  },

  docs: {}
};
export default config;
