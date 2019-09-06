/**
* Copyright Deloitte Digital 2019
*
* This source code is licensed under the BSD-3-Clause license found in the
* LICENSE file in the root directory of this source tree.
*/

import React from 'react';
import '@rhythm-ui/icon';

import {IRuiIcon} from './IRuiIcon';

export class RuiIcon extends React.Component<IRuiIcon> {
	public render(): JSX.Element {
		return (
			<rui-icon {...this.props}>
				{this.props.children}
			</rui-icon >
		);
	}
}

export default RuiIcon;
