import React from 'react';
import {storiesOf} from '@storybook/react';
import RuiModal from './src';
import Readme from './README.md';

storiesOf('RuiModal', module)
	.addParameters({
		readme: {
			content: Readme,
		},
	})
	.add('with some emoji', () => (
		<RuiModal> Default </RuiModal>
	));
