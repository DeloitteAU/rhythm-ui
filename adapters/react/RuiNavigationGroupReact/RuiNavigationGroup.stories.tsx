import React from 'react';
import { storiesOf } from '@storybook/react';
import RuiNavigationGroup from './src';
import Readme from './README.md';

storiesOf('RuiNavigationGroup', module)
	.addParameters({
		readme: {
			content: Readme,
		},
	})
	.add('with some emoji', () => (
		<RuiNavigationGroup> Default </RuiNavigationGroup>
	));
