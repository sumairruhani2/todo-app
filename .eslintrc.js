module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@stylistic/js'],
  rules: {
    '@stylistic/js/indent': ['warn', 2],
    '@stylistic/js/semi': 'warn',
    '@stylistic/js/comma-dangle': ['warn', 'always-multiline'],
    'no-unused-vars': 'warn',
    'no-console': 'warn',
    'no-alert': 'warn',
  },
};
