/**
* Copyright Deloitte Digital 2019
*
* This source code is licensed under the BSD-3-Clause license found in the
* LICENSE file in the root directory of this source tree.
*/

import React from 'react';
import '@rhythm-ui/breadcrumbs';

import {IRuiBreadcrumbs} from './IRuiBreadcrumbs';

export class RuiBreadcrumbs extends React.Component<IRuiBreadcrumbs> { //eslint-disable-line react/no-multi-comp
	public render() {
		return (
			<rui-breadcrumbs {...this.props}>
				{this.props.children}
			</rui-breadcrumbs>
		);
	}
}

export default RuiBreadcrumbs;
