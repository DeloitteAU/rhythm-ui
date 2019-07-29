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

interface IJSXCoreProps {
	style?: object,
	className?: string,
}

export interface IRuiPaginationItems {
	[key: string]: {
		label?: string,
		href?: string,
	}
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
	items?: IRuiPaginationItems,
	nextLink?: string,
	prevLink?: string,
}
