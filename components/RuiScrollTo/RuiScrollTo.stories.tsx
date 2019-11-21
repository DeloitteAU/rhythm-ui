import React, {Fragment} from 'react';
import {storiesOf} from '@storybook/react';
import {text, boolean, radios} from '@storybook/addon-knobs';
import {register} from './src';
import Readme from './readme.md';

register();

storiesOf('RuiScrollTo', module)
	.addParameters({
		readme: {
			sidebar: Readme,
		},
	})
	.add('Basic Scroll', () => (
		<>
			<rui-scroll-to>
				<a href="#id-example" slot="scroll-trigger">Click to scroll</a>
			</rui-scroll-to>
			<div style={{height: '1000px', background: '#333'}} />
			<div id="id-example" style={{border: '2px solid red'}}>target</div>
			<div style={{height: '1000px', background: '#333'}} />
		</>
	))
	.add('Scroll with offset', () => (
		<>
			<rui-scroll-to to="#id-example" offset={-50}>
				<a href="#id-example" slot="scroll-trigger">Click to scroll</a>
			</rui-scroll-to>
			<div style={{height: '1000px', background: '#333'}} />
			<div id="id-example" style={{border: '2px solid red'}}>target with -50 offset</div>
			<div style={{height: '1000px', background: '#333'}} />
		</>
	))
	.add('Scroll to top', () => {
		return (
			<Fragment>
				<p id="top">Back to top button is down below</p>
				<div style={{height: '1000px', background: '#333'}} />
				<p>rui-scroll-to containing text and and icon</p>
				<rui-scroll-to>
					<a href="#top" slot="scroll-trigger">
						<span className="rui-scroll-to__text-content" style={{
							marginRight: '0.25em',
						}}>
							Back to top
						</span>
						<span className="rui-scroll-to__icon-container" style={{
							display: 'inline-flex',
							width: '1.75em',
							height: '1.75em',
							background: 'currentColor',
							borderRadius: '50%',
							justifyContent: 'center',
							alignItems: 'center',
						}}>
							<svg width="8px" height="5px" viewBox="0 0 8 5" version="1.1" xmlns="http://www.w3.org/2000/svg" className="rui-scroll-to__icon" style={{
									transform: 'rotate(180deg)',
								}}>
								<g stroke="none" stroke-width="1" fill-rule="evenodd">
									<g transform="translate(-4.000000, -6.000000)" fill-rule="nonzero">
										<path d="M7.99975,10.74975 C7.80775,10.74975 7.61575,10.67675 7.46975,10.52975 L4.21975,7.27975 C3.92675,6.98675 3.92675,6.51275 4.21975,6.21975 C4.51275,5.92675 4.98675,5.92675 5.27975,6.21975 L7.99975,8.93875 L10.71975,6.21975 C11.01275,5.92675 11.48675,5.92675 11.77975,6.21975 C12.07275,6.51275 12.07275,6.98675 11.77975,7.27975 L8.52975,10.52975 C8.38375,10.67675 8.19175,10.74975 7.99975,10.74975" fill="#FFF"></path>
									</g>
								</g>
							</svg>
						</span>
					</a>
				</rui-scroll-to>

				<p>rui-scroll-to containing an icon only</p>
				<rui-scroll-to>
					<a href="#top" slot="scroll-trigger" style={{
									fontSize: '28px',
								}}>
						<span className="rui-scroll-to__icon-container" style={{
								display: 'inline-flex',
								width: '1.75em',
								height: '1.75em',
								background: 'currentColor',
								borderRadius: '50%',
								justifyContent: 'center',
								alignItems: 'center',
							}}>
							<svg width="8px" height="5px" viewBox="0 0 8 5" version="1.1" xmlns="http://www.w3.org/2000/svg" className="rui-scroll-to__icon" style={{
										transform: 'rotate(180deg)',
									}}>
								<g stroke="none" stroke-width="1" fill-rule="evenodd">
									<g transform="translate(-4.000000, -6.000000)" fill-rule="nonzero">
										<path d="M7.99975,10.74975 C7.80775,10.74975 7.61575,10.67675 7.46975,10.52975 L4.21975,7.27975 C3.92675,6.98675 3.92675,6.51275 4.21975,6.21975 C4.51275,5.92675 4.98675,5.92675 5.27975,6.21975 L7.99975,8.93875 L10.71975,6.21975 C11.01275,5.92675 11.48675,5.92675 11.77975,6.21975 C12.07275,6.51275 12.07275,6.98675 11.77975,7.27975 L8.52975,10.52975 C8.38375,10.67675 8.19175,10.74975 7.99975,10.74975" fill="#FFF"></path>
									</g>
								</g>
							</svg>
						</span>
					</a>
				</rui-scroll-to>
			</Fragment>
		)
	})
	.add('Jump to target', () => (
		<>
			<rui-scroll-to disable-animation to="#id-example" offset={-50}>
				<a href="#id-example" slot="scroll-trigger">Click to scroll</a>
			</rui-scroll-to>
			<div style={{height: '1000px', background: '#333'}} />
			<div id="id-example" style={{border: '2px solid red'}}>target with -50 offset</div>
			<div style={{height: '1000px', background: '#333'}} />
		</>
	))
	.add('Scroll within scroll', () => (
		<>
			<rui-scroll-to scroll-container="#scroll-container" to="#scroll-within-scroll-example">
				<a href="#scroll-container" slot="scroll-trigger">Scroll within scroll</a>
			</rui-scroll-to>
			<div style={{height: '1000px', background: '#333'}} />
			<div id="scroll-container" style={{height: '100px', border: '1px solid red', overflow: 'scroll'}}>
				<p>Target is 1000px below</p>
				<div style={{height: '2000px'}} />
				<div id="scroll-within-scroll-example" style={{border: '2px solid red'}}>target</div>
			</div>
		</>
	));
