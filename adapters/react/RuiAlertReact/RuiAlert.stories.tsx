import React from 'react';
import { storiesOf } from '@storybook/react';
import RuiAlert from './src';
import Readme from './README.md';

storiesOf('RuiAlert', module)
	.addParameters({
		readme: {
			content: Readme,
		},
	})
	.add('with some emoji', () => (
		<RuiAlert> Default </RuiAlert>
	));
