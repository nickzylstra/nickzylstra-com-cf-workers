const path = require('path');

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:jest/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks',
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.mjs', '.js', '.jsx'],
      },
    },
  },
  rules: {
    'jsx-a11y/label-has-associated-control': 0,
    'react/prop-types': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'import/extensions': ["error", "ignorePackages", {
      "js": "never",
      "jsx": "never",
      "mjs": "never"
    }],
  },
};
