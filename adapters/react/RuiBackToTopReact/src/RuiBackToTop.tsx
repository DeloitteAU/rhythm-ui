/**
* Copyright Deloitte Digital 2019
*
* This source code is licensed under the BSD-3-Clause license found in the
* LICENSE file in the root directory of this source tree.
*/

import React from 'react';
import '@rhythm-ui/back-to-top';

import {IRuiBackToTop} from './IRuiBackToTop';

export class RuiBackToTop extends React.Component<IRuiBackToTop> {
	public render(): JSX.Element {
		return (
			<rui-back-to-top {...this.props}>
				{this.props.children}
			</rui-back-to-top >
		);
	}
}

export default RuiBackToTop;
