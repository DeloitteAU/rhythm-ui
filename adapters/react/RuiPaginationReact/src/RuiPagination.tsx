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
	public render(): JSX.Element {
		return (
			<rui-pagination {...this.props}>
				{this.props.children}
			</rui-pagination >
		);
	}
}

export default RuiPagination;
