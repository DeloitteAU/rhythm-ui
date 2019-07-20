/**
* Copyright Deloitte Digital 2019
*
* This source code is licensed under the BSD-3-Clause license found in the
* LICENSE file in the root directory of this source tree.
*/

import React from 'react';
import '@rhythm-ui/rui-breadcrumbs';

import {
	IRuiBreadcrumbsProps,
	IRuiBreadcrumbsCrumbProps,
	IRuiBreadcrumbsSeperatorProps,
} from './IRuiBreadcrumbs';

/**
 * The Crumb subcomponent is used when the user wants to pass in custom breadcrumb elements
 */
export const Crumb = (props: IRuiBreadcrumbsCrumbProps): React.ReactNode => {
	const {as, truncatedLabel, ...otherProps} = props;

	let elementType = 'a';
	if (as) {
		elementType = as;
	}

	const crumbProps = {
		slot: 'crumb',
		...otherProps,
	};

	if (truncatedLabel) {
		crumbProps['data-truncated-label'] = truncatedLabel;
	}

	const crumbEl = React.createElement(elementType, crumbProps);

	return crumbEl;
};

/**
 * The Seperator subcomponent is used if the user wants to pass in a custom seperator element
 */
export const Seperator = (props: IRuiBreadcrumbsSeperatorProps): React.ReactNode => {
	const {as, ...otherProps} = props;

	let elementType = 'span';
	if (as) {
		elementType = as;
	}

	const crumbEl = React.createElement(elementType, {
		slot: 'seperator',
		...otherProps,
	});

	return crumbEl;
};

/**
 * React adaptor for <rui-breadcrumbs /> component
 */
export class RuiBreadcrumbs extends React.Component<IRuiBreadcrumbsProps> {
	// used to add event listeners to element
	private ruiBreadcrumbsEl = React.createRef<HTMLElement>();

	// Crumb subcomponent accessed via RuiBreadcrumbs.Crumb
	public static Crumb = Crumb;

	// Seperator subcomponent accessed via RuiBreadcrumbs.Seperator
	public static Seperator = Seperator;


	/**
	 * Click handler for when the crumb item click event is fired
	 */
	private _handleCrumbClick = (e: CustomEvent): void => {
		this.props.onCrumbClick(e.detail.crumbIndex);
	}

	/**
	 * Click handler for when the crumb item selected event is fired
	 */
	private _handleCrumbSelect = (e: CustomEvent): void => {
		this.props.onCrumbSelect(e.detail.crumbIndex);
	}

	/**
	 * If the user has specified a custom click or select handler then
	 * we attach event listeners and fire coresponding handler functions
	 */
	public componentDidMount(): void {
		const {onCrumbSelect, onCrumbClick} = this.props;
		const el: HTMLElement | null = this.ruiBreadcrumbsEl.current;
		if ((onCrumbSelect || onCrumbClick) && el) {
			if (onCrumbClick) {
				el.addEventListener('rui-breadcrumbs-item-click', this._handleCrumbClick);
			}

			if (onCrumbSelect) {
				el.addEventListener('rui-breadcrumbs-item-select', this._handleCrumbSelect);
			}
		}
	}

	/**
	 * Clean up any event listeners if any are set
	 */
	public componentWillUnmount(): void {
		const {onCrumbSelect, onCrumbClick} = this.props;
		const el: HTMLElement | null = this.ruiBreadcrumbsEl.current;

		if ((onCrumbSelect || onCrumbClick) && el) {
			if (onCrumbClick) {
				el.removeEventListener('rui-breadcrumbs-item-click', this._handleCrumbClick);
			}

			if (onCrumbSelect) {
				el.removeEventListener('rui-breadcrumbs-item-select', this._handleCrumbSelect);
			}
		}
	}

	/**
	 * Render rui-breadcrumbs component, with any attribute name conversions applied
	 */
	public render(): React.ReactNode {
		const {maxCrumbs, crumbs, onCrumbSelect, onCrumbClick, ...otherProps} = this.props;

		const props = otherProps;

		if (maxCrumbs) {
			props['max-crumbs'] = maxCrumbs;
		}

		if (crumbs) {
			props.crumbs = JSON.stringify(crumbs);
		}

		return (
			<rui-breadcrumbs ref={this.ruiBreadcrumbsEl} {...props}>
				{this.props.children}
			</rui-breadcrumbs >
		);
	}
}


