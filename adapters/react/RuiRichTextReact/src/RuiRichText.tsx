/**
* Copyright Deloitte Digital 2019
*
* This source code is licensed under the BSD-3-Clause license found in the
* LICENSE file in the root directory of this source tree.
*/

import React from 'react';
import '@rhythm-ui/rich-text';

import {IRuiRichText} from './IRuiRichText';

export class RuiRichText extends React.Component<IRuiRichText> {
	public render(): JSX.Element {
		return (
			<rui-rich-text {...this.props}>
				{this.props.children}
			</rui-rich-text >
		);
	}
}

export default RuiRichText;
