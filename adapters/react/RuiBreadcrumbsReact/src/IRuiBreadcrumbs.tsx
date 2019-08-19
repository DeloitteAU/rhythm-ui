/**
* Copyright Deloitte Digital 2019
*
* This source code is licensed under the BSD-3-Clause license found in the
* LICENSE file in the root directory of this source tree.
*/
/* eslint import/prefer-default-export: 0 */

import {ReactNodeArray} from 'react';

declare global {
	namespace JSX {
		interface IntrinsicElements { // eslint-disable-line @typescript-eslint/interface-name-prefix
			'rui-breadcrumbs': any;
		}
	}
}

export interface IRuiBreadcrumbs {

	/**
	 * Max number of breadcrumbs to show
	 */
	max?: number;

	children: ReactNodeArray
}
