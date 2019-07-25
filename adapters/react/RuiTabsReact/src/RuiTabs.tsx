/**
* Copyright Deloitte Digital 2019
*
* This source code is licensed under the BSD-3-Clause license found in the
* LICENSE file in the root directory of this source tree.
*/

import React from 'react';
import '@rhythm-ui/tabs';

import {IRuiTabs} from './IRuiTabs';

export class RuiTabs extends React.Component<IRuiTabs> {
	public render(): JSX.Element {
		return (
			<rui-tabs {...this.props}>
				{this.props.children}
			</rui-tabs >
		);
	}
}

export default RuiTabs;
