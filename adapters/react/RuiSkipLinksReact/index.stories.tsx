import React, {Fragment} from 'react';

import {storiesOf} from '@storybook/react';

import {RuiSkipLinks} from './lib';
import Readme from './README.md';


storiesOf('Skip Links', module)
	.addParameters({
		readme: {
			// Show readme at the addons panel
			content: Readme,
		},
	})
	.add('Skip link module', () => (
		<Fragment>
			<h1> This is a skip link </h1>
			<RuiSkipLinks />
		</Fragment>
	));
