/**
 * Copyright Deloitte Digital 2019
 *
 * This source code is licensed under the BSD-3-Clause license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import '@rhythm-ui/button';

import {IRuiButtonProps} from './IRuiButton';

export class RuiButton extends React.Component<IRuiButtonProps> {
	public render(): React.ReactNode {
		return (
			<rui-button {...this.props}>
				{this.props.children}
			</rui-button>
		);
	}
}

export default RuiButton;
