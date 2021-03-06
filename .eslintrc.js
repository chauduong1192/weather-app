module.exports = {
  extends: [
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/recommended",
    "plugin:prettier/recommended",
    "plugin:import/recommended",
  ],
  plugins: ["react", "@typescript-eslint", "jest", "prettier"],
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
    project: "./tsconfig.json",
  },
  rules: {
    "linebreak-style": "off",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
        printWidth: 80,
        semicolons: false,
      },
    ],
    "@typescript-eslint/no-explicit-any": "off",
    "import/no-named-as-default": 0,
    "@typescript-eslint/lines-between-class-members": 0,
    "@typescript-eslint/default-param-last": 0,
    "@typescript-eslint/no-shadow": 0,
  },
};
