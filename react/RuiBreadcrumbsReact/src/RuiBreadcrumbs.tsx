/**
* Copyright Deloitte Digital 2019
*
* This source code is licensed under the BSD-3-Clause license found in the
* LICENSE file in the root directory of this source tree.
*/

import React from 'react';
import '@rhythm-ui/rui-breadcrumbs';

export class RuiBreadcrumbs extends React.Component {
    public render() {
        return (
            <rui-breadcrumbs {...this.props}>
                {this.props.children}
            </rui-breadcrumbs >
        );
    }
}

