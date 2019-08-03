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


/**
 * The heading that appears in the modal,
 * a h2 element by default
 */
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

/**
 * The detail that appears in the modal, basically the
 * modal body, a p element by default
 */
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

/**
 * RuiModal is a react adapter for the rui-modal
 * web component, transforming the attribute names
 * and adding slots attributes as needed
 */
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

	/**
	 * Event handler for when modal is closed for
	 * reasons other than a confirm click
	 */
	private _handleCancel = (): void => {
		const {onCancel} = this.props;
		if (onCancel) { onCancel(); }
	}

	/**
	 * Event handler for when modal is closed
	 * due to confirm click
	 */
	private _handleConfirm = (): void => {
		const {onConfirm} = this.props;
		if (onConfirm) { onConfirm(); }
	}

	/**
	 * If onCancel or onConfirm functions have been specified
	 * then set up event handlers
	 */
	public componentDidMount(): void {
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

	/**
	 * If onCancel or onConfirm functions have been specified
	 * then clean up event handlers
	 */
	public componentWillUnmount(): void {
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

	/**
	 * Take props and transform them to the names that
	 * rui-modal expects, also clones and attaches the correct slot
	 * values to the given cancel/confirm trigger elements
	 */
	public render(): JSX.Element {
		const {
			noClickOutsideClose,
			noEscBtnClose,
			initiallyFocused,
			onCancel,
			onConfirm,
			cancelTrigger,
			confirmTrigger,
			customClose,
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

		let CustomCloseEl = null;
		if (customClose) {
			CustomCloseEl = React.cloneElement(customClose, {slot: 'close'});
		}

		return (
			<rui-modal {...props}>
				{this.props.children}
				{CancelTriggerEl}
				{ConfirmTriggerEl}
				{CustomCloseEl}
			</rui-modal >
		);
	}
}

export default RuiModal;
