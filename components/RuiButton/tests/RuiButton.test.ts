/* eslint @typescript-eslint/explicit-function-return-type: 0 */

import '../src';
import {TestUtils} from '../../../TestUtils';

//https://medium.com/@pietmichal/how-to-test-a-web-component-b5d64d5e8bb0

describe('RuiButton', () => {

	it('Renders a button tag', async () => {
		const ele = await TestUtils.render('rui-button', {}, 'Foo Button!');
		expect(ele).toBeDefined();
		expect(ele.shadowRoot).toBeDefined();
		expect(ele.innerHTML.includes('Foo Button!')).toBeTruthy();
		expect(ele.shadowRoot.firstElementChild.tagName.toLowerCase()).toBe('button');
	});

	it('Renders an anchor tag', async () => {
		const ele = await TestUtils.render('rui-button', {href: '#'}, 'Bar Button!');
		expect(ele).toBeDefined();
		expect(ele.shadowRoot).toBeDefined();
		expect(ele.innerHTML.includes('Bar Button!')).toBeTruthy();
		expect(ele.shadowRoot.firstElementChild.tagName.toLowerCase()).toBe('a');
		expect(ele.shadowRoot.firstElementChild.getAttribute('href')).toBe('#');
	});

	it('Renders a disabled button', async () => {
		const ele = await TestUtils.render('rui-button', {disabled: true}, 'Bar Button!');
		expect(ele).toBeDefined();
		expect(ele.shadowRoot).toBeDefined();
		expect(ele.innerHTML.includes('Bar Button!')).toBeTruthy();
		expect(ele.shadowRoot.firstElementChild.tagName.toLowerCase()).toBe('button');
		expect((ele.shadowRoot.firstElementChild as HTMLButtonElement).disabled).toBe(true);
	});

});
