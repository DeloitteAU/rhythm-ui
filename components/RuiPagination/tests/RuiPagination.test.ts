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
		expect(items.length).toEqual(7) // 5 page + prev + next

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

	it('Renders truncation', async () => {
		const ele = await TestUtils.render('rui-pagination', {
			'current-page': 10,
			'num-pages': 20,
			'pages-shown': 5,
		}, '');

		const items = ele.shadowRoot.querySelectorAll('li');
		// 5 items shown + 2 ellipses + first and last item + next & prev
		expect(items.length).toEqual(11) 

		items.forEach((item, i) => {
			const a = item.querySelector('a');

			const PREV_INDEX = 0;
			const NEXT_INDEX = 10;
			const LEFT_ELLIPSES_INDEX = 2;
			const RIGHT_ELLIPSES_INDEX = 8;
			const CURRENT_INDEX = 5;

			const calculatePageNum = (index) => {
				if (index === 1) { return 1; }
				if (index >= 3 && index <= 7) {
					return index + 5;
				}
				if (index === 9) {
					return 20;
				}
				

				return index;
			}

			if (i === PREV_INDEX) {
				expect(a.classList).toContain('pagination-link--previous')
			} else if (i === NEXT_INDEX) {
				expect(a.classList).toContain('pagination-link--next')
			} else if (i === LEFT_ELLIPSES_INDEX || i === RIGHT_ELLIPSES_INDEX) {
				expect(item.textContent.trim()).toEqual('...')
			} else {
				if (i === CURRENT_INDEX) {
					expect(a.classList).toContain('pagination-link--current');
				}
				expect(a.textContent).toEqual(`${calculatePageNum(i)}`)
			}
		})
	});

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

	it('Renders custom prev content', async () => {
		const ele = await TestUtils.render('rui-pagination', {
			'current-page': 10,
			'num-pages': 20,
			'pages-shown': 5,
		}, `
			<span id="custom-ellipses" slot="ellipses">...</span>
		`);

		const items = ele.shadowRoot.querySelectorAll('li');
		const leftEllipsesEl = items[2];
		const rightEllipsesEl = items[8];

		const leftSlot = leftEllipsesEl.querySelector('slot');
		const leftID = leftSlot.assignedNodes()[0].getAttribute('id');
		expect(leftID).toEqual('custom-ellipses');

		const rightSlot = rightEllipsesEl.querySelector('slot');
		const rightID = rightSlot.assignedNodes()[0].getAttribute('id');
		expect(rightID).toEqual('custom-ellipses');	
	});
});
