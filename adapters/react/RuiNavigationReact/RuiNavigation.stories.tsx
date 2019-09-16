import React from 'react';
import { storiesOf } from '@storybook/react';
import RuiNavigation from './src';
import Readme from './README.md';

storiesOf('RuiNavigation', module)
	.addParameters({
		readme: {
			content: Readme,
		},
	})
	.add('with some emoji', () => (
		<RuiNavigation> Default </RuiNavigation>
	));
