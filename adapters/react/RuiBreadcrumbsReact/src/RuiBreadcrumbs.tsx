/**
* Copyright Deloitte Digital 2019
*
* This source code is licensed under the BSD-3-Clause license found in the
* LICENSE file in the root directory of this source tree.
*/

import React from 'react';
import '@rhythm-ui/rui-breadcrumbs';
import '@rhythm-ui/rui-link';


/**
 * Breadcrumb Item wrapps the rui-link in a li element which is passed into the slot "crumb".
 * It is then exposed as Item. to be used as Breadcrumbs.Item
 */


export const BreadcrumbItem = (props): React.ReactNode => { //eslint-disable-line react/no-multi-comp
	const {...otherProps} = props;
	const active = props.active ? 'page' : undefined;

	return React.createElement('li', {
		'slot': 'crumb',
		'aria-current': active,
	}, <rui-link {...otherProps} > {props.children}</rui-link>,
	);
};

export class RuiBreadcrumbs extends React.Component { //eslint-disable-line react/no-multi-comp
	public static Item = BreadcrumbItem;

	public render() {
		return (
			<rui-breadcrumbs {...this.props}>
				{this.props.children}
			</rui-breadcrumbs >
		);
	}
}


