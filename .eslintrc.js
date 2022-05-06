module.exports = {
  extends: [
    'eslint:recommended',
  ],
  env: {
    'browser' : true,
    'node'    : true,
    'commonjs': true,
    'jest'    : true,
    'es6'     : true,
  },
  rules: {
    'comma-dangle'           : ['error', 'always-multiline'],
    'semi'                   : ['error', 'never'],
    'arrow-parens'           : ['error', 'as-needed'],
    'object-curly-spacing'   : ['error', 'always'],
    'array-bracket-spacing'  : ['error', 'never'],
    'quotes'                 : ['error', 'single'],
    'no-multiple-empty-lines': ['error', { 'max': 50, 'maxEOF': 50 }],
    'eol-last'               : ['error', 'always'],
  },
  'parserOptions': {
    'sourceType': 'module',
  },
}
