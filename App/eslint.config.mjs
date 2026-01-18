import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";

export default [

    pluginReact.configs.flat.recommended,

    {
        ignores: ["dist/", "build/", "node_modules/"]
    },

    {
    
        files: ["webpack.*.js", "webpack.config.js"],
        languageOptions: {
            sourceType: "commonjs", 
        },
        rules: {
            "no-undef": "off",
        },
    },
    {
        files: ["**/*.{js,mjs,cjs,jsx}"],
        languageOptions: {
            globals: globals.browser,
            parserOptions: { ecmaVersion: "latest", sourceType: "module" },
        },
        rules: {
            "react/prop-types": "off",
            "react/react-in-jsx-scope": "off",
            "no-unused-vars": "error",
            semi: ["error", "always"],
            indent: ["error", 4],
        },
    },

    {
        ...js.configs.recommended,
        files: ["**/*.js"], 
    },
];