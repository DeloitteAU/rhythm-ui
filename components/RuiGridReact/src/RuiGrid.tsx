/**
 * Copyright Deloitte Digital 2019
 *
 * This source code is licensed under the BSD-3-Clause license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { ReactNode } from 'react';
import '@rhythm-ui/grid';

export class RuiGrid extends React.Component {
	public render(): ReactNode {
		return (
			<rui-grid {...this.props}>
				{this.props.children}
			</rui-grid>
		);
	}
}

