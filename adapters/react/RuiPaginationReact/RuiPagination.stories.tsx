import React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, number} from '@storybook/addon-knobs';
import {RuiPagination} from './lib';
import Readme from './README.md';

storiesOf('RuiPagination', module)
	.addParameters({
		readme: {
			content: Readme,
		},
	})
	.addDecorator(withKnobs)
	.add('Playground', () => (
		<RuiPagination
			current-page={number('Current Page', 10)}
			pages-shown={number('Pages Shown', 5)}
			num-pages={number('Number of Pages', 20)}
		/>
	));
