/**
 * Copyright Deloitte Digital 2019
 *
 * This source code is licensed under the BSD-3-Clause license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import '@rhythm-ui/layout';

import {IRuiLayoutProps} from './IRuiLayout';

/**
 * The RuiLayout React Adapter
 */
export class RuiLayout extends React.Component<IRuiLayoutProps> {
	public render(): JSX.Element {
		return (
			<rui-layout {...this.props}>
				{this.props.children}
			</rui-layout>
		);
	}
}

export default RuiLayout;
