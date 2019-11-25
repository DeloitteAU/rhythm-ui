/* eslint @typescript-eslint/explicit-function-return-type: 0 */
/**
* Copyright Deloitte Digital 2019
*
* This source code is licensed under the BSD-3-Clause license found in the
* LICENSE file in the root directory of this source tree.
*/

import '../src';
import TestUtils from '../../../TestUtils';

const title = '<h2 slot="heading">accordion</h2>';
const button = '<button id="button" slot="button-toggle">button</button>';
const element1 = `<rui-accordion-item open id="el1">
					<span slot="summary-content">title1</span>
					<p id="content1" slot="details-content">content1</p>
				</rui-accordion-item>`;
const element2 = `<rui-accordion-item id="el2">
					<span slot="summary-content">title2</span>
					<p id="content2"  slot="details-content">content2</p>
				</rui-accordion-item>`;
const element3 = `<rui-accordion-item id="el3">
					<span slot="summary-content">title3</span>
					<p id="content3"  slot="details-content">content3</p>
				</rui-accordion-item>`;

const awaitAnimationCompletion = new Promise((resolve) => {
	setTimeout(() => {
		resolve(true);
	}, 1000)
})

const keyPress = (key) => {
	const event = document.createEvent('Event');
	event.keyCode = key;
	event.key = key;
	event.initEvent('keydown');
	document.dispatchEvent(event);
}

describe('RuiAccordion', () => {

	it('Renders', async () => {
		const ele = await TestUtils.render('rui-accordion', {}, '');

		expect(ele).toBeDefined();
		expect(ele.shadowRoot).toBeDefined();
	})
	it('Renders all slot elements correctly', async () => {
		const ele = await TestUtils.render('rui-accordion', 	{}, `${title}${button}${element1}${element2}`);

		expect(ele).toBeDefined();
		expect(ele.shadowRoot).toBeDefined();

		expect(ele.innerHTML.includes('accordion')).toBeTruthy();
		expect(ele.innerHTML.includes('button')).toBeTruthy();
		expect(ele.innerHTML.includes('title1')).toBeTruthy();
		expect(ele.innerHTML.includes('content1')).toBeTruthy();
		expect(document.getElementById( 'content1' ).offsetParent).not.toEqual(null); // Using offsetParent to evaluate visibility of element
		expect(ele.innerHTML.includes('title2')).toBeTruthy();
		expect(ele.innerHTML.includes('content2')).toBeTruthy();
		expect(document.getElementById( 'content2' ).offsetParent).toEqual(null);
	})
	it('Works with single behaviour', async () => {
		const ele = await TestUtils.render('rui-accordion', 	{behaviour:'single'}, `${element1}${element2}`);
		const el1 = document.getElementById( 'el1' );
		const el2 = document.getElementById( 'el2' );

		expect(ele).toBeDefined();
		expect(ele.shadowRoot).toBeDefined();

		expect(el1.hasAttribute('open')).toBeTruthy();
		expect(el2.hasAttribute('open')).toBeFalsy();

		// Open el2
		const triggerEl = el2.shadowRoot.querySelector('button');

		await triggerEl.click();
		await awaitAnimationCompletion;

		expect(el1.hasAttribute('open')).toBeFalsy();
		expect(el2.hasAttribute('open')).toBeTruthy();
	})
	it('Works with multiple behaviour', async () => {
		const ele = await TestUtils.render('rui-accordion', 	{behaviour:'multiple'}, `${element1}${element2}`);
		const el1 = document.getElementById( 'el1' );
		const el2 = document.getElementById( 'el2' );

		expect(ele).toBeDefined();
		expect(ele.shadowRoot).toBeDefined();

		expect(el1.hasAttribute('open')).toBeTruthy();
		expect(el2.hasAttribute('open')).toBeFalsy();

		// Open el2
		const triggerEl = el2.shadowRoot.querySelector('button');

		await triggerEl.click();
		await awaitAnimationCompletion;

		expect(el1.hasAttribute('open')).toBeTruthy();
		expect(el2.hasAttribute('open')).toBeTruthy();
	})
	it('Can use button to open/close all', async () => {
		const ele = await TestUtils.render('rui-accordion', 	{}, `${button}${element1}${element2}`);
		const btn = document.getElementById( 'button' );
		const el1 = document.getElementById( 'el1' );
		const el2 = document.getElementById( 'el2' );

		expect(ele).toBeDefined();
		expect(ele.shadowRoot).toBeDefined();

		expect(el1.hasAttribute('open')).toBeTruthy();
		expect(el2.hasAttribute('open')).toBeFalsy();

		// Open All
		btn.click();
		await awaitAnimationCompletion;
		expect(el1.hasAttribute('open')).toBeTruthy();
		expect(el2.hasAttribute('open')).toBeTruthy();

		// Close All
		btn.click();
		await awaitAnimationCompletion;
		expect(el1.hasAttribute('open')).toBeFalsy();
		expect(el2.hasAttribute('open')).toBeFalsy();

	})
	it('Has the correct a11y behaviour', async () => {
		const ele = await TestUtils.render('rui-accordion', 	{}, `${element1}${element2}${element3}`);
		const el1 = document.getElementById( 'el1' );
		const el2 = document.getElementById( 'el2' );
		const el3 = document.getElementById( 'el3' );

		expect(ele).toBeDefined();
		expect(ele.shadowRoot).toBeDefined();


		el1.focus()
		expect(document.activeElement).toBe(el1);

		// // Tab
		// TODO: Find out how to mock keypress events and manage new focused elements
		// expect(document.activeElement).toBe(el2);

		// // Shift + Tab
		// // Arrow Down
		// // Arrow Up
		// // Home
		// // End
	});

});
