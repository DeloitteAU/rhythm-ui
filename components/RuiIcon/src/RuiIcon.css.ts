/**
* Copyright Deloitte Digital 2019
*
* This source code is licensed under the BSD-3-Clause license found in the
* LICENSE file in the root directory of this source tree.
*/

import {css} from 'lit-element';

/**
	*  RuiIcon Variables
*/
export const variables = css`
    :host {
    
    	/**
		 * @variable Icon display property
		 */
		--rui-icon__display: inline-block;
		
    	/**
		 * @variable Icon width
		 */
		--rui-icon__width: 60px;
		
		/**
		 * @variable Icon height
		 */
		--rui-icon__height: 60px;
		
		/**
		 * @variable Icon color (only works for hover setting)
		 */
		--rui-icon__color: #999;
		
		/**
		 * @variable Icon color when hovered (only works for hover setting)
		 */
		--rui-icon__hover-color: #ccc;
		
		/**
		 * @variable Icon color when hovered (only works for hover setting)
		 */
		--rui-icon__hover-transition: all 0.25s ease;
    }
	`;

/**
	* RuiIcon CSS
*/
export const layout = css`
	img {
		display: var(--rui-icon__display);
		width: var(--rui-icon__width);
		height: var(--rui-icon__height);
		object-fit: contain;
	}
	
	img.hover {
		background: var(--rui-icon__color);
		transition: var(--rui-icon__hover-transition);
	}
	
	img.hover:hover {
		background: var(--rui-icon__hover-color);
	}
`;

export default [variables, layout];
