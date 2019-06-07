import React from 'react';
import { storiesOf } from '@storybook/react';
import { RuiButton } from './lib';

storiesOf('Button', module)
	.add('with some emoji', () => (
		<div>
		<RuiButton> Default </RuiButton>
		<RuiButton type="primary">Primary</RuiButton>
		<RuiButton type="secondary">Secondary</RuiButton>
		<RuiButton type="tertiary">Tertiary</RuiButton>
		</div>
	));
