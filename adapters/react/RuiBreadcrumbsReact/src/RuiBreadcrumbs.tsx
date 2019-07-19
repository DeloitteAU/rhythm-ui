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
 * Breadcrumb Crumb wrapps the rui-link in an anchor element by default which is passed into the slot "crumb".
 * It is then exposed as Crumb. to be used as Breadcrumbs.Crumb
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

export class RuiBreadcrumbs extends React.Component<IRuiBreadcrumbsProps> {
	// used to add event listeners to element
	private ruiBreadcrumbsEl = React.createRef<HTMLElement>();

	public static Crumb = Crumb;
	public static Seperator = Seperator;

	public componentDidMount(): void {
		const {onCrumbSelect, onCrumbClick} = this.props;
		if (onCrumbSelect || onCrumbClick) {
			const el: HTMLElement | null = this.ruiBreadcrumbsEl.current;
			if (el) {
				if (onCrumbClick) {
					el.addEventListener('rui-breadcrumbs-item-click', (e: CustomEvent): void => { onCrumbClick(e.detail.crumbIndex); });
				}

				if (onCrumbSelect) {
					el.addEventListener('rui-breadcrumbs-item-select', (e: CustomEvent): void => { onCrumbSelect(e.detail.crumbIndex); });
				}
			}
		}
	}

	public render() {
		const {maxCrumbs, onCrumbSelect, onCrumbClick, ...otherProps} = this.props;

		const props = otherProps;

		if (maxCrumbs) {
			props['max-crumbs'] = maxCrumbs;
		}

		return (
			<rui-breadcrumbs ref={this.ruiBreadcrumbsEl} {...props}>
				{this.props.children}
			</rui-breadcrumbs >
		);
	}
}


