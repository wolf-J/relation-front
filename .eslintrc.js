module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "vue/no-parsing-error": [2, { "x-invalid-end-tag": false }],
    'vue/no-parsing-error': 'off',
    'vue/no-unused-vars': 'warning'
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
