/* eslint @typescript-eslint/explicit-function-return-type: 0 */
/**
* Copyright Deloitte Digital 2019
*
* This source code is licensed under the BSD-3-Clause license found in the
* LICENSE file in the root directory of this source tree.
*/

import '../src';
import {TestUtils} from '../../../TestUtils';

describe('RuiSkipLinks', () => {

  it('Renders the RuiSkiplinks', async () => {
    const ele = await TestUtils.render('rui-skip-links', {}, '');
    expect(ele).toBeDefined();
    expect(ele.shadowRoot).toBeDefined();
  });

  it('Renders the list', async () => {
    const ele = await TestUtils.render('rui-skip-links', {}, '');
    expect(ele).toBeDefined();
    expect(ele.shadowRoot).toBeDefined();
    expect(ele.shadowRoot.firstElementChild.tagName.toLowerCase()).toBe('ul');
    expect(ele.shadowRoot.firstElementChild.getElementsByTagName('li')).toBeTruthy();
    expect(ele.shadowRoot.firstElementChild.getElementsByTagName('a')).toBeTruthy();
  });

});
