/**
* Copyright Deloitte Digital 2019
*
* This source code is licensed under the BSD-3-Clause license found in the
* LICENSE file in the root directory of this source tree.
*/

import React from 'react';
import '@rhythm-ui/header';

import {IRuiHeader} from './IRuiHeader';

export class RuiHeader extends React.Component<IRuiHeader> {
	public render(): JSX.Element {
		return (
			<rui-header {...this.props}>
				{this.props.children}
			</rui-header >
		);
	}
}

export default RuiHeader;
