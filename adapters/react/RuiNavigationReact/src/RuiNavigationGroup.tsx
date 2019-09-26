/**
* Copyright Deloitte Digital 2019
*
* This source code is licensed under the BSD-3-Clause license found in the
* LICENSE file in the root directory of this source tree.
*/

import React from 'react';
import '@rhythm-ui/navigation';

import {IRuiNavigationGroup} from './IRuiNavigationGroup';

export class RuiNavigationGroup extends React.Component<IRuiNavigationGroup> {
	public render(): JSX.Element {
		return (
			<rui-navigation-group {...this.props}>
				{this.props.children}
			</rui-navigation-group >
		);
	}
}

export default RuiNavigationGroup;
