import React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, number, object} from '@storybook/addon-knobs';
import {RuiBreadcrumbs} from './src';
import Readme from './README.md';


storiesOf('Breadcrumbs', module)
	.addParameters({
		readme: {
			sidebar: Readme,
		},
	})
	.addDecorator(withKnobs)
	.add('Basic Usage', () => (
		<RuiBreadcrumbs>
			<RuiBreadcrumbs.Crumb href="#home">Home</RuiBreadcrumbs.Crumb>
			<RuiBreadcrumbs.Crumb href="#b1">Breadcrumb 1</RuiBreadcrumbs.Crumb>
			<RuiBreadcrumbs.Crumb href="#b2">Breadcrumb 2</RuiBreadcrumbs.Crumb>
			<RuiBreadcrumbs.Crumb as="span">Breadcrumb 3</RuiBreadcrumbs.Crumb>
		</RuiBreadcrumbs>
	))
	.add('Truncation', () => (
		<RuiBreadcrumbs
			maxCrumbs={3}
		>
			<RuiBreadcrumbs.Crumb href="#home">Home</RuiBreadcrumbs.Crumb>
			<RuiBreadcrumbs.Crumb href="#b1">Breadcrumb 1</RuiBreadcrumbs.Crumb>
			<RuiBreadcrumbs.Crumb href="#b2">Breadcrumb 2</RuiBreadcrumbs.Crumb>
			<RuiBreadcrumbs.Crumb href="#b3">Breadcrumb 3</RuiBreadcrumbs.Crumb>
			<RuiBreadcrumbs.Crumb href="#b4">Breadcrumb 4</RuiBreadcrumbs.Crumb>
			<RuiBreadcrumbs.Crumb as="span">Breadcrumb 5</RuiBreadcrumbs.Crumb>
		</RuiBreadcrumbs>
	))
	.add('Custom Truncation Labels', () => (
		<RuiBreadcrumbs maxCrumbs={2}>
			<RuiBreadcrumbs.Crumb href="#home">Home</RuiBreadcrumbs.Crumb>
			<RuiBreadcrumbs.Crumb href="#b1">Breadcrumb 1</RuiBreadcrumbs.Crumb>
			<RuiBreadcrumbs.Crumb truncatedLabel="Link 2 custom label" href="#b2">Breadcrumb 2</RuiBreadcrumbs.Crumb>
			<RuiBreadcrumbs.Crumb href="#b3">Breadcrumb 3</RuiBreadcrumbs.Crumb>
			<RuiBreadcrumbs.Crumb href="#b4">Breadcrumb 4</RuiBreadcrumbs.Crumb>
			<RuiBreadcrumbs.Crumb as="span">Breadcrumb 5</RuiBreadcrumbs.Crumb>
		</RuiBreadcrumbs>
	))
	.add('Custom Seperators', () => (
		<RuiBreadcrumbs>
			<RuiBreadcrumbs.Crumb href="#home">Home</RuiBreadcrumbs.Crumb>
			<RuiBreadcrumbs.Crumb href="#b1">Breadcrumb 1</RuiBreadcrumbs.Crumb>
			<RuiBreadcrumbs.Crumb href="#b2">Breadcrumb 2</RuiBreadcrumbs.Crumb>
			<RuiBreadcrumbs.Crumb href="#b3">Breadcrumb 3</RuiBreadcrumbs.Crumb>
			<RuiBreadcrumbs.Crumb href="#b4">Breadcrumb 4</RuiBreadcrumbs.Crumb>
			<RuiBreadcrumbs.Crumb as="span">Breadcrumb 5</RuiBreadcrumbs.Crumb>
			<RuiBreadcrumbs.Seperator aria-hidden="true" as="span">#</RuiBreadcrumbs.Seperator>
		</RuiBreadcrumbs>
	));
