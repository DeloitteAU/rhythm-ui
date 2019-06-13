import React from 'react';
import { storiesOf } from '@storybook/react';
import RuiBreadcrumbs from './lib';
import Readme from './README.md';

storiesOf('RuiBreadcrumbs', module)
	.addParameters({
		readme: {
			content: Readme,
		},
	})
	.add('with some emoji', () => (
			<RuiBreadcrumbs> Default </RuiBreadcrumbs>
	));
