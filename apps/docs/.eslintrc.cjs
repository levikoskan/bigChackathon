// @ts-check

/** @type {import('eslint').Linter.Config} */
const config = {
  root: true,
  extends: [
    '@bigcommerce/catalyst/base',
    '@bigcommerce/catalyst/react',
    '@bigcommerce/catalyst/prettier',
    'plugin:storybook/recommended',
  ],
  // @todo fix import resolution for components tailwind.config.js
  ignorePatterns: ['storybook-static', 'tailwind.config.js'],
  rules: {
    '@typescript-eslint/naming-convention': 'off',
    'no-underscore-dangle': [
      'error',
      {
        allow: ['__typename'],
      },
    ],
  },
};

module.exports = config;
