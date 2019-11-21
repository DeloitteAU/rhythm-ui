import React from 'react';
import {storiesOf} from '@storybook/react';
import {register} from './src';
import Readme from './readme.md';

register();

storiesOf('RuiIcon', module)
	.addParameters({
		readme: {
			sidebar: Readme,
		},
	})
	.add('with some emoji', () => (
		<rui-icon> Default </rui-icon>
	));
