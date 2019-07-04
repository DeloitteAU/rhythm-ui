import React from 'react';
import {storiesOf} from '@storybook/react';
import {RuiPagination} from './lib';
import Readme from './README.md';

storiesOf('RuiPagination', module)
	.addParameters({
		readme: {
			content: Readme,
		},
	})
	.add('with some emoji', () => (
		<RuiPagination> Default </RuiPagination>
	));
