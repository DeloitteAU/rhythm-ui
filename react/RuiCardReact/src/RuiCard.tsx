/**
* Copyright Deloitte Digital 2019
*
* This source code is licensed under the BSD-3-Clause license found in the
* LICENSE file in the root directory of this source tree.
*/

import React from 'react';
import '@rhythm-ui/rui-card';

import {IRuiCardProps} from './IRuiCard';

export class RuiCard extends React.Component<IRuiCardProps> {
	public render(): React.ReactNode {
		return (
			<rui-card {...this.props}>
				{this.props.children}
			</rui-card >
		); 
	}
}

export default RuiCard;
