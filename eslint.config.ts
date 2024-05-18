// @ts-check
// @ts-ignore
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
// @ts-ignore
import eslintConfigPrettier from 'eslint-config-prettier';

export default tseslint.config(
	eslint.configs.recommended,
	...tseslint.configs.recommended,
	...tseslint.configs.recommendedTypeChecked,
	...tseslint.configs.stylistic,
	...tseslint.configs.stylisticTypeChecked,
	{
		rules: {
			'@typescript-eslint/no-unused-vars': 'off',
		},
	},
	eslintConfigPrettier,
);
