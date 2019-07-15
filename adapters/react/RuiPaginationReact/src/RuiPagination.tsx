/**
* Copyright Deloitte Digital 2019
*
* This source code is licensed under the BSD-3-Clause license found in the
* LICENSE file in the root directory of this source tree.
*/

import React from 'react';
import '@rhythm-ui/pagination';

import {IRuiPagination} from './IRuiPagination';

export class RuiPagination extends React.Component<IRuiPagination> {
	private ruiPaginationEl = React.createRef<HTMLElement>();

	public componentDidMount():void {
		const el: HTMLElement | null = this.ruiPaginationEl.current;
		if (el) {
			el.addEventListener('rui-pagination-item-click', e => {
				console.log(e);
			});
			el.addEventListener('rui-pagination-prev-click', e => {
				console.log(e);
			});
			el.addEventListener('rui-pagination-next-click', e => {
				console.log(e);
			});
		}
	}


	public render(): JSX.Element {
		return (
			<rui-pagination {...this.props} ref={this.ruiPaginationEl}>
				{this.props.children}
			</rui-pagination >
		);
	}
}

export default RuiPagination;
