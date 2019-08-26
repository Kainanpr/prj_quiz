module.exports = {
  root: true,
  extends: ["airbnb", "plugin:jsx-a11y/recommended"],
  plugins: ["jsx-a11y"],
  parser: "babel-eslint",
  rules: {
    "linebreak-style": 0,
    "react/state-in-constructor": 0,
    "react/destructuring-assignment": 0,
    "react/jsx-filename-extension": [1, { "extensions": [".js"] }],
    "react/jsx-one-expression-per-line": 0,
  },
};
