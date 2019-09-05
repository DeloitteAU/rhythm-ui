import React from 'react';
import {storiesOf} from '@storybook/react';
import RuiHeader from './src';
import Readme from './README.md';

storiesOf('RuiHeader', module)
	.addParameters({
		readme: {
			content: Readme,
		},
	})
	.add('with some emoji', () => (
		<RuiHeader> Default </RuiHeader>
	));
