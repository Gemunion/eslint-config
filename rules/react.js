module.exports = {
  env: {
    browser: true,
  },
  extends: ["plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react", "react-hooks"],
  rules: {
    "react/display-name": "off",
    "react/jsx-closing-bracket-location": ["warn", "line-aligned"],
    "react/sort-default-props": [
      "error",
      {
        ignoreCase: true,
      },
    ],
    "react/jsx-tag-spacing": [
      "error",
      {
        afterOpening: "never",
        beforeClosing: "allow",
        beforeSelfClosing: "always",
        closingSlash: "never",
      },
    ],
    "react/jsx-wrap-multilines": "error",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
  },
  settings: {
    linkComponents: [
      {
        linkAttribute: "to",
        name: "Link",
      },
    ],
    react: {
      pragma: "React",
      version: "detect",
    },
  },
};
