import React, {Fragment} from 'react';
import {storiesOf} from '@storybook/react';
import {register} from './src';
import Readme from './readme.md';

register();

storiesOf('Grid', module)
	.addParameters({
		readme: {
			// Show readme at the addons panel
			sidebar: Readme,
		},
	})
	.add('Preset values', () => (
		<Fragment>
			<rui-grid>
				<div class="s-12">s-12</div>
			</rui-grid>
			<rui-grid>
				<div class="s-12 m-6">s-12 m-6</div>
				<div class="s-12 m-6">s-12 m-6</div>
			</rui-grid>
			<rui-grid>
				<div class="s-12 m-6 l-4">s-12 m-6 l-4</div>
				<div class="s-12 m-6 l-4">s-12 m-6 l-4</div>
				<div class="s-12 m-6 l-4">s-12 m-6 l-4</div>
			</rui-grid>
			<rui-grid>
				<div class="s-12 m-6 l-4 xl-3">s-12 m-6 l-4 xl-3</div>
				<div class="s-12 m-6 l-4 xl-3">s-12 m-6 l-4 xl-3</div>
				<div class="s-12 m-6 l-4 xl-3">s-12 m-6 l-4 xl-3</div>
				<div class="s-12 m-6 l-4 xl-3">The height div will expand with because it has a lot of content
					inside of it.
				</div>
			</rui-grid>
			<rui-grid>
				<div class="s-1">s-12</div>
				<div class="s-1">s-12</div>
				<div class="s-1">s-12</div>
				<div class="s-1">s-12</div>
				<div class="s-1">s-12</div>
				<div class="s-1">s-12</div>
				<div class="s-1">s-12</div>
				<div class="s-1">s-12</div>
				<div class="s-1">s-12</div>
				<div class="s-1">s-12</div>
				<div class="s-1">s-12</div>
				<div class="s-1">s-12</div>
			</rui-grid>
		</Fragment>
	))
	.add('With 6 columns', () => (
		<Fragment>
			<rui-grid columns="6" class="demo">
				<div />
				<div class="s-12 m-6">s-12 m-6</div>
				<div />

			</rui-grid>
		</Fragment>
	))
	.add('Position / Ordering', () => (
		<Fragment>
			<p>  Set start position with prefix p- </p>
			<p> eg. p-s-2  </p>
			<rui-grid >
				<div class="p-s-4 s-2">p-s-4 s-2</div>
				<div />
			</rui-grid>
		</Fragment>
	));


