/**
* Copyright Deloitte Digital 2019
*
* This source code is licensed under the BSD-3-Clause license found in the
* LICENSE file in the root directory of this source tree.
*/

import React from 'react';
import '@rhythm-ui/hero-banner';

import {IRuiHeroBanner} from './IRuiHeroBanner';

export class RuiHeroBanner extends React.Component<IRuiHeroBanner> {
	public render(): JSX.Element {
		return (
			<rui-hero-banner {...this.props}>
				{this.props.children}
			</rui-hero-banner >
		);
	}
}

export default RuiHeroBanner;
