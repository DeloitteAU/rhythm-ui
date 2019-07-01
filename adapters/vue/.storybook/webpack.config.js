// const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = ({config}) => {
  config.resolve.extensions.push('.ts', '.tsx', '.vue', '.css', '.scss', '.sass', '.html')

  config.module.rules.push({
    test: /\.(ts|.tsx)$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/],
          appendTsxSuffixTo: [/\.vue$/],
          transpileOnly: true
        },
      }
    ],
  })
  return config;
};