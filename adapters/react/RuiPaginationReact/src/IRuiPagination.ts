/**
* Copyright Deloitte Digital 2019
*
* This source code is licensed under the BSD-3-Clause license found in the
* LICENSE file in the root directory of this source tree.
*/

declare global {
	namespace JSX {
		interface IntrinsicElements { // eslint-disable-line @typescript-eslint/interface-name-prefix
			'rui-pagination': any;
		}
	}
}

export interface IHTMLRuiPaginationElement extends HTMLElement {
	generateHref: Function,
	generateLabel: Function,
	generateAriaLabel: Function,
}

interface IJSXCoreProps {
	style?: object,
	className?: string,
}

export interface IRuiPaginationEllipsesProps extends IJSXCoreProps {
	as?: string,
	children?: React.ReactNode[] | React.ReactNode;
}

export interface IRuiPaginationPreviousProps extends IJSXCoreProps {
	as?: string,
	children?: React.ReactNode[] | React.ReactNode;
}

export interface IRuiPaginationNextProps extends IJSXCoreProps {
	as?: string,
	children?: React.ReactNode[] | React.ReactNode;
}

export interface IRuiPaginationProps {
	children?: React.ReactNode[] | React.ReactNode;
	onItemClick?: Function,
	onPrevClick?: Function,
	onNextClick?: Function,
	currentPage: number,
	pagesShown?: number,
	numPages?: number,
	nextLink?: string,
	prevLink?: string,
	generateHref: Function,
	generateLabel: Function,
	generateAriaLabel: Function,
	nextAriaLabel?: string,
	prevAriaLabel?: string,
}
