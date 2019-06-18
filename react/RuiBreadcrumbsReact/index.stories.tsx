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
		<React.Fragment>
			<p> Breadcrumbs passing the anchor tag directly into the slot </p> <br/>
		<RuiBreadcrumbs>
			<a slot="crumb" href="#">Crumbs</a>
			<a slot="crumb" href="#">Crumb #1</a>
			<div slot='crumb'> Last link </div>
		</RuiBreadcrumbs>
			<br/> <p> Breadcrumbs passing a div into the slot with a nested anchor tag </p> <br/>

		<RuiBreadcrumbs>
			<div slot="crumb"> <a href="#">Crumbs</a> </div>
			<div slot="crumb"> <a href="#">Crumb #1</a> </div>
			<div slot='crumb'> Last link </div>
			</RuiBreadcrumbs>
		</React.Fragment>

	))
	.add('breadcrumbs with json array', () => (
		<RuiBreadcrumbs location={locationArray} />
	));
