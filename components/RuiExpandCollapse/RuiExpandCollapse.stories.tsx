import React from 'react';
import {storiesOf} from '@storybook/react';
import {register} from './src';
import Readme from './readme.md';

register();

storiesOf('RuiExpandCollapse', module)
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
			<rui-expand-collapse>
				<p slot="summary-content">Summary</p>
				<p slot="details-content">Content</p>
			</rui-expand-collapse>

			<p>You can also set it to be initially open via the &apos;open&apos; prop</p>
			<rui-expand-collapse open>
				<p slot="summary-content">Summary</p>
				<p slot="details-content">Content</p>
			</rui-expand-collapse>
		</>
	))
	.add('Customising Content', () => (
		<>
			<h1>Customising Content</h1>
			<p>The expand collapse summary renders a span element by default and the details element renders a div by default. This can be overriden by using the &apos;as&apos; prop.</p>
			<rui-expand-collapse id="expandExample">
				<p slot="summary-content">Summary</p>
				<p slot="details-content">Content</p>
			</rui-expand-collapse>
		</>
    ));
