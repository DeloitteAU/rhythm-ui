/* eslint-disable */

/**
* Copyright Deloitte Digital 2019
*
* This source code is licensed under the BSD-3-Clause license found in the
* LICENSE file in the root directory of this source tree.
*/

declare global {
	namespace JSX {
		interface IntrinsicElements { // eslint-disable-line @typescript-eslint/interface-name-prefix
			'rui-link': any;		// eslint-disable-line @typescript-eslint/no-explicit-any
		}
	}
}

export default interface IRuiLink extends HTMLAnchorElement {
	target: string
}
