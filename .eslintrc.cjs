/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  env: {
    es2022: true,
  },
  extends: ["plugin:vue/vue3-essential", "eslint:recommended", "prettier"],
};
