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
	IHTMLRuiPaginationElement,
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
	private _ruiPaginationEl = React.createRef<IHTMLRuiPaginationElement>();

	// Expose ellipses subcomponent as RuiPagination.Ellipses
	public static Ellipses = Ellipses;

	// Expose next subcomponent as RuiPagination.Next
	public static Next = Next;

	// Expose previous subcomponent as RuiPagination.Previous
	public static Previous = Previous;

	/**
	 * Event handler for event fired when a page is requested
	 * if no href is provided
	 */
	private _handlePageRequest = (e: Event): void => {
		const customEvt = e as CustomEvent;
		const {onPageRequest} = this.props;
		if (onPageRequest) {
			onPageRequest(customEvt.detail.page);
		}
	}

	/**
	 * Check whether we have a reference to the underlying element,
	 * if we do, attach any custom event listeners as needed
	 */
	public componentDidMount(): void {
		const {
			onPageRequest,
			generateHref,
			generateLabel,
			generateAriaLabel,
		} = this.props;
		const el: IHTMLRuiPaginationElement | null = this._ruiPaginationEl.current;

		if (el) {

			let refreshNeeded = false;
			if (generateHref) {
				el.generateHref = generateHref;
				refreshNeeded = true;
			}

			if (generateLabel) {
				el.generateLabel = generateLabel;
				refreshNeeded = true;
			}

			if (generateAriaLabel) {
				el.generateAriaLabel = generateAriaLabel;
				refreshNeeded = true;
			}

			if (onPageRequest) {
				el.addEventListener('rui-pagination-page-request', this._handlePageRequest);
			}

			if (refreshNeeded) { this.forceUpdate(); }

		}
	}

	/**
	 * Remove any event listeners that were set originally
	 */
	public componentWillUnmount(): void {
		const {onPageRequest} = this.props;
		const el: IHTMLRuiPaginationElement | null = this._ruiPaginationEl.current;

		if (el) {
			if (onPageRequest) {
				el.removeEventListener('rui-pagination-page-request', this._handlePageRequest);
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
			nextLink,
			prevLink,
			onPageRequest,
			nextAriaLabel,
			prevAriaLabel,
			generateHref,
			generateLabel,
			generateAriaLabel,
			...otherProps
		} = this.props;

		const props = otherProps;

		if (currentPage) { props['current-page'] = currentPage; }
		if (pagesShown) { props['pages-shown'] = pagesShown; }
		if (numPages) { props['num-pages'] = numPages; }
		if (nextLink) { props['next-link'] = nextLink; }
		if (prevLink) { props['prev-link'] = prevLink; }
		if (nextAriaLabel) { props['next-aria-label'] = nextAriaLabel; }
		if (prevAriaLabel) { props['prev-aria-label'] = prevAriaLabel; }

		return (
			<rui-pagination ref={this._ruiPaginationEl} {...props}>
				{this.props.children}
			</rui-pagination >
		);
	}
}
