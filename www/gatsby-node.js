/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path');
const {createFilePath} = require('gatsby-source-filesystem');

exports.createPages = ({actions, graphql}) => {
	const {createPage} = actions;

	const componentTemplate = path.resolve('src/templates/Component/Component.tsx');
	const guideTemplate = path.resolve('src/templates/Guide/Guide.tsx');
	const pageTemplate = path.resolve('src/templates/Page/Page.tsx');

	return graphql(`
		{
			allMdx {
				edges {
					node {
						id
						fileAbsolutePath
						frontmatter {
							title
						}
						fields {
							relativeUrlPath
						}
					}
				}
			}
		}
	`).then(result => {
		if (result.errors) {
			Promise.reject(result.errors);
		}

		result.data.allMdx.edges.forEach(edge => {
			const {node} = edge;
			const {fields, frontmatter} = node;
			const {relativeUrlPath} = fields;
			const {title} = frontmatter;
			// TODO: Use a front-matter variable to opt out creating page from .md instead eg "meta: true"
			// TODO: And use filter in the above query
			if (relativeUrlPath.indexOf('.ruidocs') < 0) {

				let template;
				switch (relativeUrlPath.split('/')[1]) {
					case 'components':
						template = componentTemplate;
						break;
					case 'page':
						template = pageTemplate;
						break;
					default:
						template = guideTemplate;
						break;
				}

				createPage({
					path: relativeUrlPath,
					component: template,
					context: {
						id: edge.node.id,
						fileAbsolutePath: edge.node.fileAbsolutePath,
					},
				});
			}
		});
	});
};

const {fmImagesToRelative} = require('gatsby-remark-relative-images');

exports.onCreateNode = ({node, actions, getNode}) => {
	const {createNodeField} = actions;
	if (node.internal.type === 'Mdx') {
		const relativeFilePath = createFilePath({node, getNode, trailingSlash: false});
		const {frontmatter, fileAbsolutePath} = node;

		// Remove any prefix numbers (e.g. in 01-getting-started)
		let relativeUrlPath = relativeFilePath.replace(/\d\d-/g, '');

		if (frontmatter && frontmatter.package && frontmatter.package.match(/^@rhythm-ui/) !== null) {
			let slug = relativeUrlPath
				.split('/')
				.pop()
				.toLowerCase();
			if (frontmatter.title) {
				slug = frontmatter.title.replace(/\s/g, '-').toLowerCase();
			}

			relativeUrlPath = `/components/${slug}`;
		}

		// setting the relative path for CHANGELOG.md
		if (fileAbsolutePath.includes('CHANGELOG')) {
			relativeUrlPath = '/change-log';
		}

		// Extract parent path and base name from the relative path
		const [, , parentUrlPath = '', nodeName = ''] = relativeUrlPath.match(/^(.*)\/(.+)$/) || [];

		// Change hyphens to spaces
		let nodeTitle = nodeName.replace(/-/g, ' ');

		// Make title ucFirst
		nodeTitle = nodeTitle.charAt(0).toUpperCase() + nodeTitle.slice(1);

		createNodeField({
			node,
			name: 'frontmatter',
			value: node.frontmatter || {},
		});

		const content = (node.internal.content || '').replace(/\W+/g, '');
		const hasContent = !!content;

		createNodeField({
			node,
			name: 'hasContent',
			value: hasContent,
		});

		createNodeField({
			node,
			name: 'id',
			value: node.id,
		});

		createNodeField({
			node,
			name: 'nodeName',
			value: nodeName,
		});

		createNodeField({
			node,
			name: 'nodeTitle',
			value: nodeTitle,
		});

		createNodeField({
			node,
			name: 'parentFileAbsolutePath',
			value: frontmatter.parentFileAbsolutePath || '',
		});

		createNodeField({
			node,
			name: 'parentUrlPath',
			value: parentUrlPath,
		});

		createNodeField({
			node,
			name: 'relativeFilePath',
			value: relativeFilePath,
		});

		createNodeField({
			node,
			name: 'relativeUrlPath',
			value: relativeUrlPath,
		});

		// Create breadcrumbs for each markdown page
		const relativePathCrumbs = relativeUrlPath
			.replace(/^\/|\/$/g, '')
			.split('/')
			.slice(0, -1);

		const breadcrumbs = relativePathCrumbs.map((crumb, index) => ({
			nodeName: crumb,
			label: crumb.replace(/-/g, ' '), // TODO: use the actual title of the node if available
			href: relativePathCrumbs.slice(0, index + 1).join('/'),
		}));

		createNodeField({
			node,
			name: 'breadcrumbs',
			value: breadcrumbs,
		});
	}

	if (node.internal.type === 'ImageSharp') {
		fmImagesToRelative(node);
	}
};

const resolvableExtensions = () => ['.ts', '.tsx'];

function onCreateWebpackConfig({actions, loaders}) {
	const jsLoader = loaders.js();

	if (!jsLoader) {
		return;
	}

	actions.setWebpackConfig({
		resolve: {
			alias: {
				'~': path.resolve(__dirname, 'src'),
			},
		},
		module: {
			rules: [
				{
					test: /\.tsx?$/,
					use: jsLoader,
				},
			],
		},
	});
}

exports.resolvableExtensions = resolvableExtensions;
exports.onCreateWebpackConfig = onCreateWebpackConfig;
