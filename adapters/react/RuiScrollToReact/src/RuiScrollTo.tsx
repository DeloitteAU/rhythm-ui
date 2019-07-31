/**
* Copyright Deloitte Digital 2019
*
* This source code is licensed under the BSD-3-Clause license found in the
* LICENSE file in the root directory of this source tree.
*/

import React from 'react';
import '@rhythm-ui/scroll-to';

import {
	IRuiScrollToProps,
} from './IRuiScrollTo';

/**
 * React adapter  for rui-scroll-to component,
 * copies over props with attribute name conversions as needed
 */
export class RuiScrollTo extends React.Component<IRuiScrollToProps> {
	public render(): JSX.Element {
		const {noSmoothScroll, scrollContainer, children, ...otherProps} = this.props;
		const props = otherProps;
		if (noSmoothScroll) {
			console.log(noSmoothScroll);
			props['no-smooth-scroll'] = true;
		}

		if (scrollContainer) {
			props['scroll-container'] = scrollContainer;
		}

		const firstChild = React.Children.only(children);

		let TriggerEl = null;
		if (firstChild) {
			TriggerEl = React.cloneElement(firstChild, {slot: 'scroll-trigger'});
		}

		return (
			<rui-scroll-to {...props}>
				{TriggerEl}
			</rui-scroll-to >
		);
	}
}

export default RuiScrollTo;
