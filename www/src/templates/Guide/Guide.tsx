import {MDXRenderer} from 'gatsby-mdx';
import {MDXProvider} from '@mdx-js/react';
import {graphql} from 'gatsby';
import {css} from '@emotion/core';
import React from 'react';
import slug from 'slug';

// Import these so markdown files render if they are using these tags
// @@ GENERATOR IMPORT COMPONENT
import '@rhythm-ui/icon-react';
import '@rhythm-ui/scroll-to-react';
import '@rhythm-ui/rui-card-react';
import '@rhythm-ui/button-react';
import '@rhythm-ui/story-react';
import '@rhythm-ui/expand-collapse-react';
import '@rhythm-ui/pagination-react';

import Layout from '../../components/Layout';

import {
	findIndexOf,
	replaceStringWith,
} from '../../utils/stringUtils';

//import './prism.css';
import './Guide.css';


// regex capitalizing anything after "-"
const makeUpperCaseAfterMinusSign = (str: string): string =>
	str.replace(/-\s*([a-z])/g, (d: string, e: string): string  => e.toUpperCase());

// this function will return a string like '/components/RuiButton' that we need to append for link to github.
const replaceChar = (urlPath: string): string => {

	// will replace '/docs' from relativeUrlPath.
	const removeDocsTerm: string = replaceStringWith(urlPath, '/docs', '');

	// can now pass this a string to search for the index.
	const indexOfMinusSign: Function = findIndexOf(removeDocsTerm);

	// changing 'r' to R for the character 'r' from 'rui'
	const capitalizeR: string = [...removeDocsTerm].map((ch, index) => (index === indexOfMinusSign('rui-') ? ch.toUpperCase() : ch))
		.join('');

	return makeUpperCaseAfterMinusSign(capitalizeR);
};

const Template = ({
	data, // this prop will be injected by the GraphQL query below.
}: {data: any}) => {

	const {doc, nav} = data; // data.markdownRemark holds our post data
	const {fields, frontmatter, headings} = doc;
	const {breadcrumbs, relativeUrlPath} = fields;
	const {title: pageTitle} = frontmatter;
	const pageHeadings = headings
		.filter(h => h.depth === 2 || h.depth === 3)
		.map((heading: any) => {
			const label = heading.value;

			// Make anchors consistent with gatsby-remark-autolink-headers
			const anchor = slug(label, {lower: true});

			const link = `${relativeUrlPath.replace(/\/$/, '')}#${anchor}`;

			return {
				label,
				link,
				depth: heading.depth,
			};
		});

	const githubUrlPath = `
	${process.env.GATSBY_GITHUB_URL}${replaceChar(relativeUrlPath)}/readme.md
	`;

	return (
		<Layout
			title={pageTitle}
			nav={nav.nodes}
			breadcrumbs={breadcrumbs}
			tocs={pageHeadings}
			editPath={githubUrlPath}
			markdown={doc.code.body}
		/>
	);
};

export const pageQuery = graphql`
	query ArticleQuery($id: String!) {
		doc: mdx(id: {eq: $id}) {
			id
			code {
				body
			}
			headings {
				depth
				value
			}
			fields {
				nodeName
				breadcrumbs {
					nodeName
					label
					href
				}
				relativeUrlPath
			}
			frontmatter {
				title
				package
			}
		}
		nav: allMdx(filter: {fields: {relativeUrlPath: {regex: "/^\/guides/"}}}) {
			nodes {
				id
				frontmatter {
					title
				}
				fields {
					relativeUrlPath
					nodeTitle
					relativeUrlPath
				}
			}
		}
	}
`;

export default Template;
