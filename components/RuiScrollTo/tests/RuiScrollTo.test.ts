/* eslint @typescript-eslint/explicit-function-return-type: 0 */
/**
* Copyright Deloitte Digital 2019
*
* This source code is licensed under the BSD-3-Clause license found in the
* LICENSE file in the root directory of this source tree.
*/

import '../src';
import TestUtils from '../../../TestUtils';

// check whether has scrolled to bottom of page
const  hasScrolledToBottom = () => {
	let scrollY = 0;
	if( typeof( window.pageYOffset ) === 'number' ) {
		scrollY = window.pageYOffset;
	} else if( document.body && ( document.body.scrollLeft || document.body.scrollTop ) ) {
		scrollY = document.body.scrollTop;
	}
	
	const docHeight =  Math.max(
		document.body.scrollHeight, document.documentElement.scrollHeight,
		document.body.offsetHeight, document.documentElement.offsetHeight,
		document.body.clientHeight, document.documentElement.clientHeight
	);

	return docHeight <= (scrollY + window.innerHeight)
}



// returns a promise for when the scroll is complete
const onScrollComplete = (targetYCoord, timeout = 1000) => {
	return new Promise((resolve, reject) => {
		let timeoutCount = 0;
		const interval = setInterval(() => {
			if (window.scrollY > targetYCoord - 1 && window.scrollY < targetYCoord + 1) {
				clearInterval(interval);
				resolve();
			} else if (hasScrolledToBottom()) {
				clearInterval(interval);
				resolve();
			} else if (timeoutCount >= timeout) {
				clearInterval(interval);
				reject('Timeout exceeded')
			} else {
				timeoutCount += 100;
			}
		}, 100)
	})
} 

describe('RuiScrollTo', () => {
	beforeEach(async () => {
		window.scrollTo(0,0);
		await onScrollComplete(0)
	})
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
			<div style="height: 3000px; background: #333"></div>
			<rui-scroll-to>
				<button id="trigger" slot="scroll-trigger">Click to scroll</button>
			</rui-scroll-to>
			<div style="height: 3000px; background: #333"></div>
		`;
		
		await TestUtils.waitForComponentToRender('rui-scroll-to');

		const trigger = document.querySelector('#trigger') as HTMLElement;

		// scroll down to where button is
		const triggerPos = trigger.getBoundingClientRect().top + window.pageYOffset;
		window.scrollTo(0, triggerPos);

		await onScrollComplete(triggerPos)

		// expect to no longer be at the top of the window
		expect(window.scrollY).toBeGreaterThan(0);
		
		// trigger the scroll to element
		trigger.click();
		await onScrollComplete(0)

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
			<div style="height: 3000px; background: #333"></div>
			
		`;

		await TestUtils.waitForComponentToRender('rui-scroll-to');

		const trigger = document.querySelector('#trigger') as HTMLElement;
		const target = document.querySelector('#target') as HTMLElement;
		

		expect(window.scrollY).toEqual(0);
		trigger.click();
		await TestUtils.wait(1000);
		const targetTop = target.getBoundingClientRect().top;

		expect(targetTop).toBeGreaterThan(-1);
		expect(targetTop).toBeLessThan(1);
	})

	it('scrolls to element given by to href attribute on trigger slot element', async () => {
		// prepare test env
		document.body.innerHTML = `
			<rui-scroll-to>
				<a id="trigger" slot="scroll-trigger" href="#target">Click to scroll</a>
			</rui-scroll-to>
			<div style="height: 1000px; background: #333"></div>
			<div id="target" style="border: 2px solid red">target</div>
			<div style="height: 3000px; background: #333"></div>
			
		`;

		await TestUtils.waitForComponentToRender('rui-scroll-to');

		const trigger = document.querySelector('#trigger') as HTMLElement;
		const target = document.querySelector('#target') as HTMLElement;
		

		expect(window.scrollY).toEqual(0);
		await trigger.click();
		await TestUtils.wait(1000);
		const targetTop = target.getBoundingClientRect().top;

		expect(targetTop).toBeGreaterThan(-1);
		expect(targetTop).toBeLessThan(1);
	})

	it('scrolls to element within another scrollable elemenet via "scroll-container" attribute ', async () => {
		document.body.innerHTML = `
			<rui-scroll-to scroll-container="#scroll-container" to="#target">
				<button id="trigger" slot="scroll-trigger">Scroll within scroll</button>
			</rui-scroll-to>
			<div style="height: 1000px; background: #333"></div>
			<div id="scroll-container" style="height: 100px; border: 1px solid red; overflow: scroll">
				<p>Target is 1000px below</p>
				<div style="height: 1000px;"></div>
				<div id="target" style="border: 2px solid red">target</div>
				<div style="height: 1000px;"></div>
			</div>
			<div style="height: 3000px; background: #333"></div>
		`

		await TestUtils.waitForComponentToRender('rui-scroll-to');

		const trigger = document.querySelector('#trigger') as HTMLElement;
		const target = document.querySelector('#target') as HTMLElement;

		trigger.click()
		await TestUtils.wait(2000)
		const targetTop = target.getBoundingClientRect().top;

		expect(targetTop).toBeGreaterThan(-1);
		expect(targetTop).toBeLessThan(1);
	})


	it('respects disable-animation attribute', async () => {
		// prepare test env
		document.body.innerHTML = `
			<rui-scroll-to to="#target" disable-animation>
				<button id="trigger" slot="scroll-trigger">Click to scroll</button>
			</rui-scroll-to>
			<div style="height: 1000px; background: #333"></div>
			<div id="target" style="border: 2px solid red">target</div>
			<div style="height: 3000px; background: #333"></div>
			
		`;

		await TestUtils.waitForComponentToRender('rui-scroll-to');

		const trigger = document.querySelector('#trigger') as HTMLElement;
		const target = document.querySelector('#target') as HTMLElement;

		expect(window.scrollY).toEqual(0);
		trigger.click();
		await TestUtils.wait(0);
		const targetTop = target.getBoundingClientRect().top;

		expect(targetTop).toBeGreaterThan(-1);
		expect(targetTop).toBeLessThan(1);
	})
});
