#!/usr/bin/env node

/* eslint-disable @typescript-eslint/no-var-requires */

const glob = require('glob');
const path = require('path');
const fs = require('fs');
const fm = require('front-matter');
const extract = require('multilang-extract-comments');

const args = process.argv;

const cssVarRegex = /(--.+?)\:\s?(.+)\;/;

const fIndex = args.indexOf('--files');
const pattern = args[fIndex + 1];

const oIndex = args.indexOf('--out');
const outDir = args[oIndex + 1];

if (!fs.existsSync(outDir)) {
	fs.mkdirSync(outDir);
}

let readme;

try {
	readme = fs.readFileSync('./readme.md', 'UTF8');
} catch(err) {
	readme = fs.readFileSync('./readme.mdx', 'UTF8');
}

let filename = 'readme';

// Read meta data from file
const frontMatter = fm(readme);
if (frontMatter && frontMatter.attributes && frontMatter.attributes.title) {
	filename = frontMatter.attributes.title.replace(/\s/g,'-').toLowerCase();
}

// Parse passed typescript files
glob(pattern, {}, (er, files) => {
	if (er) {
		console.log(er);
		process.exit(1);
	}

	console.log(`Found ${files.length} files`);

	files.forEach(file => {
		const data = fs.readFileSync(file, 'utf8');
		const comments = extract(data);

		// Build markdown table with @variable comments
		const markdown = Object.values(comments).reduce((md, block) => {

			const parts = cssVarRegex.exec(block.code);

			if (Array.isArray(parts)) {
				const name = parts[1];
				const v = parts[2];
				return `${md}| ${name} | ${v} | ${block.content.replace(/@variable\s?/, '').replace(/(\t)/g, '').replace(/\n/g,'')} | \r\n`;
			}
			return md;
		}, '\r\n ## Variables\r\n\r\n| CSS Variable | Default Value | Description |\r\n| --- | --- | --- |\r\n');


		fs.writeFileSync(path.join(outDir, `${filename}.md`), `${readme}\r\n${markdown}`);

	});
});

//const readme = fs.readFileSync('README.md');

//fs.writeFileSync('./docs/readme.md', `${banner}\n\n${readme}\n\n${markdown}`);

//console.log(args);
