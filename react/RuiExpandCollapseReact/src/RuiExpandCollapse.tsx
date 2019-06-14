/**
 * Copyright Deloitte Digital 2019
 *
 * This source code is licensed under the BSD-3-Clause license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { createRef } from 'react';
import '@rhythm-ui/expand-collapse';

import { IRuiExpandCollapseProps, IHTMLRuiExpandCollapseElement } from './IRuiExpandCollapse';

export class RuiExpandCollapse extends React.Component<IRuiExpandCollapseProps> {
	private ruiExpandCollapseEl = createRef<IHTMLRuiExpandCollapseElement>();

	public componentDidMount(): void {
		/**
		 * If user is controlling component then update the change handler
		 * on the element
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

