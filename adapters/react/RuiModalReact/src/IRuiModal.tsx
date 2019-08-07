/**
* Copyright Deloitte Digital 2019
*
* This source code is licensed under the BSD-3-Clause license found in the
* LICENSE file in the root directory of this source tree.
*/
/* eslint import/prefer-default-export: 0 */

import {ReactNode, ReactElement} from 'react';

declare global {
	namespace JSX {
		interface IntrinsicElements { // eslint-disable-line @typescript-eslint/interface-name-prefix
			'rui-modal': any;
		}
	}
}

export interface IRuiModalProps {
	children: ReactNode,
	noClickOutsideClose: boolean,
	noEscBtnClose: boolean,
	size: 'small' | 'medium' | 'fullscreen',
	initiallyFocused: string,
	onCancel: Function,
	onConfirm: Function,
	cancelTrigger?: ReactElement,
	confirmTrigger?: ReactElement,
	customClose?: ReactElement,
}

export interface IRuiModalDetailProps {
	as?: string,
	children: React.ReactNode | React.ReactNodeArray
}

export interface IRuiModalHeadingProps {
	as?: string,
	children: React.ReactNode | React.ReactNodeArray
}
