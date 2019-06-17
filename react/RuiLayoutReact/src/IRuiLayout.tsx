/**
 * Copyright Deloitte Digital 2019
 *
 * This source code is licensed under the BSD-3-Clause license found in the
 * LICENSE file in the root directory of this source tree.
 */

declare global {
	namespace JSX {
		interface IntrinsicElements { // eslint-disable-line @typescript-eslint/interface-name-prefix
			'rui-layout': any;
		}
	}
}

/**
 * RuiLayout props
 */
export interface IRuiLayoutProps {
	/**
	 * The layout type
	 */
	type?: 'monet' | 'vangogh' | 'picasso' | 'morisot' | 'rembrandt' | 'davinci';

	/**
	 * The layout elements, valid children are <header />, <footer />, <nav />, <aside /> & <main />
	 * @remarks Order of children does not matter
	 */
	children?: JSX.Element[] | JSX.Element;
}
