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
const button = '<button slot="button-toggle">button</button>';
const el1 = `<rui-accordion-item open id="el1">
					<span slot="summary-content">title1</span>
					<p id="content1" slot="details-content">content1</p>
				</rui-accordion-item>`;
const el2 = `<rui-accordion-item id="el2">
					<span slot="summary-content">title2</span>
					<p id="content2"  slot="details-content">content2</p>
				</rui-accordion-item>`;
const el3 = `<rui-accordion-item id="el3">
					<span slot="summary-content">title3</span>
					<p id="content3"  slot="details-content">content3</p>
				</rui-accordion-item>`;

describe('RuiAccordion', () => {

	it('Renders', async () => {
		const ele = await TestUtils.render('rui-accordion', {}, '');

		expect(ele).toBeDefined();
		expect(ele.shadowRoot).toBeDefined();
	})
	it('Renders all slot elements correctly', async () => {
		const ele = await TestUtils.render('rui-accordion', 	{}, `${title}${button}${el1}${el2}`);

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
		const ele = await TestUtils.render('rui-accordion', 	{}, `${el1}${el2}`);

		expect(ele).toBeDefined();
		expect(ele.shadowRoot).toBeDefined();

		expect(document.getElementById( 'content1' ).offsetParent).not.toEqual(null); // Using offsetParent to evaluate visibility of element
		expect(document.getElementById( 'content2' ).offsetParent).toEqual(null);
	})
	it('Works with multiple behaviour', async () => {
		const ele = await TestUtils.render('rui-accordion', {}, '');

		expect(ele).toBeDefined();
		expect(ele.shadowRoot).toBeDefined();
	})
	it('Can use button to open/close all', async () => {
		const ele = await TestUtils.render('rui-accordion', {}, '');

		expect(ele).toBeDefined();
		expect(ele.shadowRoot).toBeDefined();
	})
	it('Has the correct a11y behaviour', async () => {
		const ele = await TestUtils.render('rui-accordion', {}, '');

		expect(ele).toBeDefined();
		expect(ele.shadowRoot).toBeDefined();
	});

});
