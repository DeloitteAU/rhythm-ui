import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import minify from 'rollup-plugin-babel-minify';
import pkg from './package.json';

console.log('tst');
export default {
	input: ['./src/rhythm-ui.ts'],
	output: [
		// ES module version, for modern browsers
		{
			dir: "dist/module",
			format: "es",
			sourcemap: true,
			entryFileNames: `rhythm-ui.${pkg.version}.js`,
		},
	  // SystemJS version, for older browsers
		{
			dir: "dist/nomodule",
			format: "system",
			sourcemap: true,
			entryFileNames: `rhythm-ui.${pkg.version}-sys.js`,
		}
	],
	plugins: [
		resolve({
			extensions: ['.js', '.jsx', '.ts', '.tsx'],
			dedupe: ['lit-element', 'lit-html', 'lit-css'],
		}),
		babel({
			//exclude: 'node_modules/**',
			extensions: ['.js', '.jsx', '.ts', '.tsx'],
			comments: false,
			shouldPrintComment: (val) => /@preserve/.test(val)
		}),
		minify(),
	]
};
