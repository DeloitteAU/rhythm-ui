/**
 * Copyright Deloitte Digital 2019
 *
 * This source code is licensed under the BSD-3-Clause license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import '@rhythm-ui/expand-collapse';

import {
	IRuiExpandCollapseProps,
	IHTMLRuiExpandCollapseElement,
	IExpandCollapseDetailsProps,
	IExpandCollapseSummaryProps,
} from './IRuiExpandCollapse';

/**
 * Summary renders the given content as the native web component's summary slot.
 * The parent element rendered will be a span unless the user specifies otherwise via
 * the 'as' prop. A span is used because the summary slot renders within a button within
 * the web component
 */
export const Summary = (props: IExpandCollapseSummaryProps): React.ReactNode => {
	const {as, ...otherProps} = props;

	let elementType = 'span';
	if (as) {
		elementType = as;
	}

	const summaryEl = React.createElement(elementType, {
		slot: 'summary-content',
		...otherProps,
	});

	return summaryEl;
};

/**
 * Details renders the given content as the the native web component's details slot.
 * The parent element rendered will be a div unless the user specifies otherwise via
 * the 'as' prop
 */
export const Details = (props: IExpandCollapseDetailsProps): React.ReactNode => {
	const {as, ...otherProps} = props;

	let elementType = 'div';
	if (as) {
		elementType = as;
	}

	const detailsEl = React.createElement(elementType, {
		slot: 'details-content',
		...otherProps,
	});

	return detailsEl;
};


/**
 * RuiExpandCollapse
 * React wrapped for rui-expand-collapse web component
 */
export class RuiExpandCollapse extends React.Component<IRuiExpandCollapseProps> {

	// used to modify change d on element
	private ruiExpandCollapseEl = React.createRef<IHTMLRuiExpandCollapseElement>();

	// expose Summary component as <RuiExpandCollapse.Summary>
	public static Summary = Summary

	// expose Details component as <RuiExpandCollapse.Details>
	public static Details = Details

	public componentDidMount(): void {
		/**
		 * If user is controlling component then update the change handler
		 * on the element
		 *
		 * NB: FIXME when https://github.com/facebook/react/issues/15830 resolved
		 */
		if (this.props.onChange) {
			/**
			 * To set change handler on web component we need to overwrite the
			 * default change handler via a ref to the component
			 */
			const el: IHTMLRuiExpandCollapseElement | null = this.ruiExpandCollapseEl.current;
			if (el) {
				el.onExpandCollapse = this.props.onChange;
			}
		}
	}

	public render(): React.ReactNode {
		return (
			<rui-expand-collapse ref={this.ruiExpandCollapseEl} {...this.props}>
				{this.props.children}
			</rui-expand-collapse>
		);
	}
}

