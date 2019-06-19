/**
 * Copyright Deloitte Digital 2019
 *
 * This source code is licensed under the BSD-3-Clause license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import '@rhythm-ui/skip-links';

import {IRuiSkipLinksProps} from './IRuiSkipLinks';

export class RuiSkipLinks extends React.Component<IRuiSkipLinksProps> {
	public render(): JSX.Element {
		return (
			<rui-skip-links {...this.props}>
				{this.props.children}
			</rui-skip-links>
		);
	}
}

export default RuiSkipLinks;