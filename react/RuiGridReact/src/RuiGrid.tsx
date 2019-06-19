/**
 * Copyright Deloitte Digital 2019
 *
 * This source code is licensed under the BSD-3-Clause license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import '@rhythm-ui/grid';

import {IRuiGridProps} from './IRuiGrid';

export class RuiGrid extends React.Component<IRuiGridProps> {
	public render(): JSX.Element  {
		return (
			<rui-grid {...this.props}>
				{this.props.children}
			</rui-grid>
		);
	}
}

export default RuiGrid;
