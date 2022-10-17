module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json'
  },
  extends: ['@gokarma/karma-social', 'airbnb-typescript', 'prettier'],
  rules: {
    // allow "_id" property
    'no-underscore-dangle': ['error', { allow: ['_id'] }],

    // turn it off for functions that don't use "this"
    'class-methods-use-this': 'off',

    // unlimited class
    'max-classes-per-file': 'off',

    // do not use comma end of the object
    '@typescript-eslint/comma-dangle': ['error', 'never'],

    // show error if there is semicolon
    '@typescript-eslint/semi': ['error', 'never']
  }
}
