/**
 * Copyright Deloitte Digital 2019
 *
 * This source code is licensed under the BSD-3-Clause license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { ReactNode, createRef } from 'react';
import '@rhythm-ui/expand-collapse';


interface IProps {
	onChange: Function,
	open: boolean,
}

interface IHTMLRuiExpandCollapseElement extends HTMLElement {
	onExpandCollapse: Function
}

export class RuiExpandCollapse extends React.Component<IProps> {
	private ruiExpandCollapseEl = createRef<IHTMLRuiExpandCollapseElement>();

	public componentDidMount(): void {
		/**
		 * To set change handler on web component we need to overwrite the
		 * default change handler via a ref to the component
		 */
		const el: IHTMLRuiExpandCollapseElement | null = this.ruiExpandCollapseEl.current;
		if (el) {
			el.onExpandCollapse = this.props.onChange;
		}
	}

	public render(): ReactNode {
		return (
			<rui-expand-collapse ref={this.ruiExpandCollapseEl} {...this.props}>
				{this.props.children}
			</rui-expand-collapse>
		);
	}
}

