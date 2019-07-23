/**
* Copyright Deloitte Digital 2019
*
* This source code is licensed under the BSD-3-Clause license found in the
* LICENSE file in the root directory of this source tree.
*/

import React from 'react';
import '@rhythm-ui/modal';

import {IRuiModal} from './IRuiModal';

export class RuiModal extends React.Component<IRuiModal> {
	public render(): JSX.Element {
		return (
			<rui-modal {...this.props}>
				{this.props.children}
			</rui-modal >
		);
	}
}

export default RuiModal;
