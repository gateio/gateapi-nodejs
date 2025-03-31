const js = require("@eslint/js");
const tseslint = require("@typescript-eslint/eslint-plugin");
const tseslintParser = require("@typescript-eslint/parser");
const prettier = require("eslint-plugin-prettier");
const globals = require("globals");

/*
👋 Hi! This file was autogenerated by tslint-to-eslint-config.
https://github.com/typescript-eslint/tslint-to-eslint-config

It represents the closest reasonable ESLint configuration to this
project's original TSLint configuration.

We recommend eventually switching this configuration to extend from
the recommended rulesets in typescript-eslint.
https://github.com/typescript-eslint/tslint-to-eslint-config/blob/master/docs/FAQs.md

Happy linting! 💖
*/
module.exports = [
    // 环境配置
    js.configs.recommended,
    {
        files: ["**/*.ts", "**/*.tsx"],
        languageOptions: {
            parser: tseslintParser,
            parserOptions: {
                project: "./tsconfig.json",
                sourceType: "module"
            },
            globals: {
                ...globals.node,
            }
        },
        plugins: {
            "@typescript-eslint": tseslint,
            "prettier": prettier
        },
        rules: {
            "@typescript-eslint/no-unsafe-assignment": "off",
            "@typescript-eslint/no-namespace": "off",
            "@typescript-eslint/no-unsafe-member-access": "off",
            "@typescript-eslint/no-unsafe-call": "off",
            "@typescript-eslint/no-unsafe-return": "off",
            "@typescript-eslint/no-unused-vars": "off",
            "no-unused-vars": "off",
            "no-redeclare": "off",    // ✅ 关闭 no-redeclare 检测
            "prettier/prettier": "error"
        }
    },

    // 忽略 dist 目录
    {
        ignores: ["dist/**/*"]
    }
];
