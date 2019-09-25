/* eslint @typescript-eslint/explicit-function-return-type: 0 */
/**
* Copyright Deloitte Digital 2019
*
* This source code is licensed under the BSD-3-Clause license found in the
* LICENSE file in the root directory of this source tree.
*/

import '../src';
import TestUtils from '../../../TestUtils';

describe('RuiBreadcrumbs', () => {

	it('Renders', async () => {
		const element = await TestUtils.render('rui-breadcrumbs', {}, '');
		expect(element).toBeDefined();
		expect(element.shadowRoot).toBeDefined();
	});

	it('Generates a list item element per each anchor element child', async () => {
		const element = await TestUtils.render('rui-breadcrumbs', {}, `
			<a href="/">Link 1</a>
			<a href="/">Link 2</a>
			<a href="/">Link 3</a>
			<a href="/">Link 4</a>
			<a href="/">Link 5</a>
		`);

		const numberaOfListItems = element.shadowRoot.querySelectorAll('li').length;
		expect(numberaOfListItems).toBe(5);
	});

	it('Marks the last anchor element child as a link to the current page', async () => {
		let element = await TestUtils.render('rui-breadcrumbs', {}, `
			<a href="/" class="last">Link 1</a>
		`);

		const current = element.querySelector('.last');
		let attributeValue = current.getAttribute('aria-current');
		expect(attributeValue).toBe('page');

		element = await TestUtils.render('rui-breadcrumbs', {}, `
			<a href="/">Link 1</a>
			<a href="/">Link 2</a>
			<a href="/" class="last">Link 3</a>
		`);

		attributeValue = current.getAttribute('aria-current');
		expect(attributeValue).toBe('page');
	});

	it('Shows a maximum number of anchor element children if specified', async () => {
		const element = await TestUtils.render('rui-breadcrumbs', {max: 2}, `
			<a href="/">Link 1</a>
			<a href="/">Link 2</a>
			<a href="/">Link 3</a>
			<a href="/">Link 4</a>
			<a href="/">Link 5</a>
		`);

		const numberaOfListItems = element.shadowRoot.querySelectorAll('li').length;
		expect(numberaOfListItems).toBe(3);
	});
});