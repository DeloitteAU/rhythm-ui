/* eslint @typescript-eslint/explicit-function-return-type: 0 */
/**
* Copyright Deloitte Digital 2019
*
* This source code is licensed under the BSD-3-Clause license found in the
* LICENSE file in the root directory of this source tree.
*/

import '../src';
import TestUtils from '../../../TestUtils';

describe('RuiPagination', () => {
	it('Renders', async () => {
		const ele = await TestUtils.render('rui-pagination', {}, '');
		expect(ele).toBeDefined();
	});

	it('Renders pagination items correctly', async () => {
		const ele = await TestUtils.render('rui-pagination', {
			'current-page': 3,
			'num-pages': 5
		}, '');
		
		const items = ele.shadowRoot.querySelectorAll('li');
		expect(items.length).toEqual(7) // 5 pages + prev + next

		items.forEach((item, i) => {
			const a = item.querySelector('a');
			const pageNumber = i;

			if (i === 0) {
				expect(a.classList).toContain('pagination-link--previous')
			} else if (i === 6) {
				expect(a.classList).toContain('pagination-link--next')
			} else if (i === 3) {
				expect(a.classList).toContain('pagination-link--current');
				expect(a.textContent).toEqual(`${pageNumber}`)
			} else {
				expect(a.textContent).toEqual(`${pageNumber}`)
			}
		})
	});

	// renders truncation correctly

	it('Renders given next href', async () => {
		const ele = await TestUtils.render('rui-pagination', {
			'current-page': 3,
			'num-pages': 5,
			'next-link': '#next',
		}, '');

		const items = ele.shadowRoot.querySelectorAll('li');
		const nextLink = items[6].querySelector('a');
		expect(nextLink.getAttribute('href')).toEqual('#next')
	});

	it('Renders given prev href', async () => {
		const ele = await TestUtils.render('rui-pagination', {
			'current-page': 3,
			'num-pages': 5,
			'prev-link': '#prev',
		}, '');

		const items = ele.shadowRoot.querySelectorAll('li');
		const nextLink = items[0].querySelector('a');
		expect(nextLink.getAttribute('href')).toEqual('#prev')
	});

	it('Renders given next aria label', async () => {
		const ele = await TestUtils.render('rui-pagination', {
			'current-page': 3,
			'num-pages': 5,
			'next-aria-label': 'custom next label'
		}, '');

		const items = ele.shadowRoot.querySelectorAll('li');
		const nextLink = items[6].querySelector('a');
		expect(nextLink.getAttribute('aria-label')).toEqual('custom next label')
	});

	it('Renders given prev aria label', async () => {
		const ele = await TestUtils.render('rui-pagination', {
			'current-page': 3,
			'num-pages': 5,
			'prev-aria-label': 'custom prev label'
		}, '');

		const items = ele.shadowRoot.querySelectorAll('li');
		const prevLink = items[0].querySelector('a');
		expect(prevLink.getAttribute('aria-label')).toEqual('custom prev label')
	});

	it('Renders generateHref override content', async () => {
		const ele = await TestUtils.render('rui-pagination', {
			'current-page': 3,
			'num-pages': 5,
		}, '');

		ele.generateHref = (pageNumber) => `#${pageNumber}`;
		
		await ele.requestUpdate();

		const items = ele.shadowRoot.querySelectorAll('li');
		items.forEach((item, i) => {
			const a = item.querySelector('a');
			const pageNumber = i;

			// only target pagination number items (non-current, not next, not previous)
			if (i > 0 && i < 6 && i !== 3) {
				expect(a.getAttribute('href')).toEqual(`#${pageNumber}`)
			}
		})
	});

	it('Renders generateLabel override content', async () => {
		const ele = await TestUtils.render('rui-pagination', {
			'current-page': 3,
			'num-pages': 5,
		}, '');

		ele.generateLabel = (pageNumber) => `label ${pageNumber}`;
		
		await ele.requestUpdate();

		const items = ele.shadowRoot.querySelectorAll('li');
		items.forEach((item, i) => {
			const a = item.querySelector('a');
			const pageNumber = i;

			// only target pagination number items (non-current, not next, not previous)
			if (i > 0 && i < 6 && i !== 3) {
				expect(a.textContent).toEqual(`label ${pageNumber}`)
			}
		})
	});

	it('Renders generateAriaLabel override content', async () => {
		const ele = await TestUtils.render('rui-pagination', {
			'current-page': 3,
			'num-pages': 5,
		}, '');

		ele.generateAriaLabel = (pageNumber) => `aria-label ${pageNumber}`;
		
		await ele.requestUpdate();

		const items = ele.shadowRoot.querySelectorAll('li');
		items.forEach((item, i) => {
			const a = item.querySelector('a');
			const pageNumber = i;

			// only target pagination number items (non-current, not next, not previous)
			if (i > 0 && i < 6 && i !== 3) {
				expect(a.getAttribute('aria-label')).toEqual(`aria-label ${pageNumber}`)
			}
		})
	});

	it('Renders custom next content', async () => {
		const ele = await TestUtils.render('rui-pagination', {
			'current-page': 3,
			'num-pages': 5,
		}, `
			<span id="custom-next" slot="next-content">Next</span>
		`);

		const items = ele.shadowRoot.querySelectorAll('li');
		const nextLink = items[6].querySelector('a');
		const slot = nextLink.querySelector('slot');
		const customNext = slot.assignedNodes()[0]
		expect(customNext.getAttribute('id')).toEqual('custom-next')
	});
	

	it('Renders custom prev content', async () => {
		const ele = await TestUtils.render('rui-pagination', {
			'current-page': 3,
			'num-pages': 5,
		}, `
			<span id="custom-prev" slot="prev-content">Next</span>
		`);

		const items = ele.shadowRoot.querySelectorAll('li');
		const prevLink = items[0].querySelector('a');
		const slot = prevLink.querySelector('slot');
		const customPrev = slot.assignedNodes()[0]
		expect(customPrev.getAttribute('id')).toEqual('custom-prev')
	});

	// Renders custom ellipses content
});
