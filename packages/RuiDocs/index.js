#!/usr/bin/env node

const glob = require('glob');
const path = require('path');
const fs = require('fs');
const extract = require('multilang-extract-comments');

const args = process.argv;

const banner = '<!-- THIS IS AN AUTO GENERATED FILE. CHANGES WILL BE BANISHED -->';
const cssVarRegex = /(--.+)\:\s?(.+)\;/g;

const fIndex = args.indexOf('--files');
const pattern = args[fIndex + 1];

const oIndex = args.indexOf('--out');
const outDir = args[oIndex + 1];

if (!fs.existsSync(outDir)) {
	fs.mkdirSync(outDir);
}

console.log(pattern);

const readme = fs.readFileSync('./readme.md', 'UTF8');

glob(pattern, {}, (er, files) => {
	if (er) {
		console.log(er);
		process.exit(1);
	}

	console.log(`Found ${files.length} files`);

	files.forEach(file => {
		const comments = extract(fs.readFileSync(file, 'utf8'));
		const markdown = Object.values(comments).reduce((md, block) => {

			const parts = cssVarRegex.exec(block.code);
			if (Array.isArray(parts)) {
				const name = parts[1];
				const v = parts[2];
				return `${md}| ${name} | ${v} | ${block.content.replace(/@variable\s?/, '').replace(/(\t)/g, '').replace(/\n/g,'')} | \n`;
			}
			return md;
		}, '## Variables\n| CSS Variable | Default Value | Description |\n| --- | --- | --- |\n');

		fs.writeFileSync(path.join(outDir, 'readme.md'), `${readme}\n${markdown}`);

	});
});

//const readme = fs.readFileSync('README.md');

//fs.writeFileSync('./docs/readme.md', `${banner}\n\n${readme}\n\n${markdown}`);

console.log(args);
