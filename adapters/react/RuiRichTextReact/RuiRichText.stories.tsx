import React from 'react';
import {storiesOf} from '@storybook/react';
import RuiRichText from './src';
import Readme from './README.md';

storiesOf('RuiRichText', module)
	.addParameters({
		readme: {
			content: Readme,
		},
	})
	.add('with some emoji', () => (
		<RuiRichText> Default </RuiRichText>
	));
