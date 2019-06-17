/**
 * Copyright Deloitte Digital 2019
 *
 * This source code is licensed under the BSD-3-Clause license found in the
 * LICENSE file in the root directory of this source tree.
 */

declare global {
	namespace JSX {
		interface IntrinsicElements { // eslint-disable-line @typescript-eslint/interface-name-prefix
			'rui-grid': any;
		}
	}
}

export interface IRuiGridProps {
	columns?: number;

	children?: JSX.Element[] | JSX.Element;
}
