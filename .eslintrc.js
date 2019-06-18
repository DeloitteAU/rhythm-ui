//TODO: Move settings into a new ts config
// https://github.com/DeloitteDigitalAPAC/eslint-config-deloitte/issues/19

module.exports = {
	parser: '@typescript-eslint/parser',
	extends: [
		'@deloitte-digital-au/eslint-config',
		'plugin:@typescript-eslint/recommended',
		'prettier',
		'prettier/@typescript-eslint',
	],
	plugins: ['@typescript-eslint'],
	env: {
		browser: true,
		node: true,
		jest: true,
	},
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	rules: {
		'@typescript-eslint/interface-name-prefix': [2, 'always'],
		'@typescript-eslint/no-namespace': [0, {}],
		//'@typescript-eslint/explicit-function-return-type': ['error', {}],
		'object-curly-spacing': ['error', 'never'],
		'@typescript-eslint/no-unused-vars': ['error', {'vars': 'all', 'args': 'after-used', 'ignoreRestSiblings': false}],
	}
};
