module.exports = function() {

	const env = process.env.BABEL_ENV || process.env.NODE_ENV || 'development';
	const isTest = env === 'test';
	const isDevelopment = env === 'development';
	const isProduction = env === 'production';

	if (!isTest && !isDevelopment && !isProduction) {
		throw new Error(`Please specify BABEL_ENV or NODE_ENV to either "test", "development" or "production". Received "${JSON.stringify(env)}".`);
	}

	return {

		presets: [
			require('@babel/preset-typescript').default,
			// [require('@babel/preset-env').default, {
			// 	targets: {node: true},
			// }],
		],

		plugins: [
			[
				'@babel/plugin-proposal-decorators',
				{
					legacy: true,
				},
			],
			[
				'@babel/plugin-proposal-class-properties',
				{
					loose: true,
				},
			],
		].filter(Boolean),
	};
};
