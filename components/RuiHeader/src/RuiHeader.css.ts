/**
* Copyright Deloitte Digital 2019
*
* This source code is licensed under the BSD-3-Clause license found in the
* LICENSE file in the root directory of this source tree.
*/

import {css} from 'lit-element';
import {bp} from '@rhythm-ui/styles';

/**
 *  RuiHeader Variables
 */
export const variables = css`
	:host {}
`;

/**
 * RuiHeader CSS
 */
export const layout = css`
	.mobile {
		display: block;
	}

	.desktop {
		display: none;
	}

	${bp('m', css`
		.mobile {
			display: none;
		}

		.desktop {
			display: block;
		}
	`)}
`;

export default [variables, layout];
