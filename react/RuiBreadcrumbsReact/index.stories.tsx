import { storiesOf } from '@storybook/react';
import RuiBreadcrumbs from './lib';
import RuiLink from '@rhythm-ui/rui-link-react';

import Readme from './README.md';
import React from 'react';

const locationArray = JSON.stringify([
	{"title": "my title", "url": "/my/rul"},
	{"title": "my 2", "url": "/my/rul"}
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
				<RuiLink href="/#" color='primary'> Link 1 </RuiLink>
				<RuiLink href="/#" > Link 2 </RuiLink>
				<RuiLink href="/#" active > Active Link </RuiLink>
			</RuiBreadcrumbs>
		</React.Fragment>

	))
	.add('breadcrumbs with json array', () => (
		<RuiBreadcrumbs crumbs={locationArray} />
	));
