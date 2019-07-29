/**
 * Copyright Deloitte Digital 2019
 *
 * This source code is licensed under the BSD-3-Clause license found in the
 * LICENSE file in the root directory of this source tree.
 */
declare global {
	namespace JSX {
		interface IntrinsicElements { // eslint-disable-line @typescript-eslint/interface-name-prefix
			'rui-breadcrumbs': any;
		}
	}
}

export interface IRuiBreadcrumbsProps {
    maxCrumbs?: number,
    children: React.ReactNode[] | React.ReactNode;
    onCrumbSelect?: Function,
}

export interface IRuiBreadcrumbsCrumbProps {
    href?: string,
    truncatedLabel?: string,
    as?: string,
    children: React.ReactNode[] | React.ReactNode;
}

export interface IRuiBreadcrumbsSeperatorProps {
    as?: string,
    children: React.ReactNode[] | React.ReactNode;
}
