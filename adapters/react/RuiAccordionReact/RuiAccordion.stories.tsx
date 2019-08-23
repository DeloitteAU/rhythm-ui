import React from 'react';
import {storiesOf} from '@storybook/react';
import RuiAccordion from './src';
import Readme from './README.md';

storiesOf('RuiAccordion', module)
	.addParameters({
		readme: {
			content: Readme,
		},
	})
	.add('with some emoji', () => (
		<RuiAccordion> Default </RuiAccordion>
	));
