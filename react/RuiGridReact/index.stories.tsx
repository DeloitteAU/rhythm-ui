import React, {Fragment} from 'react';

import { storiesOf } from '@storybook/react';

// @ts-ignore
import { RuiGrid } from './lib';
import Readme from './README.md';


storiesOf('Grid', module)
	.addParameters({
		readme: {
			// Show readme at the addons panel
			sidebar:  Readme,
		},
	})
	.add('Preset values', () => (
		<Fragment>
			<RuiGrid>
				<div className="s-12">s-12</div>
			</RuiGrid>
			<RuiGrid>
				<div className="s-12 m-6">s-12 m-6</div>
				<div className="s-12 m-6">s-12 m-6</div>
			</RuiGrid>
			<RuiGrid>
				<div className="s-12 m-6 l-4">s-12 m-6 l-4</div>
				<div className="s-12 m-6 l-4">s-12 m-6 l-4</div>
				<div className="s-12 m-6 l-4">s-12 m-6 l-4</div>
			</RuiGrid>
			<RuiGrid>
				<div className="s-12 m-6 l-4 xl-3">s-12 m-6 l-4 xl-3</div>
				<div className="s-12 m-6 l-4 xl-3">s-12 m-6 l-4 xl-3</div>
				<div className="s-12 m-6 l-4 xl-3">s-12 m-6 l-4 xl-3</div>
				<div className="s-12 m-6 l-4 xl-3">The height div will expand with because it has a lot of content
					inside of it.
				</div>
			</RuiGrid>
			<RuiGrid>
				<div className="s-1">s-12</div>
				<div className="s-1">s-12</div>
				<div className="s-1">s-12</div>
				<div className="s-1">s-12</div>
				<div className="s-1">s-12</div>
				<div className="s-1">s-12</div>
				<div className="s-1">s-12</div>
				<div className="s-1">s-12</div>
				<div className="s-1">s-12</div>
				<div className="s-1">s-12</div>
				<div className="s-1">s-12</div>
				<div className="s-1">s-12</div>
			</RuiGrid>
		</Fragment>
	))
	.add('With 6 columns', () => (
		<Fragment>
			<RuiGrid columns="6" className="demo">
				<div></div>
				<div className="s-12 m-6">s-12 m-6</div>
				<div></div>

			</RuiGrid>
		</Fragment>
	))
	.add('Position / Ordering', () => (
		<Fragment>
			<p>  Set start position with prefix p- </p>
			<p> eg. p-s-2  </p>
				<RuiGrid >
				<div className="p-s-4 s-2">p-s-4 s-2</div>
				<div></div>
			</RuiGrid>
		</Fragment>
	));


