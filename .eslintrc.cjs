module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  rules: {
    "react/jsx-closing-bracket-location": [
      1,
      {
        nonEmpty: "after-props",
        selfClosing: "props-props",
      },
    ],
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "jsx-a11y/accessible-emoji": "off",
    "simple-import-sort/exports": "error",
    "simple-import-sort/imports": "error",
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/explicit-function-return-type": "off",
    "prettier/prettier": ["error", {}, { usePrettierrc: true }],
    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        checksVoidReturn: false,
      },
    ],
  },
};
