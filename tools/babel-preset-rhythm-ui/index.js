module.exports = function() {
	return {
		presets: [
			require('@babel/preset-typescript').default,
		],
		plugins: [
			['@babel/plugin-proposal-decorators', {legacy: true}],
			['@babel/plugin-proposal-class-properties', {loose: true}],
			'@babel/plugin-syntax-dynamic-import',
		],
	};
};
