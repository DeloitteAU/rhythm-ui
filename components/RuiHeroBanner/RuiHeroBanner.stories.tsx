import React from 'react';
import {storiesOf} from '@storybook/react';
import {register} from './src';
import Readme from './readme.md';

register();

storiesOf('RuiHeroBanner', module)
	.addParameters({
		readme: {
			sidebar: Readme,
		},
	})
	.add('with some emoji', () => (
		<rui-hero-banner> Default </rui-hero-banner>
	));
