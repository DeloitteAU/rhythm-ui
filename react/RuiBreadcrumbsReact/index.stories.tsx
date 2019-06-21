import React from 'react';
import {storiesOf} from '@storybook/react';
import {RuiBreadcrumbs} from './lib';
import Readme from './README.md';

const locationArray = JSON.stringify([
	{"title": "Home", "url": "/my/rul"},
	{"title": "Active page", "url": "/my/rul"}
]);
storiesOf('Breadcrumbs', module)
	.addParameters({
		readme: {
			content: Readme,
		},
	})
	.add('with manual location ', () => (
		<React.Fragment>
			<br/> <p> Breadcrumbs using Link component </p> <br/>

			<RuiBreadcrumbs>
				<RuiBreadcrumbs.Item href="/#" color='primary' > Link 1 </RuiBreadcrumbs.Item>
				<RuiBreadcrumbs.Item href="/#" > Link 2 </RuiBreadcrumbs.Item>
				<RuiBreadcrumbs.Item href="/#" > Link 3 </RuiBreadcrumbs.Item>
				<RuiBreadcrumbs.Item color='primary' active > Active link </RuiBreadcrumbs.Item>
			</RuiBreadcrumbs>
		</React.Fragment>

	))
	.add('breadcrumbs with json array', () => (
		<RuiBreadcrumbs crumbs={locationArray} />
	));
