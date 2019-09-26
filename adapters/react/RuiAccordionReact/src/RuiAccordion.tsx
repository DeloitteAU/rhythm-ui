/**
* Copyright Deloitte Digital 2019
*
* This source code is licensed under the BSD-3-Clause license found in the
* LICENSE file in the root directory of this source tree.
*/

import React from 'react';
import '@rhythm-ui/accordion';

import {IRuiAccordion} from './IRuiAccordion';

export class RuiAccordion extends React.Component<IRuiAccordion> {
	public render(): JSX.Element {
		return (
			<rui-accordion {...this.props}>
				{this.props.children}
			</rui-accordion >
		);
	}
}

export default RuiAccordion;
