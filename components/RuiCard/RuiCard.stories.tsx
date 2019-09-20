import React from 'react';
import {storiesOf} from '@storybook/react';
import {register} from './src';
import Readme from './readme.md';

register();

storiesOf('Card', module)
	.addParameters({
		readme: {
			sidebar: Readme,
		},
	})
	.add('Basic card', () => (
		<rui-card>
			<div>This is the card</div>
		</rui-card>
	));
