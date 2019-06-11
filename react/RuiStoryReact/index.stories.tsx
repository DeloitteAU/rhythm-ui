import React from 'react';

import { storiesOf } from '@storybook/react';

import { RuiStory } from './lib';


storiesOf('Story', module)
	.add('this is a story', () => (
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
	));
