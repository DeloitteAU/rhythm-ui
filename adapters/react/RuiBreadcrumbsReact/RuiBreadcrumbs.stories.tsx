import React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, number, object} from '@storybook/addon-knobs';
import {RuiBreadcrumbs} from './src';
import Readme from './README.md';


const playgroundsCrumbs = [
	{title: 'Home', url: '#home'},
	{title: 'Breadcrumb 1', url: '#b1'},
	{title: 'Breadcrumb 2', url: '#b2'},
	{title: 'Breadcrumb 3', url: '#b3'},
	{title: 'Breadcrumb 4', url: '#b3'},
	{title: 'Breadcrumb 5', url: '#b3'},
];

storiesOf('Breadcrumbs', module)
	.addParameters({
		readme: {
			sidebar: Readme,
		},
	})
	.addDecorator(withKnobs)
	.add('Playground', () => (
		<RuiBreadcrumbs
			maxCrumbs={number('maxCrumbs', 7)}
			crumbs={object('crumbs', playgroundsCrumbs)}
		/>
	))
	.add('Basic Breadcrumbs', () => (
		<RuiBreadcrumbs
			crumbs={[
				{title: 'Home', url: '#home'},
				{title: 'Breadcrumb 1', url: '#b1'},
				{title: 'Breadcrumb 2', url: '#b2'},
				{title: 'Breadcrumb 3', url: '#b3'},
			]}
		/>
	))
	.add('Truncated Breadcrumbs', () => (
		<RuiBreadcrumbs
			maxCrumbs={3}
			crumbs={[
				{title: 'Home', url: '#home'},
				{title: 'Breadcrumb 1', url: '#b1'},
				{title: 'Breadcrumb 2', url: '#b2'},
				{title: 'Breadcrumb 3', url: '#b3'},
				{title: 'Breadcrumb 4', url: '#b3'},
				{title: 'Breadcrumb 5', url: '#b3'},
			]}
		/>
	))
	.add('Custom Seperators', () => (
		<RuiBreadcrumbs
			crumbs={[
				{title: 'Home', url: '#home'},
				{title: 'Breadcrumb 1', url: '#b1'},
				{title: 'Breadcrumb 2', url: '#b2'},
				{title: 'Breadcrumb 3', url: '#b3'},
				{title: 'Breadcrumb 4', url: '#b3'},
				{title: 'Breadcrumb 5', url: '#b3'},
			]}
		>
			<RuiBreadcrumbs.Seperator aria-hidden="true">/</RuiBreadcrumbs.Seperator>
		</RuiBreadcrumbs>
	))
	.add('Custom Crumbs', () => (
		<RuiBreadcrumbs>
			<RuiBreadcrumbs.Crumb href="#l1">Link 1 <span>custom richtext</span></RuiBreadcrumbs.Crumb>
			<RuiBreadcrumbs.Crumb href="#l2">Link 2</RuiBreadcrumbs.Crumb>
			<RuiBreadcrumbs.Crumb as="span">Active Link</RuiBreadcrumbs.Crumb>
		</RuiBreadcrumbs>
	));
