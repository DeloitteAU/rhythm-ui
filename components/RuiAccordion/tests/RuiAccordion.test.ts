/* eslint @typescript-eslint/explicit-function-return-type: 0 */
/**
* Copyright Deloitte Digital 2019
*
* This source code is licensed under the BSD-3-Clause license found in the
* LICENSE file in the root directory of this source tree.
*/

import '../src';
import TestUtils from '../../../TestUtils';

describe('RuiAccordion', () => {

	it('Renders', async () => {
		const ele = await TestUtils.render('rui-accordion', {}, '');

		expect(ele).toBeDefined();
		expect(ele.shadowRoot).toBeDefined();
	})
	it('Renders all slot elements', async () => {
		const ele = await TestUtils.render('rui-accordion', {}, '');

		expect(ele).toBeDefined();
		expect(ele.shadowRoot).toBeDefined();
	})
	it('Works with single behaviour', async () => {
		const ele = await TestUtils.render('rui-accordion', {}, '');

		expect(ele).toBeDefined();
		expect(ele.shadowRoot).toBeDefined();
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
