/**
 * Copyright Deloitte Digital 2019
 *
 * This source code is licensed under the BSD-3-Clause license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import '@rhythm-ui/story';

export class RuiStory extends React.Component {
	public render() {
		return (
			<rui-story {...this.props}>
				{this.props.children}
			</rui-story>
		);
	}
}

