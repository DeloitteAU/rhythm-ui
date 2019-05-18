/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = ({ actions, graphql }) => {
	const { createPage } = actions;
  
	const mdxTemplate = path.resolve('src/templates/markdown.tsx');
  
	return graphql(`
	  {
		allMdx {
		  edges {
			node {
			  id
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
		Promise.reject(result.errors)
	  }
  
	  result.data.allMdx.edges.forEach((edge) => {
		const { node } = edge
		const { fields, frontmatter } = node
		const { relativeUrlPath } = fields
		const { title } = frontmatter
  
		createPage({
		  path: relativeUrlPath,
		  component: mdxTemplate,
		  context: {
			id: edge.node.id
		  }
		})
	  })
	})
  }
  
  const { fmImagesToRelative } = require('gatsby-remark-relative-images');
  
  exports.onCreateNode = ({ node, actions, getNode }) => {
	const { createNodeField } = actions;
  
	if (node.internal.type === 'Mdx') {
	  const relativeFilePath = createFilePath({ node, getNode, trailingSlash: false })
  
	  // Remove any prefix numbers (e.g. in 01-getting-started)
	  const { frontmatter } = node;
  
	  let relativeUrlPath = relativeFilePath.replace(/\d\d-/g, '')
  
	  if (frontmatter.package === '@rhythm-ui') {
		relativeUrlPath = `/components/${relativeUrlPath.split('/').pop()}`
	  }
  
	  // Extract parent path and base name from the relative path
	  const [, parentUrlPath = '', nodeName = ''] = relativeUrlPath.match(/^(.*)\/(.+)$/) || []
  
	  // Change hyphens to spaces
	  let nodeTitle = nodeName.replace(/-/g, ' ')
  
	  // Make title ucFirst
	  nodeTitle = nodeTitle.charAt(0).toUpperCase() + nodeTitle.slice(1)
  
	  createNodeField({
		node,
		name: 'frontmatter',
		value: node.frontmatter || {},
	  })
  
	  const content = (node.internal.content || '').replace(/\W+/g, '')
	  const hasContent = !!content
  
	  createNodeField({
		node,
		name: 'hasContent',
		value: hasContent,
	  })
  
	  createNodeField({
		node,
		name: 'id',
		value: node.id,
	  })
  
	  createNodeField({
		node,
		name: 'nodeName',
		value: nodeName,
	  })
  
	  createNodeField({
		node,
		name: 'nodeTitle',
		value: nodeTitle,
	  })
  
	  createNodeField({
		node,
		name: 'parentUrlPath',
		value: parentUrlPath,
	  })
  
	  createNodeField({
		node,
		name: 'relativeFilePath',
		value: relativeFilePath,
	  })
  
	  createNodeField({
		node,
		name: 'relativeUrlPath',
		value: relativeUrlPath,
	  })
  
	  // Create breadcrumbs for each markdown page
	  const relativePathCrumbs = relativeUrlPath.replace(/^\/|\/$/g, '').split('/').slice(0, -1)
  
	  const breadcrumbs = relativePathCrumbs.map((crumb, index) => ({
		nodeName: crumb,
		label: crumb.replace(/-/g, ' '), // TODO: use the actual title of the node if available
		href: relativePathCrumbs.slice(0, index + 1).join('/'),
	  }))
  
	  createNodeField({
		node,
		name: 'breadcrumbs',
		value: breadcrumbs,
	  })
	}
  
	if (node.internal.type === 'ImageSharp') {
	  fmImagesToRelative(node)
	}
  }

const resolvableExtensions = () => ['.ts', '.tsx'];

function onCreateBabelConfig({ actions }) {
	actions.setBabelPreset({
		name: '@babel/preset-typescript',
		options: {
			isTSX: true,
			allExtensions: true,
		},
	});
};

function onCreateWebpackConfig({ actions, loaders }) {
	const jsLoader = loaders.js();

	if (!jsLoader) {
		return;
	}

	actions.setWebpackConfig({
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
exports.onCreateBabelConfig = onCreateBabelConfig;
exports.onCreateWebpackConfig = onCreateWebpackConfig;
