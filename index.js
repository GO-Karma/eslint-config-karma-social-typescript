module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  extends: ["@gokarma/eslint-config-karma-social", "airbnb-typescript"],
  rules: {
    // allow "_id" property
    "no-underscore-dangle": ["error", { allow: ["_id"] }],

    // turn it off for functions that don't use "this"
    "class-methods-use-this": "off",

    // unlimited class
    "max-classes-per-file": "off",
  },
};
