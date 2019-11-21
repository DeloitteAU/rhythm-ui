import React, {Fragment} from 'react';
import {storiesOf} from '@storybook/react';
import {register} from './src';
import Readme from './readme.md';

register();

storiesOf('RuiSkipLinks', module)
	.addParameters({
		readme: {
			// Show readme at the addons panel
			sidebar: Readme,
		},
	})
	.add('Skip link module', () => (
		<Fragment>
			<h1> This is a skip link </h1>
			<rui-skip-links />
		</Fragment>
	));
