/**
* Copyright Deloitte Digital 2019
*
* This source code is licensed under the BSD-3-Clause license found in the
* LICENSE file in the root directory of this source tree.
*/

import React from 'react';
import '@rhythm-ui/badge';

import {IRuiBadge} from './IRuiBadge';

export class RuiBadge extends React.Component<IRuiBadge> {
	public render(): JSX.Element {
		return (
			<rui-badge {...this.props}>
				{this.props.children}
			</rui-badge >
		);
	}
}

export default RuiBadge;
