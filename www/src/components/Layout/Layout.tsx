import React, {ReactElement, Children, ReactChildren, ReactNode} from 'react';
import RuiLayout from '@rhythm-ui/layout-react';
import RuiSkipLinks from '@rhythm-ui/skip-links-react';
import RuiBreadcrumbs from '@rhythm-ui/breadcrumbs-react';
import RuiGrid from '@rhythm-ui/grid-react';
import RuiRichText from '@rhythm-ui/rich-text-react';
import {MDXRenderer} from 'gatsby-mdx';
import {MDXProvider} from '@mdx-js/react';

import {Header} from '../../components/Header';
import {Footer} from '../../components/Footer';
import {Navigation} from '../../components/Navigation';

import {Code} from '../../components/Code';
import {Script} from '../../components/Script';

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

interface IProps {
	nav: any[];
	breadcrumbs: any[];
	tocs: any[];
	editPath?: string;
	children: ReactNode;
	markdown?: any;
	title: string;
}

export const Layout: React.SFC<IProps> = ({nav, breadcrumbs, tocs, editPath, markdown, title, children = null}) => {

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

	return (
		<>
			<RuiSkipLinks />
			<RuiLayout type="monet">
				<Header />
				<main id="main">
					<RuiGrid>
						<div className="l-2">
							<RuiRichText>
								<Navigation nodes={nav} />
							</RuiRichText>
						</div>
						<div className="l-7">
							<RuiRichText>
								{breadcrumbs &&
									<RuiBreadcrumbs class="breadcrumbs">
										{breadcrumbs.map(b => <a>{b.label}</a>)}
										<a href="#">{title}</a>
									</RuiBreadcrumbs>
								}
								{markdown &&
									<MDXProvider components={mdxComponents}>
										<MDXRenderer>{markdown}</MDXRenderer>
									</MDXProvider>
								}
								{children}
							</RuiRichText>
						</div>
						<div className="l-2 p-l-11">
							<RuiRichText>
								<aside>
									WITHIN THIS ARTICLE
									{tocs && tocs.map(h => (
										<div key={h.link}>
											{h.depth === 3 && <span style={{marginRight: 10}} /> }<a href={h.link}>{h.label}</a>
										</div>
									))}
									<br /><br />
									{editPath && <a href={editPath} target="_blank">Edit this page</a>}
								</aside>
							</RuiRichText>
						</div>
					</RuiGrid>
				</main>
				<Footer />
			</RuiLayout>
		</>
	);
};

export default Layout;
