/** @type { import('@storybook/vue-webpack5').StorybookConfig } */
const config = {
  stories: ["../packages/**/stories/*.mdx", "../packages/**/stories/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/vue-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
