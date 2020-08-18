module.exports = {
  extends: [
    "./ts",
    "../rules/react",
    "../rules/prettier-react",
  ].map(require.resolve),
  rules: {
    "react/prop-types": "off",
    "@typescript-eslint/unbound-method": "off",
  },
};
