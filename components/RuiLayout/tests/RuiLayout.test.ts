/* eslint @typescript-eslint/explicit-function-return-type: 0 */
/**
* Copyright Deloitte Digital 2019
*
* This source code is licensed under the BSD-3-Clause license found in the
* LICENSE file in the root directory of this source tree.
*/

import '../src';
import TestUtils from '../../../TestUtils';

describe('RuiLayout', () => {

  it('Renders the RuiLayout', async () => {
    const ele = await TestUtils.render('rui-layout', {}, '');
    expect(ele).toBeDefined();
    expect(ele.shadowRoot).toBeDefined();
  });

  it('Renders with the correct type', async () => {
    const ele = await TestUtils.render('rui-layout', {type: 'monet'});
    expect(ele).toBeDefined();
    expect(ele.shadowRoot).toBeDefined();
    expect(ele.getAttribute('type')).toBe('monet');
  });

});