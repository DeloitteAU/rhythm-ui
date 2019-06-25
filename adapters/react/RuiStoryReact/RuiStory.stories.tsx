import React, {Fragment} from 'react';
import {storiesOf} from '@storybook/react';
import {RuiStory} from './src';
import Readme from './README.md';

storiesOf('Story', module)
	.addParameters({
		readme: {
			// Show readme at the addons panel
			content: Readme,
		},
	})
	.add('this is a story', () => (
		<Fragment>
			<RuiStory
				title="Title"
				domain="Domain"
			>
				<div slot="img" className="example-image-el">Image Element</div>
				<div slot="content" className="cm cm-rich-text">
					<p>Your custom content</p>
				</div>
				<a className="story-cta" href="http://localhost:8000" slot="cta">
					CTA Element
				</a>
			</RuiStory>
		</Fragment>
	));
