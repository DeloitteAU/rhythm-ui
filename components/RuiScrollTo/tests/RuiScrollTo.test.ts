/* eslint @typescript-eslint/explicit-function-return-type: 0 */
/**
* Copyright Deloitte Digital 2019
*
* This source code is licensed under the BSD-3-Clause license found in the
* LICENSE file in the root directory of this source tree.
*/

import '../src';
import TestUtils from '../../../TestUtils';

describe('RuiScrollTo', () => {

	it('Renders', async () => {
		const ele = await TestUtils.render('rui-scroll-to', {}, '');
		expect(ele).toBeDefined();

		expect(ele.shadowRoot).toBeDefined();
	});


	// displays slotted content
	it('Displays slotted trigger', async () => {
		const ele = await TestUtils.render('rui-scroll-to', {}, `
		<button id="trigger" slot="scroll-trigger">Trigger</button>`);
		
		const slot = ele.shadowRoot.querySelector('[name="scroll-trigger"]') as HTMLSlotElement;
		const trigger = slot.assignedNodes()[0] as HTMLElement;

		expect(trigger.getAttribute('id')).toEqual('trigger')
	});

	// scrolls to top by default
	// 

	// scrolls to element given by 'to' attribute

	// scrolls to element within another element via 'scroll-container' attribute

	// respects no-smooth-scroll attribute

});
