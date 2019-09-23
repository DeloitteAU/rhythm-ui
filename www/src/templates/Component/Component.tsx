import {MDXRenderer} from 'gatsby-mdx';
import {MDXProvider} from '@mdx-js/react';
import {graphql} from 'gatsby';
import {css} from '@emotion/core';
import slug from 'slug';
import React from 'react';

// Import these so markdown files render if they are using these tags
// @@ GENERATOR IMPORT COMPONENT
import '@rhythm-ui/accordion-react';
import '@rhythm-ui/alert-react';
import '@rhythm-ui/breadcrumbs-react';
import '@rhythm-ui/button-react';
import '@rhythm-ui/expand-collapse-react';
import '@rhythm-ui/grid-react';
import '@rhythm-ui/hero-banner-react';
import '@rhythm-ui/icon-react';
import '@rhythm-ui/layout-react';
import '@rhythm-ui/pagination-react';
import '@rhythm-ui/rich-text-react';
import '@rhythm-ui/scroll-to-react';
import '@rhythm-ui/skip-links-react';
import '@rhythm-ui/story-react';

import Layout from '../../components/Layout';
import {Header} from '../../components/Header';
import {Footer} from '../../components/Footer';
import {Navigation} from '../../components/Navigation';
import {Code} from '../../components/Code';
import {Script} from '../../components/Script';

import {
	findIndexOf,
	replaceStringWith,
} from '../../utils/stringUtils';

//import './prism.css';
import './Component.css';

//import Code from '../components/Code'
const preToCodeBlock = (preProps: any) => {
	if (
		// children is MDXTag
		preProps.children
		// MDXTag props
		&& preProps.children.props
		// if MDXTag is going to render a <code>
		&& preProps.children.props.mdxType === 'code'
	) {
		const {
			children: codeString,
			props,
		} = preProps.children.props;

		return {
			codeString: codeString.trim(),
			language: preProps.children.props.className && preProps.children.props.className.split('-')[1],
			preview: !!preProps.children.props.preview,
			...props,
		};
	}

	return null;
};

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

	const {doc, nav, ruidocs} = data; // data.markdownRemark holds our post data
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
	/* eslint-disable react/display-name */
	const mdxComponents = {
		pre: (props: any) => { //eslint-disable-line react/no-multi-comp

			const preProps = preToCodeBlock(props);

			if (preProps) {
				return <Code {...preProps} />;
			}

			return <pre {...props} />;
		},
		Script,
	};

	// breadcrumbs={breadcrumbs} pageTitle={pageTitle} relativeUrlPath={relativeUrlPath}

	return (
		<Layout
			title={pageTitle}
			nav={nav.nodes}
			breadcrumbs={breadcrumbs}
			tocs={pageHeadings}
			editPath={githubUrlPath}
			markdown={doc.code.body}
		>
			<pre>yarn install {doc.frontmatter.package}</pre>
			{ruidocs.nodes.map(n => {
				return (
					<>
						<MDXRenderer key={n.id}>{n.code.body}</MDXRenderer>
						<p>
							<strong>Missing a variable for a css property?</strong> Please open a Github issue. While we believe less is
							more for a starting point its worth having the discussion to see if we can include the property
							you want in this component.
						</p>
					</>
				);
			})}
		</Layout>
	);

};

export const pageQuery = graphql`
	query MDXQuery($id: String!, $fileAbsolutePath: String!) {
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
		nav: allMdx(filter: {fields: {relativeUrlPath: {regex: "/^\/components/"}}}) {
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
		ruidocs: allMdx(filter: {fields: {parentFileAbsolutePath: {eq: $fileAbsolutePath}}}) {
			nodes {
				id
				code {
					body
				}
			}
		}
	}
`;

export default Template;
