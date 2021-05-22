module.exports = {
    extends: ['airbnb-typescript'],
    parserOptions: {
        project: './tsconfig.json',
    },
    "rules": {
        "indent": ["error", 4],
        "@typescript-eslint/indent": ["error", 4],
        "react/jsx-indent": ["error", 4],
        "react/jsx-indent-props": ["error", 4],
        "react/jsx-one-expression-per-line": "off",
        "react/jsx-curly-newline": "off",
        "react/require-default-props": "off",
        "import/prefer-default-export": "off",
        "import/no-extraneous-dependencies": "off",
        "arrow-parens": "off",
    },
};
