import React from 'react';
import {storiesOf} from '@storybook/react';
import {register} from './src';
import Readme from './readme.md';

register();

storiesOf('rui-scroll-to', module)
	.addParameters({
		readme: {
			sidebar: Readme,
		},
	})
	.add('Basic Scroll', () => (
		<>
			<rui-scroll-to to="#id-example">
				<button type="button" slot="scroll-trigger">Click to scroll</button>
			</rui-scroll-to>
			<div style={{height: '1000px', background: '#333'}} />
			<div id="id-example" style={{border: '2px solid red'}}>target</div>
			<div style={{height: '1000px', background: '#333'}} />
		</>
	))
	.add('Scroll with offset', () => (
		<>
			<rui-scroll-to to="#id-example" offset={-50}>
				<button type="button" slot="scroll-trigger">Click to scroll</button>
			</rui-scroll-to>
			<div style={{height: '1000px', background: '#333'}} />
			<div id="id-example" style={{border: '2px solid red'}}>target with -50 offset</div>
			<div style={{height: '1000px', background: '#333'}} />
		</>
	))
	.add('Scroll to top', () => (
		<>
			<p>Back to top button is down below</p>
			<div style={{height: '1000px', background: '#333'}} />
			<rui-scroll-to>
				<button type="button" slot="scroll-trigger">Back to top</button>
			</rui-scroll-to>
		</>
	))
	.add('Jump to target', () => (
		<>
			<rui-scroll-to disable-animation to="#id-example" offset={-50}>
				<button type="button" slot="scroll-trigger">Click to scroll</button>
			</rui-scroll-to>
			<div style={{height: '1000px', background: '#333'}} />
			<div id="id-example" style={{border: '2px solid red'}}>target with -50 offset</div>
			<div style={{height: '1000px', background: '#333'}} />
		</>
	))
	.add('Scroll within scroll', () => (
		<>
			<rui-scroll-to scroll-container="#scroll-container" to="#scroll-within-scroll-example">
				<button type="button" slot="scroll-trigger">Scroll within scroll</button>
			</rui-scroll-to>
			<div style={{height: '1000px', background: '#333'}} />
			<div id="scroll-container" style={{height: '100px', border: '1px solid red', overflow: 'scroll'}}>
				<p>Target is 1000px below</p>
				<div style={{height: '2000px'}} />
				<div id="scroll-within-scroll-example" style={{border: '2px solid red'}}>target</div>
			</div>
		</>
	));
