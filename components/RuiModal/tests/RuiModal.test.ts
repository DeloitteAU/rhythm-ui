/* eslint @typescript-eslint/explicit-function-return-type: 0 */
/**
* Copyright Deloitte Digital 2019
*
* This source code is licensed under the BSD-3-Clause license found in the
* LICENSE file in the root directory of this source tree.
*/

import '../src';
import TestUtils from '../../../TestUtils';

describe('RuiModal', () => {

	it('Renders', async () => {
		const ele = await TestUtils.render('rui-modal', {open: true}, '');
		expect(ele).toBeDefined();

		expect(ele.shadowRoot).toBeDefined();
	});
	
	it('Renders provided heading', async () => {
		const ele = await TestUtils.render('rui-modal', {open: true}, `
			<h2 slot="heading">Modal Heading</h2>
			<div slot="detail">
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</p>
			</div>
		`);
		
		const headingEl = ele.querySelector('[slot="heading"]');
		const headingSlot = ele.shadowRoot.querySelector('[name="heading"]') as HTMLSlotElement;

		expect(headingSlot.assignedNodes()[0]).toEqual(headingEl);
	});

	it('Renders provided detail', async () => {
		const ele = await TestUtils.render('rui-modal', {open: true}, `
			<h2 slot="heading">Modal Heading</h2>
			<div slot="detail">
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</p>
			</div>
		`);
		
		const detailEl = ele.querySelector('[slot="detail"]');
		const detailSlot = ele.shadowRoot.querySelector('[name="detail"]') as HTMLSlotElement;

		expect(detailSlot.assignedNodes()[0]).toEqual(detailEl);
	});

	it('Renders provided cancel', async () => {
		const ele = await TestUtils.render('rui-modal', {open: true}, `
			<h2 slot="heading">Modal Heading</h2>
			<div slot="detail">
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</p>
			</div>
			<button slot="cancel">Cancel</button>
		`);
		
		const cancelEl = ele.querySelector('[slot="cancel"]');
		const cancelSlot = ele.shadowRoot.querySelector('[name="cancel"]') as HTMLSlotElement;

		expect(cancelSlot.assignedNodes()[0]).toEqual(cancelEl);
	});

	it('Renders provided confirm', async () => {
		const ele = await TestUtils.render('rui-modal', {open: true}, `
			<h2 slot="heading">Modal Heading</h2>
			<div slot="detail">
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</p>
			</div>
			<button slot="confirm">Cancel</button>
		`);
		
		const confirmEl = ele.querySelector('[slot="confirm"]');
		const confirmSlot = ele.shadowRoot.querySelector('[name="confirm"]') as HTMLSlotElement;

		expect(confirmSlot.assignedNodes()[0]).toEqual(confirmEl);
	});

	it('Renders provided close', async () => {
		const ele = await TestUtils.render('rui-modal', {open: true}, `
			<h2 slot="heading">Modal Heading</h2>
			<div slot="detail">
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</p>
			</div>
			<button slot="close">Close</button>
		`);
		
		const closeEl = ele.querySelector('[slot="close"]');
		const closeSlot = ele.shadowRoot.querySelector('[name="close"]') as HTMLSlotElement;

		expect(closeSlot.assignedNodes()[0]).toEqual(closeEl);
	});

	it('Renders close button if no actions are provided', async () => {
		const ele = await TestUtils.render('rui-modal', {open: true}, `
			<h2 slot="heading">Modal Heading</h2>
			<div slot="detail">
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</p>
			</div>
		`);
		
		const closeBtn = ele.shadowRoot.querySelector('.close-btn');
		expect(closeBtn).not.toEqual(null);
	});


	it('Close button should close modal when clicked', async () => {
		const ele = await TestUtils.render('rui-modal', {open: true}, `
			<h2 slot="heading">Modal Heading</h2>
			<div slot="detail">
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</p>
			</div>
		`);

		const displayStyleBefore = window.getComputedStyle(ele.shadowRoot.querySelector('.modal-container')).display;
		expect(displayStyleBefore).not.toEqual('none');
		
		const closeBtn = ele.shadowRoot.querySelector('.close-btn') as HTMLElement;
		await closeBtn.click();

		expect(ele.getAttribute('open')).toEqual(null);
		const displayStyleAfter = window.getComputedStyle(ele.shadowRoot.querySelector('.modal-container')).display;
		expect(displayStyleAfter).toEqual('none');
	})

	it('Should close modal when clicking outside modal', async () => {
		const ele = await TestUtils.render('rui-modal', {open: true}, `
			<h2 slot="heading">Modal Heading</h2>
			<div slot="detail">
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</p>
			</div>
		`);

		const displayStyleBefore = window.getComputedStyle(ele.shadowRoot.querySelector('.modal-container')).display;
		expect(displayStyleBefore).not.toEqual('none');
		
		const modalContainer = ele.shadowRoot.querySelector('.modal-container') as HTMLElement;
		await modalContainer.click();

		expect(ele.getAttribute('open')).toEqual(null);
		const displayStyleAfter = window.getComputedStyle(ele.shadowRoot.querySelector('.modal-container')).display;
		expect(displayStyleAfter).toEqual('none');
	})

	it('Should not close modal when clicked outside when no-click-outside-close attribute is given', async () => {
		const ele = await TestUtils.render('rui-modal', {open: true, 'no-click-outside-close': true}, `
			<h2 slot="heading">Modal Heading</h2>
			<div slot="detail">
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</p>
			</div>
		`);

		const displayStyleBefore = window.getComputedStyle(ele.shadowRoot.querySelector('.modal-container')).display;
		expect(displayStyleBefore).not.toEqual('none');
		
		const modalContainer = ele.shadowRoot.querySelector('.modal-container') as HTMLElement;
		await modalContainer.click();

		expect(ele.getAttribute('open')).not.toEqual(null);
		const displayStyleAfter = window.getComputedStyle(ele.shadowRoot.querySelector('.modal-container')).display;
		expect(displayStyleAfter).not.toEqual('none');
	})

	it('Should close modal when pressing esc', async () => {
		const ele = await TestUtils.render('rui-modal', {open: true}, `
			<h2 slot="heading">Modal Heading</h2>
			<div slot="detail">
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</p>
			</div>
		`);

		const displayStyleBefore = window.getComputedStyle(ele.shadowRoot.querySelector('.modal-container')).display;
		expect(displayStyleBefore).not.toEqual('none');

		const escEvent = new Event('keydown');
		escEvent.keyCode = 27;
		await document.dispatchEvent(escEvent)

		expect(ele.getAttribute('open')).toEqual(null);
		const displayStyleAfter = window.getComputedStyle(ele.shadowRoot.querySelector('.modal-container')).display;
		expect(displayStyleAfter).toEqual('none');
	})

	it('Should not close modal when pressing esc when no-esc-btn-close attribute is given', async () => {
		const ele = await TestUtils.render('rui-modal', {open: true, 'no-esc-btn-close': true}, `
			<h2 slot="heading">Modal Heading</h2>
			<div slot="detail">
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</p>
			</div>
		`);

		const displayStyleBefore = window.getComputedStyle(ele.shadowRoot.querySelector('.modal-container')).display;
		expect(displayStyleBefore).not.toEqual('none');

		const escEvent = new Event('keydown');
		escEvent.keyCode = 27;
		await document.dispatchEvent(escEvent)

		expect(ele.getAttribute('open')).not.toEqual(null);
		const displayStyleAfter = window.getComputedStyle(ele.shadowRoot.querySelector('.modal-container')).display;
		expect(displayStyleAfter).not.toEqual('none');
	})

	it('Fires confirm event when confirm clicked', async () => {
		const ele = await TestUtils.render('rui-modal', {open: true}, `
			<h2 slot="heading">Modal Heading</h2>
			<div slot="detail">
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</p>
			</div>
			<button slot="confirm">Cancel</button>
		`);

		// eslint-disable-next-line no-undef
		const confirmListener = jasmine.createSpy();

		ele.addEventListener('rui-modal-confirm', confirmListener)
		
		const confirmEl = ele.querySelector('[slot="confirm"]');
		await confirmEl.click();

		expect(confirmListener).toHaveBeenCalledTimes(1);
	});
	
	it('Fires cancel event when cancel clicked', async () => {
		const ele = await TestUtils.render('rui-modal', {open: true}, `
			<h2 slot="heading">Modal Heading</h2>
			<div slot="detail">
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</p>
			</div>
			<button slot="cancel">Cancel</button>
		`);

		// eslint-disable-next-line no-undef
		const cancelListener = jasmine.createSpy();

		ele.addEventListener('rui-modal-cancel', cancelListener)
		
		const cancelEl = ele.querySelector('[slot="cancel"]');
		await cancelEl.click();

		expect(cancelListener).toHaveBeenCalledTimes(1);
	});

	it('Fires cancel event when close clicked', async () => {
		const ele = await TestUtils.render('rui-modal', {open: true}, `
			<h2 slot="heading">Modal Heading</h2>
			<div slot="detail">
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</p>
			</div>
		`);

		// eslint-disable-next-line no-undef
		const cancelListener = jasmine.createSpy();

		ele.addEventListener('rui-modal-cancel', cancelListener)
		
		const cancelEl = ele.shadowRoot.querySelector('.close-btn');
		await cancelEl.click();

		expect(cancelListener).toHaveBeenCalledTimes(1);
	});

	it('Should fire cancel event when pressing esc', async () => {
		const ele = await TestUtils.render('rui-modal', {open: true}, `
			<h2 slot="heading">Modal Heading</h2>
			<div slot="detail">
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</p>
			</div>
		`);

		// eslint-disable-next-line no-undef
		const cancelListener = jasmine.createSpy();

		ele.addEventListener('rui-modal-cancel', cancelListener)

		const escEvent = new Event('keydown');
		escEvent.keyCode = 27;
		await document.dispatchEvent(escEvent)

		expect(cancelListener).toHaveBeenCalledTimes(1);
	})

	it('Should fire cancel event when clicking outside modal', async () => {
		const ele = await TestUtils.render('rui-modal', {open: true}, `
			<h2 slot="heading">Modal Heading</h2>
			<div slot="detail">
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</p>
			</div>
		`);

		// eslint-disable-next-line no-undef
		const cancelListener = jasmine.createSpy();

		ele.addEventListener('rui-modal-cancel', cancelListener)
		
		const modalContainer = ele.shadowRoot.querySelector('.modal-container') as HTMLElement;
		await modalContainer.click();

		expect(cancelListener).toHaveBeenCalledTimes(1);
	})
});
