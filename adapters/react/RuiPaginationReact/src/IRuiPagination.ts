import {string} from 'prop-types';

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

export interface IRuiPaginationItem {
	title?: string,
	url?: string,
}

export interface IRuiPaginationEllipsesProps {
	as?: string,
}

export interface IRuiPaginationPreviousProps {
	as?: string,
}

export interface IRuiPaginationNextProps {
	as?: string,
}

export interface IRuiPaginationProps {
	children: React.ReactNode,
	onItemClick?: Function,
	onPrevClick?: Function,
	onNextClick?: Function,
	currentPage: number,
	pagesShown?: number,
	numPages?: number,
	items?: IRuiPaginationItem[],
	nextLink?: string,
	prevLink?: string,
}
