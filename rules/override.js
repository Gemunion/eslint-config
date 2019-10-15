module.exports = {
  rules: {
    "max-len": ["error", {code: 120, ignoreRegExpLiterals: true, ignoreTemplateLiterals: true}],
    "arrow-parens": ["error", "as-needed"],
    "comma-dangle": [2, "always-multiline"],
    indent: [
      "error",
      2,
      {
        MemberExpression: 1,
        SwitchCase: 1,
      },
    ],
    "linebreak-style": ["error", "unix"],
    "multiline-ternary": ["error", "always-multiline"],
    "no-console": ["error", {allow: ["error"]}],
    "no-multiple-empty-lines": [
      "error",
      {
        max: 2,
        maxEOF: 1,
      },
    ],
    "no-unused-vars": [
      "error",
      {
        varsIgnorePattern: "^_",
        argsIgnorePattern: "^_",
        args: "after-used",
        vars: "all",
      },
    ],
    "object-curly-spacing": ["error", "never"],
    "operator-linebreak": ["error", "before"],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "no-void": "off",
  },
};