import React from 'react';
import { storiesOf } from '@storybook/react';
import RuiIcon from './src';
import Readme from './README.md';

storiesOf('RuiIcon', module)
	.addParameters({
		readme: {
			content: Readme,
		},
	})
	.add('with some emoji', () => (
		<RuiIcon> Default </RuiIcon>
	));
