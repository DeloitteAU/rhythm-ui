/**
 * Copyright Deloitte Digital 2019
 *
 * This source code is licensed under the BSD-3-Clause license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import '@rhythm-ui/story';

import {IRuiStoryProps} from './IRuiStory';

export class RuiStory extends React.Component<IRuiStoryProps> {
	public render(): JSX.Element {
		return (
			<rui-story {...this.props}>
				{this.props.children}
			</rui-story>
		);
	}
}

export default RuiStory;
