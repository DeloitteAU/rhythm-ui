module.exports = {
	extends: [
		'@deloitte-digital-au/stylelint-config',
		'stylelint-config-styled-components'
	],
	'processors': [
		[
			'stylelint-processor-styled-components',
			{
				'moduleName': 'lit-element',
				'importName': 'css',
				'strict': true
			}
		]
	],
};