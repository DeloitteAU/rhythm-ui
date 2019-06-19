import React from 'react';

import {storiesOf} from '@storybook/react';

import {RuiLayout} from './lib';
import Readme from './README.md';


storiesOf('Layout', module)
	.addParameters({
		readme: {
			// Show readme at the addons panel
			sidebar:  Readme,
		},
	})
	.add('Layout module with Types', () => (
		<RuiLayout >
			<header> Header </header>
			<main> Main </main>
			<footer> Footer </footer>
		</RuiLayout>

	))
	.add('Monet (Default)', () => (
			<RuiLayout type="monet">
				<header> Header </header>
				<main> Main </main>
				<footer> Footer </footer>
			</RuiLayout>
	))
	.add('Picasso', () => (
		<RuiLayout type="picasso">
			<header>Header</header>
			<nav>Nav</nav>
			<main>Main</main>
			<footer>Footer</footer>
		</RuiLayout>
	))
	.add('Da Vinchi', () => (
		<RuiLayout type="davinci">
			<header>Header</header>
			<nav>Nav</nav>
			<main>Main</main>
			<footer>Footer</footer>
		</RuiLayout>
	))
	.add('Van Gogh', () => (
		<RuiLayout type="vangogh">
			<header>Header</header>
			<nav>Nav</nav>
			<main>Main</main>
			<aside>Aside</aside>
			<footer>Footer</footer>
		</RuiLayout>
	))
	.add('Morisot', () => (
		<RuiLayout type="morisot">
			<header>Header</header>
			<nav>Nav</nav>
			<main>Main</main>
			<aside>Aside</aside>
			<footer>Footer</footer>
		</RuiLayout>
	))
	.add('Rembrandt', () => (
		<RuiLayout type="rembrandt">
			<header>Header</header>
			<nav>Nav</nav>
			<main>Main</main>
			<aside>Aside</aside>
			<footer>Footer</footer>
		</RuiLayout>
	));

