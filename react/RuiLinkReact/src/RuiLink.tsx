/**
* Copyright Deloitte Digital 2019
*
* This source code is licensed under the BSD-3-Clause license found in the
* LICENSE file in the root directory of this source tree.
*/

import React from 'react';
import '@rhythm-ui/rui-link';

import {IRuiLink} from './IRuiLink';

export default class RuiLink extends React.Component<IRuiLink> {
	public render(): JSX.Element {
		return (
			<rui-link {...this.props}>
				{this.props.children}
			</rui-link >
		);
	}
}
