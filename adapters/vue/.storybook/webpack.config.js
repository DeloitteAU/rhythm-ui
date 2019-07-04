// const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = ({config}) => {
  config.resolve.extensions.push('.ts', '.vue', '.css', '.scss', '.sass', '.html')
  config.module.rules.push({
    test: /\.ts$/,
    use: [
      {
        loader: 'babel-loader',
        options: {
          presets: ['babel-preset-rhythm-ui-vue']
        }
      }
    ]
	});
  return config;
};