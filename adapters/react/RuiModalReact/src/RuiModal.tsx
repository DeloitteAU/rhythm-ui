/**
* Copyright Deloitte Digital 2019
*
* This source code is licensed under the BSD-3-Clause license found in the
* LICENSE file in the root directory of this source tree.
*/

import React from 'react';
import '@rhythm-ui/modal';

import {
	IRuiModalProps,
	IRuiModalHeadingProps,
	IRuiModalDetailProps,
} from './IRuiModal';


export const Heading = (props: IRuiModalHeadingProps) => {
	const {as, ...otherProps} = props;

	let elementType = 'h2';
	if (as) {
		elementType = as;
	}

	const headingEl = React.createElement(elementType, {
		slot: 'heading',
		...otherProps,
	});

	return headingEl;
};

export const Detail = (props: IRuiModalDetailProps) => {
	const {as, ...otherProps} = props;

	let elementType = 'p';
	if (as) {
		elementType = as;
	}

	const detailEl = React.createElement(elementType, {
		slot: 'detail',
		...otherProps,
	});

	return detailEl;
};

export class RuiModal extends React.Component<IRuiModalProps> {
	// reference to underlying rui-modal element
	private _ruiModalEl = React.createRef<HTMLElement>();

	// expose Cancel component as RuiModal.Heading
	public static Heading = Heading;

	// expose Cancel component as RuiModal.Detail
	public static Detail = Detail;

	// exposes supported sizes to external elements
	public static SIZE = {
		SMALL: 'small',
		MEDIUM: 'medium',
		FULLSCREEN: 'fullscreen',
	}

	private _handleCancel = () => {
		const {onCancel} = this.props;
		if (onCancel) { onCancel(); }
	}

	private _handleConfirm = () => {
		const {onConfirm} = this.props;
		if (onConfirm) { onConfirm(); }
	}

	public componentDidMount() {
		const {onCancel, onConfirm} = this.props;
		const el: HTMLElement | null = this._ruiModalEl.current;
		if (el) {
			if (onCancel) {
				el.addEventListener('rui-modal-cancel', this._handleCancel);
			}

			if (onConfirm) {
				el.addEventListener('rui-modal-confirm', this._handleConfirm);
			}
		}
	}

	public componentWillUnmount() {
		const {onCancel, onConfirm} = this.props;
		const el: IHTMLRuiModalElement | null = this._ruiModalEl.current;
		if (el) {
			if (onCancel) {
				el.removeEventListener('rui-modal-cancel', this._handleCancel);
			}

			if (onConfirm) {
				el.removeEventListener('rui-modal-confirm', this._handleConfirm);
			}
		}
	}

	public render(): JSX.Element {
		const {
			noClickOutsideClose,
			noEscBtnClose,
			initiallyFocused,
			onCancel,
			onConfirm,
			cancelTrigger,
			confirmTrigger,
			...otherProps
		} = this.props;

		const props = otherProps;

		if (noClickOutsideClose) { props['no-click-outside-close'] = noClickOutsideClose; }
		if (noEscBtnClose) { props['no-esc-btn-close'] = noEscBtnClose; }
		if (initiallyFocused) { props['initially-focused'] = initiallyFocused; }

		let CancelTriggerEl = null;
		if (cancelTrigger) {
			CancelTriggerEl = React.cloneElement(cancelTrigger, {slot: 'cancel'});
		}

		let ConfirmTriggerEl = null;
		if (confirmTrigger) {
			ConfirmTriggerEl = React.cloneElement(confirmTrigger, {slot: 'confirm'});
		}

		return (
			<rui-modal {...props}>
				{this.props.children}
				{CancelTriggerEl}
				{ConfirmTriggerEl}
			</rui-modal >
		);
	}
}

export default RuiModal;
