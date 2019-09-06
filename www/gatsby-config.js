/* eslint-disable @typescript-eslint/no-var-requires */

const fs = require('fs');
const path = require('path');

// This is a temp folder, so make sure it exists before plugins load
const docsDir = path.join(__dirname, '../', '.ruidocs');
if (!fs.existsSync(docsDir)) {
	fs.mkdirSync(docsDir);
}

const formatName = node => (node ? node.replace('rui-', '') : node);
const removeFromUrl = node => (!node.includes('-variables') ? node : null);

module.exports = {
	siteMetadata: {
		title: 'Rhythm UI',
		description: 'Framework for building Design Systems',
		author: 'Deloitte Digital',
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-emotion',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: `${__dirname}/src/images`,
			},
		},
		{
			resolve: 'gatsby-plugin-nprogress',
			options: {
				color: 'tomato',
				showSpinner: true,
			},
		},
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'components',
				path: `${__dirname}/../components`,
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'docs',
				path: `${__dirname}/../docs`,
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'ruidocs',
				path: `${__dirname}/../.ruidocs`,
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'change-log',
				path: `${__dirname}/../CHANGELOG.md`,
			},
		},
		// {
		// 	resolve: 'gatsby-transformer-remark',
		// 	options: {
		// 		plugins: [
		// 			{
		// 				resolve: 'gatsby-remark-autolink-headers',
		// 				options: {
		// 					icon: false,
		// 				},
		// 			},
		// 			{
		// 				// For including gif files
		// 				resolve: 'gatsby-remark-copy-linked-files',
		// 			},
		// 		],
		// 	},
		// },
		{
			resolve: 'gatsby-mdx',
			options: {
				extensions: ['.md', '.mdx'],
				gatsbyRemarkPlugins: [
					{resolve: 'gatsby-remark-autolink-headers'},
					// gatsby-remark-relative-images must
					// go before gatsby-remark-images
					{resolve: 'gatsby-remark-relative-images'},
					{
						resolve: 'gatsby-remark-images',
						options: {
							// It's important to specify the maxWidth (in pixels) of
							// the content container as this plugin uses this as the
							// base for generating different widths of each image.
							// Note: we also set the max width in the Content of the Layout component
							linkImagesToOriginal: false,
							maxWidth: 960,
							quality: 80,
							wrapperStyle: '',
						},
					},
					{resolve: 'gatsby-remark-copy-linked-files'},
				],
			},
		},
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: 'gatsby-starter-default',
				short_name: 'starter', // eslint-disable-line @typescript-eslint/camelcase
				start_url: '/', // eslint-disable-line @typescript-eslint/camelcase
				background_color: '#663399', // eslint-disable-line @typescript-eslint/camelcase
				theme_color: '#663399', // eslint-disable-line @typescript-eslint/camelcase
				display: 'minimal-ui',
				icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
			},
		},
		{
			resolve: '@gatsby-contrib/gatsby-plugin-elasticlunr-search',
			options: {
				fields: ['name', 'title', 'urlPath'],
				resolvers: {
					Mdx: {
						name: node => node.frontmatter.title,
						title: node => formatName(node.frontmatter.title),
						urlPath: node => removeFromUrl(node.fields.relativeUrlPath),
					},
				},
			},
		},
		//   },
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// 'gatsby-plugin-offline',
	],
};
