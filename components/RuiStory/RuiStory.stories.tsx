import React, {Fragment} from 'react';
import {storiesOf} from '@storybook/react';
import {register} from './src';
import Readme from './readme.md';

register();

storiesOf('RuiStory', module)
	.addParameters({
		readme: {
			// Show readme at the addons panel
			sidebar: Readme,
		},
	})
	.add('this is a story', () => (
		<Fragment>
			<rui-story
				title="Title"
				domain="Domain"
			>
				<div slot="img" class="example-image-el">Image Element</div>
				<div slot="content" class="cm cm-rich-text">
					<p>Your custom content</p>
				</div>
				<a class="story-cta" href="http://localhost:8000" slot="cta">
					CTA Element
				</a>
			</rui-story>
		</Fragment>
	));
