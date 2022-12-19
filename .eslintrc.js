module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'import', '@typescript-eslint', 'prettier'],
  rules: {
    'no-var': 'error',
    'no-multiple-empty-lines': 'error',
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
    'react/display-name': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/no-unknown-property': ['error', { ignore: ['css'] }],
  },
};
