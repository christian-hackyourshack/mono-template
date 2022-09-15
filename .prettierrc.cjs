module.exports = {
  printWidth: 100,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  useTabs: false,
  plugins: ['./node_modules/prettier-plugin-astro'],
  overrides: [
    {
      // Changesets run Prettier using our configuration, however it uses a very old version of Prettier that does
      // not support our plugin and it ends up doing more harm than good. As such, we'll disable our plugin for changelogs
      files: ['CHANGELOG.md'],
      options: {
        plugins: [],
      },
    },
    {
      files: ['**/*.astro'],
      options: {
        parser: 'astro',
      },
    },
  ],
};
