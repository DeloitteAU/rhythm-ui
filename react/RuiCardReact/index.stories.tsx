import React from 'react';
import {storiesOf} from '@storybook/react';

// @ts-ignore
import {RuiCard} from './lib';
import Readme from './README.md';

storiesOf('Card', module)
	.addParameters({
		readme: {
			content: Readme,
		},
	})
	.add('Basic card', () => (
		<RuiCard>
			<div>This is the card</div>
		</RuiCard>
	));
