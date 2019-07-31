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
	beforeEach(() => {
		window.scrollTo(0,0);
	});

	it('Renders', async () => {
		const ele = await TestUtils.render('rui-scroll-to', {}, '');
		expect(ele).toBeDefined();

		expect(ele.shadowRoot).toBeDefined();
	});

	it('Displays slotted trigger', async () => {
		const ele = await TestUtils.render('rui-scroll-to', {}, `
		<button id="trigger" slot="scroll-trigger">Trigger</button>`);
		
		const slot = ele.shadowRoot.querySelector('[name="scroll-trigger"]') as HTMLSlotElement;
		const trigger = slot.assignedNodes()[0] as HTMLElement;

		expect(trigger.getAttribute('id')).toEqual('trigger')
	});

	it('scrolls to top by default', async () => {
		// prepare test env
		document.body.innerHTML = `
			<div style="height: 1000px; background: #333"></div>
			<rui-scroll-to>
				<button id="trigger" slot="scroll-trigger">Click to scroll</button>
			</rui-scroll-to>
		`;
		
		await TestUtils.waitForComponentToRender('rui-scroll-to');
		

		const trigger = document.querySelector('#trigger') as HTMLElement;

		// scroll down to where button is
		window.scrollTo(0, trigger.getBoundingClientRect().top + window.pageYOffset);
		// expect to no longer be at the top of the window
		expect(window.scrollY).toBeGreaterThan(0);
		await TestUtils.wait(500)
		
		// trigger the scroll to element
		await trigger.click();
		await TestUtils.wait(500)

		// expect to be scrolled back to the top
		expect(window.scrollY).toEqual(0);
	})

	it('scrolls to element given by to attribute', async () => {
		// prepare test env
		document.body.innerHTML = `
			<rui-scroll-to to="#target">
				<button id="trigger" slot="scroll-trigger">Click to scroll</button>
			</rui-scroll-to>
			<div style="height: 1000px; background: #333"></div>
			<div id="target" style="border: 2px solid red">target</div>
			<div style="height: 1000px; background: #333"></div>
			
		`;

		await TestUtils.waitForComponentToRender('rui-scroll-to');

		const trigger = document.querySelector('#trigger') as HTMLElement;
		const target = document.querySelector('#target') as HTMLElement;
		const targetYcoord = target.getBoundingClientRect().top + window.pageYOffset;

		expect(window.scrollY).toEqual(0);
		await trigger.click();
		await TestUtils.wait(1000);
		expect(window.scrollY).toEqual(targetYcoord);
	})

	// scrolls to element within another element via 'scroll-container' attribute
	it('scrolls to element within another scrollable elemenet via "scroll-container" attribute ', async () => {
		document.body.innerHTML = `
			<rui-scroll-to scroll-container="#scroll-container" to="#target">
				<button slot="scroll-trigger">Scroll within scroll</button>
			</rui-scroll-to>
			<div style="height: 300px; background: #333"></div>
			<div id="scroll-container" style="height: 100px; border: 1px solid red; overflow: scroll">
				<p>Target is 1000px below</p>
				<div style="height: 1000px;"></div>
				<div id="target" style="border: 2px solid red">target</div>
				<div style="height: 1000px;"></div>
			</div>
		`
	})


	it('respects no-smooth-scroll attribute', async () => {
		// prepare test env
		document.body.innerHTML = `
			<rui-scroll-to no-smooth-scroll to="#target">
				<button id="trigger" slot="scroll-trigger">Click to scroll</button>
			</rui-scroll-to>
			<div style="height: 1000px; background: #333"></div>
			<div id="target" style="border: 2px solid red">target</div>
			<div style="height: 1000px; background: #333"></div>
		`;

		await TestUtils.waitForComponentToRender('rui-scroll-to');

		const trigger = document.querySelector('#trigger') as HTMLElement;
		const target = document.querySelector('#target') as HTMLElement;
		const targetYcoord = target.getBoundingClientRect().top + window.pageYOffset;

		expect(window.scrollY).toEqual(0);
		await trigger.click();
		await TestUtils.wait(0);
		expect(window.scrollY).toEqual(targetYcoord);
	})
});
