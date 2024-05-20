import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import { fixupConfigRules } from '@eslint/compat';
import sonarjs from 'eslint-plugin-sonarjs';
import eslintConfigPrettier from 'eslint-config-prettier';
import { FlatCompat } from '@eslint/eslintrc';
import path from 'path';
import { fileURLToPath } from 'url';

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const flatCompat = new FlatCompat({
	baseDirectory: __dirname,
});

export default tseslint.config(
	{ languageOptions: { globals: globals.browser } },
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	...tseslint.configs.recommended,
	...tseslint.configs.recommendedTypeChecked,
	...tseslint.configs.stylistic,
	...tseslint.configs.stylisticTypeChecked,
	...fixupConfigRules(flatCompat.extends('airbnb')),
	sonarjs.configs.recommended,
	{
		settings: {
			'import/resolver': {
				node: {
					extensions: ['.js', '.jsx', '.ts', '.tsx'],
				},
			},
		},
		languageOptions: {
			parserOptions: {
				project: './tsconfig.json',
			},
		},
		rules: {
			'react/react-in-jsx-scope': 'off',
			'react/jsx-uses-react': 'off',
			'react/jsx-filename-extension': [
				2,
				{ extensions: ['.js', '.jsx', '.ts', '.tsx'] },
			],
			'react/no-unknown-property': 'off',
			'react/jsx-props-no-spreading': 'off',
			'no-var': 'error',
			'sonarjs/no-duplicate-string': 1,
			'sonarjs/cognitive-complexity': ['error', 18],
			'no-console': 'warn',
			'arrow-body-style': 1,
			'@typescript-eslint/no-shadow': 0,
			'import/no-useless-path-segments': 1,
			'import/no-extraneous-dependencies': 0,
			'import/no-anonymous-default-export': 0,
			'@typescript-eslint/naming-convention': 0,
			'no-useless-concat': ['error'],
			'object-curly-spacing': [1, 'always'],
			'no-unused-vars': 'off',
			'react/function-component-definition': [
				2,
				{
					namedComponents: 'arrow-function',
					unnamedComponents: 'arrow-function',
				},
			],
			'@typescript-eslint/no-unused-vars': [
				1,
				{
					vars: 'all',
					args: 'none',
				},
			],
			'prefer-destructuring': [
				1,
				{
					object: true,
					array: false,
				},
			],
			'import/order': [
				'error',
				{
					groups: [['builtin', 'external', 'internal']],
				},
			],
			'import/extensions': [
				'error',
				'ignorePackages',
				{
					js: 'never',
					jsx: 'never',
					ts: 'never',
					tsx: 'never',
				},
			],
		},
	},
	eslintConfigPrettier,
);
