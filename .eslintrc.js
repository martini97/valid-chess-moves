module.exports = {
  extends: "airbnb",
  parser: 'babel-eslint',
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
