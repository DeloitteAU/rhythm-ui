/**
* Copyright Deloitte Digital 2019
*
* This source code is licensed under the BSD-3-Clause license found in the
* LICENSE file in the root directory of this source tree.
*/

import React from 'react';
import '@rhythm-ui/navigation';

import {IRuiNavigation} from './IRuiNavigation';

export class RuiNavigation extends React.Component<IRuiNavigation> {
	public render(): JSX.Element {
		return (
			<rui-navigation {...this.props}>
				{this.props.children}
			</rui-navigation >
		);
	}
}

export default RuiNavigation;
