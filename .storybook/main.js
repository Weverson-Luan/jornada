module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    {
      name: '../preset.js',
      options: {
        babelPlugins: [
          '@babel/plugin-proposal-export-namespace-from',
        ],
      },
    },
    '@storybook/addon-essentials',

  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: { fastRefresh: true },
  },
  core: {
    builder: "@storybook/builder-webpack5",
  },
  typescript: {
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldRemoveUndefinedFromOptional: true,
      propFilter(prop) {
        if (prop.parent) {
          return !prop.parent.fileName.includes("@types/react-native");
        }

        return true;
      },
      tsconfigPath: "../tsconfig.json",
    },
  },
  docs: {
    autodocs: true,
  },
};
