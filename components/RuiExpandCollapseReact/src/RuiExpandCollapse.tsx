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
	initiallyOpen: boolean,
	controlled: boolean,
}

interface IHTMLRuiExpandCollapseElement extends HTMLElement {
	onExpandCollapse: Function
}

export class RuiExpandCollapse extends React.Component<IProps> {
	private myRef = createRef<IHTMLRuiExpandCollapseElement>();

	public componentDidMount(): void {
		const el: IHTMLRuiExpandCollapseElement | null = this.myRef.current;
		if (el) {
			el.onExpandCollapse = this.props.onChange;
		}
	}

	public render(): ReactNode {
		return (
			<rui-expand-collapse ref={this.myRef} {...this.props}>
				{this.props.children}
			</rui-expand-collapse>
		);
	}
}

