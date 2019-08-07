/**
* Copyright Deloitte Digital 2019
*
* This source code is licensed under the BSD-3-Clause license found in the
* LICENSE file in the root directory of this source tree.
*/

import React, {ReactNode} from 'react';
import '@rhythm-ui/scroll-to';

import {
	IRuiScrollToProps,
} from './IRuiScrollTo';

/* eslint-disable react/no-multi-comp */
function addExtraProps(Component, extraProps) {
	return <Component.type {...Component.props} {...extraProps} />;
}

/**
 * React adapter  for rui-scroll-to component,
 * copies over props with attribute name conversions as needed
 */
export class RuiScrollTo extends React.Component<IRuiScrollToProps> {
	public render(): JSX.Element {
		const {disableAnimation, scrollContainer, children, ...otherProps} = this.props;
		const props = otherProps;
		if (disableAnimation) {
			props['disable-animation'] = true;
		}

		if (scrollContainer) {
			props['scroll-container'] = scrollContainer;
		}

		// will throw an error if number of children is not === 1
		// otherwise will return only child
		const firstChild = React.Children.only(children);

		// need to add slot to the given child
		let triggerEl: ReactNode = null;
		if (firstChild) {
			triggerEl = addExtraProps(firstChild, {slot: 'scroll-trigger'});
			//TriggerEl = React.cloneElement(firstChild, {slot: 'scroll-trigger'});
		}

		return (
			<rui-scroll-to {...props}>
				{triggerEl}
			</rui-scroll-to >
		);
	}
}

export default RuiScrollTo;
