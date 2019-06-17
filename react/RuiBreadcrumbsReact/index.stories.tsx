import { storiesOf } from '@storybook/react';
import RuiBreadcrumbs from './lib';
import Readme from './README.md';
import React from 'react';

const locationArray = JSON.stringify([
	{"title": "my title", "url": "/my/rul"},
	{"title": "my 2", "url": "/my/rul"}
]);
storiesOf('RuiBreadcrumbs', module)
	.addParameters({
		readme: {
			content: Readme,
		},
	})
	.add('with manual location ', () => (
		<RuiBreadcrumbs>
			<div slot="crumb"> <a href="#">Crumbs</a> </div>
			<div slot="crumb"> <a href="#">Crumb #1</a> </div>
			<div slot="crumb"> Last link </div>
		</RuiBreadcrumbs>
	))
	.add('breadcrumbs with json array', () => (
		<RuiBreadcrumbs location={locationArray} />
	));
