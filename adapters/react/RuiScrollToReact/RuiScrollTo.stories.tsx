import React from 'react';
import {storiesOf} from '@storybook/react';
import RuiScrollTo from './src';
import Readme from './README.md';

storiesOf('RuiScrollTo', module)
	.addParameters({
		readme: {
			content: Readme,
		},
	})
	.add('with some emoji', () => (
		<RuiScrollTo> Default </RuiScrollTo>
	));
