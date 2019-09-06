module.exports = function() {
	return {
		presets: [
			'vue',
			require('babel-preset-rhythm-ui'),
		],
		plugins: [
			"@babel/plugin-transform-typescript"
		]
	};
};