module.exports = function() {
	return {
		presets: [
			require('@babel/preset-react').default,
			require('babel-preset-rhythm-ui'),
		],
	};
};
