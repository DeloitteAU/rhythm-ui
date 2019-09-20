import React from 'react';
import {storiesOf} from '@storybook/react';
import {register} from './src';
import Readme from './readme.md';

register();

storiesOf('Layout', module)
	.addParameters({
		readme: {
			// Show readme at the addons panel
			sidebar: Readme,
		},
	})
	.add('Layout module with Types', () => (
		<rui-layout >
			<header> Header </header>
			<main> Main </main>
			<footer> Footer </footer>
		</rui-layout>

	))
	.add('Monet (Default)', () => (
		<rui-layout type="monet">
			<header> Header </header>
			<main> Main </main>
			<footer> Footer </footer>
		</rui-layout>
	))
	.add('Picasso', () => (
		<rui-layout type="picasso">
			<header>Header</header>
			<nav>Nav</nav>
			<main>Main</main>
			<footer>Footer</footer>
		</rui-layout>
	))
	.add('Da Vinchi', () => (
		<rui-layout type="davinci">
			<header>Header</header>
			<nav>Nav</nav>
			<main>Main</main>
			<footer>Footer</footer>
		</rui-layout>
	))
	.add('Van Gogh', () => (
		<rui-layout type="vangogh">
			<header>Header</header>
			<nav>Nav</nav>
			<main>Main</main>
			<aside>Aside</aside>
			<footer>Footer</footer>
		</rui-layout>
	))
	.add('Morisot', () => (
		<rui-layout type="morisot">
			<header>Header</header>
			<nav>Nav</nav>
			<main>Main</main>
			<aside>Aside</aside>
			<footer>Footer</footer>
		</rui-layout>
	))
	.add('Rembrandt', () => (
		<rui-layout type="rembrandt">
			<header>Header</header>
			<nav>Nav</nav>
			<main>Main</main>
			<aside>Aside</aside>
			<footer>Footer</footer>
		</rui-layout>
	));

