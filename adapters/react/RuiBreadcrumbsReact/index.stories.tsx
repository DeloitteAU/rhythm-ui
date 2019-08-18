import React from 'react';
import {storiesOf} from '@storybook/react';
import {RuiBreadcrumbs} from './src';
import Readme from './README.md';

const locationArray = JSON.stringify([
	{title: 'Home', url: '/my/rul'},
	{title: 'Active page', url: '/my/rul'},
]);
storiesOf('Breadcrumbs', module)
	.addParameters({
		readme: {
			content: Readme,
		},
	})
	.add('with manual location ', () => (
		<React.Fragment>
			<br /> <p> Breadcrumbs using Link component </p> <br />

			<RuiBreadcrumbs max={3}>
				<a href="#">Link 1</a>
				<a href="#">Link 2</a>
				<a href="#">Link 3</a>
				<a href="#">Active link</a>
			</RuiBreadcrumbs>

			<br /> <p> Breadcrumbs with no max </p> <br />

			<RuiBreadcrumbs>
				<a href="#">Link 1</a>
				<a href="#">Link 2</a>
				<a href="#">Link 3</a>
				<a href="#">Active link</a>
			</RuiBreadcrumbs>
		</React.Fragment>

	));
