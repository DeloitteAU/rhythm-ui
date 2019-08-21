import React from 'react';
import { storiesOf } from '@storybook/react';
import RuiHeroBanner from './src';
import Readme from './README.md';

storiesOf('RuiHeroBanner', module)
	.addParameters({
		readme: {
			content: Readme,
		},
	})
	.add('with some emoji', () => (
		<RuiHeroBanner> Default </RuiHeroBanner>
	));
