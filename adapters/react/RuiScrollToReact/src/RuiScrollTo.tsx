/**
* Copyright Deloitte Digital 2019
*
* This source code is licensed under the BSD-3-Clause license found in the
* LICENSE file in the root directory of this source tree.
*/

import React from 'react';
import '@rhythm-ui/scroll-to';

import {IRuiScrollTo} from './IRuiScrollTo';

export class RuiScrollTo extends React.Component<IRuiScrollTo> {
	public render(): JSX.Element {
		return (
			<rui-scroll-to {...this.props}>
				{this.props.children}
			</rui-scroll-to >
		);
	}
}

export default RuiScrollTo;
