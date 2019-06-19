/**
 * Copyright Deloitte Digital 2019
 *
 * This source code is licensed under the BSD-3-Clause license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { createRef } from 'react';
import '@rhythm-ui/expand-collapse';

import {
	IRuiExpandCollapseProps,
	IHTMLRuiExpandCollapseElement,
	IExpandCollapseDetailsProps,
	IExpandCollapseSummaryProps,
} from './IRuiExpandCollapse';

export class RuiExpandCollapse extends React.Component<IRuiExpandCollapseProps> {
	private ruiExpandCollapseEl = createRef<IHTMLRuiExpandCollapseElement>();

	public static Details = class extends React.Component<IExpandCollapseDetailsProps> {
		public render() {
			const { as, ...otherProps } = this.props;

			let elementType = 'div';
			if (as) {
				elementType = as;
			}

			const DetailsEl = React.createElement(elementType, {
				slot: "details-content",
				...otherProps
			});

			return DetailsEl;
		}
	}

	public static Summary = class extends React.Component<IExpandCollapseSummaryProps> {
		public render() {
			const { as, ...otherProps } = this.props;

			let elementType = 'span';
			if (as) {
				elementType = as;
			}

			const SummaryEl = React.createElement(elementType, {
				slot: "summary-content",
				...otherProps
			});

			return SummaryEl;
		}
	}

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

	public render(): JSX.Element {
		return (
			<rui-expand-collapse ref={this.ruiExpandCollapseEl} {...this.props}>
				{this.props.children}
			</rui-expand-collapse>
		);
	}
}

