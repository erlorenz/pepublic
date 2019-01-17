module.exports = {
  root: true,
  env: {
    'browser': true,
    'jest': true,
    'es6': true,
    'node': true,
  },
  extends: [
    'react-app',
    'plugin:prettier/recommended',
    'prettier/react'
  ],
  rules: {
    'prettier/prettier': ['error', {
      'singleQuote': true,
      'trailingComma': 'all',
      'jsxBracketSameLine': true,
    }],
  },
  parserOptions: {
    "ecmaVersion": 2018,
    "sourceType": "module"
},
}