module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: 'eslint:recommended',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    'no-var': 1,
    'prefer-const': 2,
    'no-console': 1,
    'no-dupe-args': 2,
    'no-unreachable': 2,
    'global-require': 2,
    'no-unused-vars': 2,
    camelcase: 2,
  },
};
