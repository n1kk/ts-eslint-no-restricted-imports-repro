module.exports = {
    root: true,
    env: {
        node: true,
        es6: true,
    },
    extends: ["eslint:recommended"],
    parserOptions: {
        sourceType: "module",
        project: ["./tsconfig.json"],
    },
    plugins: ["@typescript-eslint"],
    overrides: [
        {
            files: ["*.ts"],
            parser: "@typescript-eslint/parser",
            parserOptions: {
                sourceType: "module",
                project: ["./tsconfig.json"],
            },
            plugins: ["@typescript-eslint"],
            extends: ["plugin:@typescript-eslint/recommended"],
            rules: {
                "@typescript-eslint/no-restricted-imports": [
                    "error",
                    {
                        patterns: [
                            {
                                group: ["fail"],
                                message: "Please do not load from 'fail'.",
                                allowTypeImports: true,
                            },
                        ],
                    },
                ],
            }
        }
    ]
};
