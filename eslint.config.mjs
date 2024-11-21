import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import eslintConfigPrettier from "eslint-config-prettier";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    rules: {
      // 单引号
      quotes: ["error", "single"],
      // 最多允许 2 行空行
      "no-multiple-empty-lines": ["error", { max: 2, maxEOF: 0 }],
      // 声明未使用的变量只允许 React、App
      "no-unused-vars": ["warn", { varsIgnorePattern: "^(React|App)$" }],
    },
    settings: {
      react: {
        // pluginReact 与 eslintConfigPrettier 同时使用会有报错
        // 1、错误：Warning: React version not specified in eslint-plugin-react settings.
        // 2、处理：指定 React 版本（自动检测 React 版本）
        version: "detect",
      },
    },
  },
  {
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: globals.browser,
    },
  },
  // eslint 通用规则
  pluginJs.configs.recommended,
  // react 通用规则
  pluginReact.configs.flat.recommended,
  // 禁用所有与 Prettier 冲突的 ESLint 规则
  eslintConfigPrettier,
];
