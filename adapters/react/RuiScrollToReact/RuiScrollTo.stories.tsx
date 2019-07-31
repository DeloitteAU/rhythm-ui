import React from 'react';
import {storiesOf} from '@storybook/react';
import RuiScrollTo from './src';
import Readme from './README.md';

storiesOf('RuiScrollTo', module)
	.addParameters({
		readme: {
			sidebar: Readme,
		},
	})
	.add('Basic Scroll', () => (
		<>
			<RuiScrollTo to="#id-example">
				<button type="button">Click to scroll</button>
			</RuiScrollTo>
			<div style={{height: '1000px', background: '#333'}} />
			<div id="id-example" style={{border: '2px solid red'}}>target</div>
			<div style={{height: '1000px', background: '#333'}} />
		</>
	))
	.add('Scroll with offset', () => (
		<>
			<RuiScrollTo to="#id-example" offset={-50}>
				<button type="button">Click to scroll</button>
			</RuiScrollTo>
			<div style={{height: '1000px', background: '#333'}} />
			<div id="id-example" style={{border: '2px solid red'}}>target with -50 offset</div>
			<div style={{height: '1000px', background: '#333'}} />
		</>
	))
	.add('Scroll to top', () => (
		<>
			<p>Back to top button is down below</p>
			<div style={{height: '1000px', background: '#333'}} />
			<RuiScrollTo>
				<button type="button">Back to top</button>
			</RuiScrollTo>
		</>
	))
	.add('Jump to target', () => (
		<>
			<RuiScrollTo noSmoothScroll to="#id-example" offset={-50}>
				<button type="button">Click to scroll</button>
			</RuiScrollTo>
			<div style={{height: '1000px', background: '#333'}} />
			<div id="id-example" style={{border: '2px solid red'}}>target with -50 offset</div>
			<div style={{height: '1000px', background: '#333'}} />
		</>
	))
	.add('Scroll within scroll', () => (
		<>
			<RuiScrollTo scrollContainer="#scroll-container" to="#scroll-within-scroll-example">
				<button type="button">Scroll within scroll</button>
			</RuiScrollTo>
			<div style={{height: '1000px', background: '#333'}} />
			<div id="scroll-container" style={{height: '100px', border: '1px solid red', overflow: 'scroll'}}>
				<p>Target is 1000px below</p>
				<div style={{height: '2000px'}} />
				<div id="scroll-within-scroll-example" style={{border: '2px solid red'}}>target</div>
			</div>
		</>
	));
