import React, {Fragment} from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, text, select, optionsKnob} from '@storybook/addon-knobs';
import {register} from './src';
import Readme from './readme.md';

const typeOptions = {
	Default: 'default',
	Primary: 'primary',
	Secondary: 'secondary',
	Tertiary: 'tertiary',
};
const variantsOptions = {
	Fill: 'fill',
	Outline: 'outline',
	Ghost: 'ghost',
};
const sizeOptions = {
	Small: 'small',
	Medium: 'medium',
	Large: 'large',
};

const optionsObj = {
	display: 'radio',
};

register();

storiesOf('RuiButton', module)
	.addParameters({
		readme: {
			// Show readme at the addons panel
			sidebar: Readme,
		},
	})
	.addDecorator(withKnobs)
	.add('Playground', () => (
		<Fragment>
			<h1> Buttons </h1>
			<p>
				Buttons provide a clickable element, which can be used in forms, or anywhere that needs simple, standard button functionality. They may display text, icons, or both. Buttons can be styled with several attributes to look a specific way
			</p>
			<p> Play around with these buttons using the variables in the side panel </p>
			<rui-button
				type={select('Types', typeOptions)}
				variant={select('Variants', variantsOptions)}
				size={optionsKnob('Size', sizeOptions, 'medium', optionsObj)}
			>
				{text('Button Label', 'Default')}
			</rui-button>
		</Fragment>
	))
	.add('Types', () => (
		<Fragment>
			<rui-button>Default</rui-button>
			<rui-button type="primary">Primary</rui-button>
			<rui-button type="secondary">Secondary</rui-button>
			<rui-button type="tertiary">Tertiary</rui-button>
		</Fragment>
	))
	.add('Variants', () => (
		<Fragment>
			<rui-button variant="fill">Fill (default)</rui-button>
			<rui-button variant="outline">Outline</rui-button>
			<rui-button variant="ghost">Ghost</rui-button>
		</Fragment>
	))
	.add('Behaviour', () => (
		<Fragment>
			<rui-button behaviour="button">Button (default)</rui-button>
			<rui-button behaviour="submit">Form Submit</rui-button>
			<rui-button behaviour="reset">Form Reset</rui-button>
			<rui-button behaviour="anchor">Anchor</rui-button>
			<rui-button href="#">Href</rui-button>
		</Fragment>
	))
	.add('Disabled', () => (
		<Fragment>
			<rui-button disabled>Disabled</rui-button>
			<rui-button variant="outline" disabled>Outline</rui-button>
			<rui-button variant="ghost" disabled>Ghost</rui-button>
		</Fragment>
	))
	.add('Sizes', () => (
		<Fragment>
			<rui-button size="small">Small</rui-button>
			<rui-button size="normal">Normal (default)</rui-button>
			<rui-button size="large">Large</rui-button>
		</Fragment>
	));
