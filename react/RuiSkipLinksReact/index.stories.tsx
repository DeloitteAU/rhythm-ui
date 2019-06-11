import React, {Fragment} from 'react';

import { storiesOf } from '@storybook/react';

import { RuiSkipLinks } from './lib';


storiesOf('Skip Links', module)
	.add('Skip link module', () => (
		<Fragment>
			<h1> This is a skip link </h1>
			<RuiSkipLinks />
		</Fragment>
	));
