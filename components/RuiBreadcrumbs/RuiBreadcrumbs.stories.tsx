import React from 'react';
import {storiesOf} from '@storybook/react';
import {register} from './src';
import Readme from './readme.md';

register();

const locationArray = JSON.stringify([
	{title: 'Home', url: '/my/rul'},
	{title: 'Active page', url: '/my/rul'},
]);
storiesOf('Breadcrumbs', module)
	.addParameters({
		readme: {
			sidebar: Readme,
		},
	})
	.add('with manual location ', () => (
		<React.Fragment>
			<br /> <p> Breadcrumbs using Link component </p> <br />

			<rui-breadcrumbs max="3">
				<a href="#">Link 1</a>
				<a href="#">Link 2</a>
				<a href="#">Link 3</a>
				<a href="#">Active link</a>
			</rui-breadcrumbs>

			<br /> <p> Breadcrumbs with no max </p> <br />

			<rui-breadcrumbs>
				<a href="#">Link 1</a>
				<a href="#">Link 2</a>
				<a href="#">Link 3</a>
				<a href="#">Active link</a>
			</rui-breadcrumbs>
		</React.Fragment>

	));
