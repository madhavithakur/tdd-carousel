module.exports = {
    plugins: ['react'],
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    env: {
        node: true,
    },
    rules: {
        quotes: ['error', 'single', { avoidEscape: true}],
        'comma-dangle': ['error', 'always-multiline'],
    },
    settings: {
        react: {
          version: '18.2.0', 
        },
      }, 
}