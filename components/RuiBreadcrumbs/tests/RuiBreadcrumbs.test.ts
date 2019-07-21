/* eslint @typescript-eslint/explicit-function-return-type: 0 */
/**
* Copyright Deloitte Digital 2019
*
* This source code is licensed under the BSD-3-Clause license found in the
* LICENSE file in the root directory of this source tree.
*/

import '../src';
import TestUtils from '../../../TestUtils';

describe('RuiBreadcrumbs', () => {
  it('Renders the RuiBreadcrumbs', async () => {
    const ele = await TestUtils.render('rui-breadcrumbs', {}, '');
    expect(ele).toBeDefined();
    expect(ele.shadowRoot).toBeDefined();
  });

  // check crumbs attribute renders

  // check crumbs works with truncation

  // check navigation?

  // check events fire

  // check seperator can be slotted

  // check custom crumbs can be slotted

  // check events work with custom crumbs

  // check truncation works with custom crumbs too
});