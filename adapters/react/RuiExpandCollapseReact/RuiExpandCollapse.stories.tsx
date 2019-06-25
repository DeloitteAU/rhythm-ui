import React from 'react';
import {storiesOf} from '@storybook/react';
import {RuiExpandCollapse} from './src';
import Readme from './README.md';

storiesOf('Expand Collapse', module)
	.addParameters({
		readme: {
			// Show readme at the addons panel
			sidebar: Readme,
		},
	})
	.add('Internally Controlled', () => (
		<>
			<h1>Expand Collapse</h1>
			<p>The default expand collapse is closed</p>
			<RuiExpandCollapse>
				<RuiExpandCollapse.Summary>Summary</RuiExpandCollapse.Summary>
				<RuiExpandCollapse.Details>Content</RuiExpandCollapse.Details>
			</RuiExpandCollapse>

			<p>You can also set it to be initially open via the &apos;open&apos; prop</p>
			<RuiExpandCollapse open>
				<RuiExpandCollapse.Summary>Summary</RuiExpandCollapse.Summary>
				<RuiExpandCollapse.Details>Content</RuiExpandCollapse.Details>
			</RuiExpandCollapse>
		</>
	))
	.add('Customising Content', () => (
		<>
			<h1>Customising Content</h1>
			<p>The expand collapse summary renders a span element by default and the details element renders a div by default. This can be overriden by using the &apos;as&apos; prop.</p>
			<RuiExpandCollapse>
				<RuiExpandCollapse.Summary as="h2">Summary</RuiExpandCollapse.Summary>
				<RuiExpandCollapse.Details as="p">Content</RuiExpandCollapse.Details>
			</RuiExpandCollapse>
		</>
	));


