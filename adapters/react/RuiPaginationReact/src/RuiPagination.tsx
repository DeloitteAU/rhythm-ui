/**
* Copyright Deloitte Digital 2019
*
* This source code is licensed under the BSD-3-Clause license found in the
* LICENSE file in the root directory of this source tree.
*/

import React from 'react';
import '@rhythm-ui/pagination';

import {
	IRuiPaginationProps,
	IRuiPaginationEllipsesProps,
	IRuiPaginationPreviousProps,
	IRuiPaginationNextProps,
} from './IRuiPagination';


/**
 * Ellipses subcomponent is used for rendering custom ellipses
 * elements
 */
export const Ellipses = (props: IRuiPaginationEllipsesProps): React.ReactNode => {
	const {as, ...otherProps} = props;

	let elementType = 'div';
	if (as) {
		elementType = as;
	}

	const ellipsesProps = {
		slot: 'ellipses',
		...otherProps,
	};

	const ellipsesEl = React.createElement(elementType, ellipsesProps);

	return ellipsesEl;
};


/**
 * Previous subcomponent is used for rendering custom previous content
 * for the pagination
 */
export const Previous = (props: IRuiPaginationPreviousProps): React.ReactNode => {
	const {as, ...otherProps} = props;

	let elementType = 'span';
	if (as) {
		elementType = as;
	}

	const prevProps = {
		slot: 'prev-content',
		...otherProps,
	};

	const prevEl = React.createElement(elementType, prevProps);

	return prevEl;
};

/**
 * Next subcomponent is used for rendering custom next content
 * for the pagination
 */
export const Next = (props: IRuiPaginationNextProps): React.ReactNode => {
	const {as, ...otherProps} = props;

	let elementType = 'span';
	if (as) {
		elementType = as;
	}

	const nextProps = {
		slot: 'next-content',
		...otherProps,
	};

	const nextEl = React.createElement(elementType, nextProps);

	return nextEl;
};


/**
 * RuiPagination adapts the rui-pagination component for react
 */
export default class RuiPagination extends React.Component<IRuiPaginationProps> {

	// Need to keep a ref to the element to attach event listeners
	private ruiPaginationEl = React.createRef<HTMLElement>();

	// Expose ellipses subcomponent as RuiPagination.Ellipses
	public static Ellipses = Ellipses;

	// Expose next subcomponent as RuiPagination.Next
	public static Next = Next;

	// Expose previous subcomponent as RuiPagination.Previous
	public static Previous = Previous;

	/**
	 * Event handler for event fired when one of the pagination items is clicked
	 * if no href is provided
	 */
	private _handleItemClick = (e: Event): void => {
		const customEvt = e as CustomEvent;
		const {onItemClick} = this.props;
		if (onItemClick) {
			onItemClick(customEvt.detail.pageNumber);
		}
	}

	/**
	 * Event handler for when the next page link is clicked when no
	 * nextLink prop is provided
	 */
	private _handleNextClick = (): void => {
		const {onNextClick} = this.props;
		if (onNextClick) {
			onNextClick();
		}
	}

	/**
	 * Event handler for when the previous page link is clicked when no
	 * prevLink prop is provided
	 */
	private _handlePrevClick = (): void => {
		const {onPrevClick} = this.props;
		if (onPrevClick) {
			onPrevClick();
		}
	}


	/**
	 * Check whether we have a reference to the underlying element,
	 * if we do, attach any custom event listeners as needed
	 */
	public componentDidMount(): void {
		const {onItemClick, onPrevClick, onNextClick} = this.props;
		const el: HTMLElement | null = this.ruiPaginationEl.current;

		if (el) {
			if (onItemClick) {
				el.addEventListener('rui-pagination-item-click', this._handleItemClick);
			}

			if (onPrevClick) {
				el.addEventListener('rui-pagination-prev-click', this._handlePrevClick);
			}

			if (onNextClick) {
				el.addEventListener('rui-pagination-next-click', this._handleNextClick);
			}
		}
	}

	/**
	 * Remove any event listeners that were set originally
	 */
	public componentWillUnmount(): void {
		const {onItemClick, onPrevClick, onNextClick} = this.props;
		const el: HTMLElement | null = this.ruiPaginationEl.current;

		if (el) {
			if (onItemClick) {
				el.removeEventListener('rui-pagination-item-click', this._handleItemClick);
			}

			if (onPrevClick) {
				el.removeEventListener('rui-pagination-prev-click', this._handlePrevClick);
			}

			if (onNextClick) {
				el.removeEventListener('rui-pagination-next-click', this._handleNextClick);
			}
		}
	}


	/**
	 * Take any props, if they are present, map them to the underlying
	 * element attributes
	 */
	public render(): React.ReactNode {
		const {
			currentPage,
			pagesShown,
			numPages,
			items,
			nextLink,
			prevLink,
			...otherProps
		} = this.props;

		const props = otherProps;

		if (currentPage) { props['current-page'] = currentPage; }
		if (pagesShown) { props['pages-shown'] = pagesShown; }
		if (numPages) { props['num-pages'] = numPages; }
		if (nextLink) { props['next-link'] = nextLink; }
		if (prevLink) { props['prev-link'] = prevLink; }
		if (items) { props.items = JSON.stringify(items); }

		return (
			<rui-pagination ref={this.ruiPaginationEl} {...props}>
				{this.props.children}
			</rui-pagination >
		);
	}
}
