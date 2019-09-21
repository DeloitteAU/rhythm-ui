/* eslint @typescript-eslint/explicit-function-return-type: 0 */
/**
* Copyright Deloitte Digital 2019
*
* This source code is licensed under the BSD-3-Clause license found in the
* LICENSE file in the root directory of this source tree.
*/

import '../src';
import TestUtils from '../../../TestUtils';

describe('RuiAlert', () => {

	it('Renders', async () => {
		const ele = await TestUtils.render('rui-alert', {}, '');

		expect(ele).toBeDefined();
		expect(ele.shadowRoot).toBeDefined();
	})
	it('Accepts text', async () => {
		const ele = await TestUtils.render('rui-alert', {}, '<p>Alert</p>');

		expect(ele).toBeDefined();
		expect(ele.shadowRoot).toBeDefined();
		expect(ele.innerHTML.includes('Alert')).toBeTruthy();
		expect(ele.shadowRoot.childElementCount).toBe(2);
	})
	it('Accepts an icon', async () => {
		const ele = await TestUtils.render('rui-alert', {}, '<div slot="icon">Icon</div><p>Alert</p>');

		expect(ele).toBeDefined();
		expect(ele.shadowRoot).toBeDefined();
		expect(ele.innerHTML.includes('Icon')).toBeTruthy();
		expect(ele.innerHTML.includes('Alert')).toBeTruthy();
		expect(ele.shadowRoot.childElementCount).toBe(2);
	})
	it('Accepts types', async () => {
		const ele = await TestUtils.render('rui-alert', {type: 'success'}, '');
		const styles = window.getComputedStyle(ele);

		expect(ele).toBeDefined();
		expect(styles.getPropertyValue('background-color')).toBe('rgb(212, 230, 213)');
	})
	it('Does not accept incorrect types', async () => {
		const ele = await TestUtils.render('rui-alert', {type: 'primary'}, '');
		const styles = window.getComputedStyle(ele);

		expect(ele).toBeDefined();
		expect(styles.getPropertyValue('background-color')).toBe('rgb(231, 235, 247)');
	})
	it('Can be dismissed when dismiss property is set and dismiss slot is passed', async () => {
		const ele = await TestUtils.render('rui-alert', {dismissible: true}, '<p>Alert</p><div slot="dismissible">close</div>');

		expect(ele).toBeDefined();
		expect(ele.shadowRoot).toBeDefined();
		expect(ele.innerHTML.includes('close')).toBeTruthy();
		expect(ele.innerHTML.includes('Alert')).toBeTruthy();
		expect(ele.shadowRoot.childElementCount).toBe(3);
	})
	it('Can not be dismissed when the dismiss slot is passed without the property being set', async () => {
		const ele = await TestUtils.render('rui-alert', {}, '<p>Alert</p><div slot="dismissible">close</div>');

		expect(ele).toBeDefined();
		expect(ele.shadowRoot).toBeDefined();
		expect(ele.innerHTML.includes('Alert')).toBeTruthy();
		expect(ele.shadowRoot.childElementCount).toBe(2);
	});


});
