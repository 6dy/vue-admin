module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
        es6: true,
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "prettier/prettier": "error",
        //强制不使用分号结尾
        semi: ['error', 'never'],
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
  }
}
