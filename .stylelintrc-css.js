module.exports = {
	extends: [
		'@deloitte-digital-au/stylelint-config',
	],
	rules: {
		'selector-type-no-unknown': [true, {
			ignore: ['custom-elements', 'default-namespace']
		}],
	}
};
