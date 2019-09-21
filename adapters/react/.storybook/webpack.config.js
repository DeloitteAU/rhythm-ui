module.exports = ({ config }) => {

	config.output.publicPath = process.STORYBOOK_PATH_PREFIX || '/';

	config.module.rules.push({
		test: /\.(ts|tsx)$/,
		loader: require.resolve('babel-loader'),
		options: {
			presets: ['babel-preset-rhythm-ui-react']
		}
	});
	config.resolve.extensions.push('.ts', '.tsx');
	return config;
};
