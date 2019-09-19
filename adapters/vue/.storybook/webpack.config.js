// const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const updateWebpackConfig = require('storybook-readme/vue/updateWebpackConfig');

module.exports = ({config}) => {
  config.output.publicPath = process.STORYBOOK_PATH_PREFIX || '/';
  config.resolve.extensions.push('.ts', '.vue', 'tsx', '.css', '.scss', '.sass', '.html')
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
  updateWebpackConfig(config);
  return config;
};