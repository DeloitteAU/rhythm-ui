/**
* Copyright Deloitte Digital 2019
*
* This source code is licensed under the BSD-3-Clause license found in the
* LICENSE file in the root directory of this source tree.
*/

import React from 'react';
import '@rhythm-ui/alert';

import {IRuiAlert} from './IRuiAlert';

export class RuiAlert extends React.Component<IRuiAlert> {
	public render(): JSX.Element {
		return (
			<rui-alert {...this.props}>
				{this.props.children}
			</rui-alert >
		);
	}
}

export default RuiAlert;
