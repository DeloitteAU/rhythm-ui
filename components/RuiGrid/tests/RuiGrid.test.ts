/* eslint @typescript-eslint/explicit-function-return-type: 0 */
/**
* Copyright Deloitte Digital 2019
*
* This source code is licensed under the BSD-3-Clause license found in the
* LICENSE file in the root directory of this source tree.
*/

import '../src';
import {TestUtils} from '../../../TestUtils';

describe('RuiGrid', () => {

  it('Renders the RuiGrid', async () => {
    const ele = await TestUtils.render('rui-grid', {}, '');
    expect(ele).toBeDefined();
    expect(ele.shadowRoot).toBeDefined();

  });

  it('Renders with the correct amount of columns', async () => {
    const ele = await TestUtils.render('rui-grid', {columns: 5});
    expect(ele).toBeDefined();
    expect(ele.shadowRoot).toBeDefined();
    expect(ele.getAttribute('columns')).toBe('5');
  });

});