import React from 'react';
import { storiesOf } from '@storybook/react';
import RuiCard from './lib';
import Readme from './README.md';

storiesOf('RuiCard', module)
	.addParameters({
		readme: {
			content: Readme,
		},
	})
	.add('with some emoji', () => (
		<div>
			<RuiCard>
			</RuiCard>	
		</div>	
	));
