import React from 'react';

import { storiesOf } from '@storybook/react';

import { RuiLayout } from './lib';


storiesOf('Layout', module)
	.add('Layout module with Types', () => (
		<RuiLayout >
			<header> Header </header>
			<main> Main </main>
			<footer> Footer </footer>
		</RuiLayout>
	))
	.add('Type Monet (Default)', () => (
			<RuiLayout type="monet">
				<header> Header </header>
				<main> Main </main>
				<footer> Footer </footer>
			</RuiLayout>
	));
