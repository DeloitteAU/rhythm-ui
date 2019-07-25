import React from 'react';
import { storiesOf } from '@storybook/react';
import RuiTabs from './src';
import Readme from './README.md';

storiesOf('RuiTabs', module)
	.addParameters({
		readme: {
			content: Readme,
		},
	})
	.add('with some emoji', () => (
		<RuiTabs> Default </RuiTabs>
	));
