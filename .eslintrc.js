module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'vue/multi-word-component-names': 'off'
  }
}
