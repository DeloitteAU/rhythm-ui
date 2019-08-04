import React from 'react';
import {storiesOf} from '@storybook/react';
import RuiBackToTop from './src';
import Readme from './README.md';

storiesOf('RuiBackToTop', module)
	.addParameters({
		readme: {
			content: Readme,
		},
	})
	.add('with some emoji', () => (
		<RuiBackToTop> Default </RuiBackToTop>
	));
