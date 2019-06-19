import { storiesOf } from '@storybook/react';
import RuiBreadcrumbs from './lib';
import RuiLink from '@rhythm-ui/rui-link-react';

import Readme from './README.md';
import React from 'react';

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
				<li slot='crumb'> <RuiLink href="/#" color='primary'> Link 1 </RuiLink> </li>
				<li slot='crumb' > <RuiLink href="/#" > Link 2 </RuiLink> </li>
				<li slot='crumb' aria-current="page" > <RuiLink> Active Link </RuiLink> </li>
			</RuiBreadcrumbs>
		</React.Fragment>

	))
	.add('breadcrumbs with json array', () => (
		<RuiBreadcrumbs crumbs={locationArray} />
	));
