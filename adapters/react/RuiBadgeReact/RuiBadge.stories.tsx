import React from 'react';
import {storiesOf} from '@storybook/react';
import RuiBadge from './src';
import Readme from './README.md';

storiesOf('RuiBadge', module)
	.addParameters({
		readme: {
			content: Readme,
		},
	})
	.add('with some emoji', () => (
		<RuiBadge> Default </RuiBadge>
	));
