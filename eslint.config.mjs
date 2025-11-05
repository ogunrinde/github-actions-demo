import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

export default defineConfig([
  { 
    files: ["**/*.{js,mjs,cjs}"], 

    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },

    plugins: { js, prettierPlugin }, 
    extends: [js.configs.recommended, prettierConfig],
    rules: {
      // Integrate Prettier (throws error if formatting is wrong)
      "prettier/prettier": "error",

      // Your previous ESLint rules
      "no-unused-vars": ["warn"],
      semi: ["error", "always"],
      indent: ["error", 2],
    },
    languageOptions: { globals: globals.browser } 
  },
]);
