import {MDXRenderer} from 'gatsby-mdx';
import {MDXProvider} from '@mdx-js/react'
import {graphql} from 'gatsby';

// Import these so markdown files render if they are using these tags
import '@rhythm-ui/button-react';
import '@rhythm-ui/story-react';
import RuiLayout from '@rhythm-ui/layout-react';
import RuiGrid from '@rhythm-ui/grid-react';
import RuiSkipLinks from '@rhythm-ui/skip-links-react';
import React from 'react';
import slug from 'slug';
import {Header} from '../../components/Header';
import {Footer} from '../../components/Footer';
import {Navigation} from '../../components/Navigation';
import {Code} from '../../components/Code';

//import './prism.css';
import './Markdown.css';

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
			props
		} = preProps.children.props

		return {
			codeString: codeString.trim(),
			language: preProps.children.props.className && preProps.children.props.className.split('-')[1],
			preview: !!preProps.children.props.preview,
			...props
		}
	}

	return null
};

export default function Template({
	data, // this prop will be injected by the GraphQL query below.
}: { data: any }) {
	const mdx = data.doc;

	const {fields, frontmatter, headings} = mdx;
	const {breadcrumbs, relativeUrlPath} = fields;
	const {title: pageTitle} = frontmatter;

	const pageHeadings = headings.map((heading: any) => {
		const label = heading.value;

		// Make anchors consistent with gatsby-remark-autolink-headers
		const anchor = slug(label, {lower: true});

		const link = `${relativeUrlPath}#${anchor}`;

		return {
			label,
			link
		};
	});

	const mdxComponents = {
		pre: (props: any) => {
			const preProps = preToCodeBlock(props);

			if (preProps) {
				return <Code {...preProps} />
			}

			return <pre {...props} />
		},
	}

	// breadcrumbs={breadcrumbs} pageTitle={pageTitle} relativeUrlPath={relativeUrlPath}

	return (
		<React.Fragment>
			<RuiSkipLinks />
			<RuiLayout type="rembrandt">
				<Header />
				<Navigation />
				<main id="main">
					<RuiGrid>
						<div className="s-11">
							<MDXProvider components={mdxComponents}>
								<MDXRenderer>{mdx.code.body}</MDXRenderer>
								{data.ruidocs.nodes.map(n => {
									return (
										<MDXRenderer key={n.id}>{n.code.body}</MDXRenderer>
									);
								})}
							</MDXProvider>
						</div>
					</RuiGrid>
				</main>
				<aside>
					<pre>yarn install {mdx.frontmatter.package}</pre>
					<br /><br />
					{pageHeadings.map(h => (
						<div key={h.link}>
							<a href={h.link}>{h.label}</a>
						</div>
					))}
				</aside>
				<Footer />
			</RuiLayout>
		</React.Fragment>
	)
}

export const pageQuery = graphql`
	query MDXQuery($id: String!, $fileAbsolutePath: String!) {
		doc: mdx(id: {eq: $id}) {
			id
			code {
				body
			}
			headings(depth: h2) {
				depth
				value
			}
			fields {
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
