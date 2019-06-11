import React, {Fragment} from 'react';
import { storiesOf } from '@storybook/react';
import { RuiButton } from './lib';

storiesOf('Button', module)
	.add('with some emoji', () => (
		<Fragment>
			<RuiButton> Default </RuiButton>
			<RuiButton type="primary">Primary</RuiButton>
			<RuiButton type="secondary">Secondary</RuiButton>
			<RuiButton type="tertiary">Tertiary</RuiButton>
		</Fragment>
	));
