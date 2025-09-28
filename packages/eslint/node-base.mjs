//@ts-check
import eslint from '@eslint/js';
import eslintPlugin from 'eslint-plugin-prettier/recommended';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import { dirname, resolve } from 'path';
import tseslint from 'typescript-eslint';

export default function (tsconfigFile, ...configs) {
    return defineConfig(
        eslint.configs.recommended,
        tseslint.configs.recommended,
        eslintPlugin,
        globalIgnores([
            '**/node_modules/',
            '**/dist/',
            '**/coverage/',
            '**/logs/',
            '**/temp/'
        ]),
        {
            name: 'node-esm',
            languageOptions: {
                globals: {
                    ...globals.node
                },
                ecmaVersion: 'latest',
                sourceType: 'module',
                parserOptions: {
                    project: tsconfigFile,
                    ecmaFeatures: {
                        jsx: true
                    },
                    tsconfigRootDir: dirname(resolve(tsconfigFile))
                }
            },
            rules: {
                'no-console': 1,
                'prettier/prettier': 2,
                'no-unused-vars': 'off',
                'require-await': 2,
                '@typescript-eslint/no-explicit-any': 'off',
                '@typescript-eslint/no-unused-vars': [
                    'error',
                    {
                        args: 'none',
                        varsIgnorePattern: '^_'
                    }
                ],
                'no-undef': 'error',
                '@typescript-eslint/no-var-requires': 'off',
                '@typescript-eslint/consistent-type-imports': 'error',
                '@typescript-eslint/no-floating-promises': 'error',
                '@typescript-eslint/array-type': [
                    'error',
                    {
                        default: 'generic',
                        readonly: 'generic'
                    }
                ]
            }
        },
        configs
    );
}
