/* eslint @typescript-eslint/no-var-requires: 0 */

const webpack = require('webpack');

module.exports = function(config) {
	config.set({
		basePath: '.',
		frameworks: ['jasmine'],
		files: [
			//'node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js',
			/**
			 * Make sure to disable Karma’s file watcher
			 * because the preprocessor will use its own.
			 */
			{pattern: './components/**/*.test.ts', module: true, watched: false},
			{pattern: './www/src/utils/**/*.test.ts', module: true, watched: false},
		],
		exclude: [],
		preprocessors: {
			'**/*.ts': ['webpack']
		},
		// proxies: {
		// 	'/components/': '/base/components/',
		// },
		webpack: {
			// karma watches the test entry points
			// (you don't need to specify the entry option)
			// webpack watches dependencies
			// webpack configuration
			mode: 'development',
			devtool: 'inline-source-map',
			resolve: {
				// Add `.ts` and `.tsx` as a resolvable extension.
				extensions: ['.ts', '.tsx', '.js']
			},
			module: {
				rules: [
					{
						test: /\.?ts$/,
						//exclude: /(node_modules)/,
						use: {
							loader: 'babel-loader',
							options: {
								presets: ['babel-preset-rhythm-ui']
							}
						}
					}
				]
			},
			plugins: [
				new webpack.DefinePlugin({
					'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
					'process.env.RUI_NO_DEFAULT_REGISTER': JSON.stringify(process.env.RUI_NO_DEFAULT_REGISTER)
				})
			]

		},
		// renamerPreprocessor: {
		// 	// transforming the filenames
		// 	transformPath: function(path) {
		// 		return path.replace(/\.ts$/, '.js');
		// 	}
		// },
		// rollupPreprocessor: {
		// 	/**
		// 	 * This is just a normal Rollup config object,
		// 	 * except that `input` is handled for you.
		// 	 */
		// 	plugins: [
		// 		require('rollup-plugin-node-resolve')({
		// 			extensions: ['.js', '.jsx', '.ts', '.tsx'],
		// 			dedupe: ['lit-element', 'lit-html', 'lit-css'],
		// 		}),
		// 		require('rollup-plugin-babel')({
		// 			//exclude: 'node_modules/**',
		// 			presets: ['babel-preset-rhythm-ui'],
		// 			extensions: ['.js', '.jsx', '.ts', '.tsx'],
		// 			comments: true,
		// 			shouldPrintComment: (val) => /@preserve/.test(val)
		// 		}),
		// 	],
		// 	output: {
		// 		format: "iife", // Helps prevent naming collisions.
		// 		name: "rui", // Required for 'iife' format.
		// 		sourcemap: "inline", // Sensible for testing.
		// 		assetFileNames: '[name].js',
		// 		entryFileNames: 'rui-b.js'
		// 	}
		// },
		// plugins: [
		// 	'karma-browserify',
		// ],
		// karmaTypescriptConfig: {
		// 	bundlerOptions: {
		// 		entrypoints: /\.test\.tsx$/,
		// 	},
		// 	tsconfig: './tsconfig.json',
		// 	compilerOptions: {
		// 		baseUrl: './',
		// 		module: 'commonjs',
		// 		moduleResolution: 'node',
		// 		paths: {
		// 			//	'utils': ['./src/utils'], 'utils/*': ['./src/utils/*']
		// 		}
		// 	},
		// },
		reporters: ['spec'],
		port: 9876,
		colors: true,
		logLevel: config.LOG_DEBUG,// config.LOG_INFO,
		autoWatch: true,
		browsers: ['Chrome' /*, 'Firefox', 'Edge'*/],
		singleRun: true,
		concurrency: Infinity
	});
};
