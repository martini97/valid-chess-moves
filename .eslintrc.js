module.exports = {
  extends: "airbnb",
  env: {
    jest: true,
  },
  rules: {
    'no-plusplus': ['off'],
  },
  settings: {
    "import/resolver": "babel-plugin-root-import",
  },
};
