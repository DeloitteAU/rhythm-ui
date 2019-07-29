/* eslint @typescript-eslint/explicit-function-return-type: 0 */
/**
* Copyright Deloitte Digital 2019
*
* This source code is licensed under the BSD-3-Clause license found in the
* LICENSE file in the root directory of this source tree.
*/

import '../src';
import TestUtils from '../../../TestUtils';

const eightBreadcrumbChildren = `
  <a slot="crumb" href="#home">Home</a>
  <a slot="crumb" href="#b1">Breadcrumb 1</a>
  <a slot="crumb" href="#b2">Breadcrumb 2</a>
  <a slot="crumb" href="#b3">Breadcrumb 3</a>
  <a slot="crumb" href="#b4">Breadcrumb 4</a>
  <a slot="crumb" href="#b5">Breadcrumb 5</a>
  <a slot="crumb" href="#b6">Breadcrumb 6</a>
  <span slot="crumb">Breadcrumb 7</span>
`;

const fiveBreadcrumbChildren = `
  <a slot="crumb" href="#home">Home</a>
  <a slot="crumb" href="#b1">Breadcrumb 1</a>
  <a slot="crumb" href="#b2">Breadcrumb 2</a>
  <a slot="crumb" href="#b3">Breadcrumb 3</a>
  <span slot="crumb">Breadcrumb 4</span>
`;

describe('RuiBreadcrumbs', () => {
  it('Renders the RuiBreadcrumbs', async () => {
    const ele = await TestUtils.render('rui-breadcrumbs', {}, '');
    expect(ele).toBeDefined();
    expect(ele.shadowRoot).toBeDefined();
  });

  // check custom crumbs can be slotted
  it('Checks that custom breadcrumb elements can be slotted', async () => {
    const ele = await TestUtils.render('rui-breadcrumbs', {}, `
      <a id="custom-normal-crumb" href="/some/link" slot="crumb">Home</a>
      <span id="custom-active-crumb" slot="crumb">Breadcrumb 1</span>
    `);

    const crumbSlots = ele.shadowRoot.querySelectorAll('[name*="crumb"]')
    expect(crumbSlots.length === 2);

    const crumbOne = crumbSlots[0].assignedNodes()[0];
    const crumbTwo = crumbSlots[1].assignedNodes()[0];

    expect(crumbOne.textContent).toEqual('Home');
    expect(crumbOne.id).toEqual('custom-normal-crumb');

    expect(crumbTwo.textContent).toEqual('Breadcrumb 1');
    expect(crumbTwo.id).toEqual('custom-active-crumb');
  })

  // check crumbs truncates at 7 items
  it('Truncates the items at > 7 items by default', async () => {
    const ele = await TestUtils.render('rui-breadcrumbs', {}, eightBreadcrumbChildren);

    const crumbs = ele.shadowRoot.querySelectorAll('li');
    expect(crumbs.length).toEqual(8);

    const truncatedCrumbSelect = crumbs[6].querySelector('select');
    const truncatedCrumbOptions = truncatedCrumbSelect.querySelectorAll('option');
    
    expect(truncatedCrumbOptions[0].textContent).toEqual('...')
    expect(truncatedCrumbOptions[1].textContent).toEqual('Breadcrumb 6')
  });

  // check crumbs works with custom truncation limit
  it('Truncates the items according to maxCrumbs attribute', async () => {
    const ele = await TestUtils.render('rui-breadcrumbs', {
      'max-crumbs': 2,
    }, fiveBreadcrumbChildren);

    const crumbs = ele.shadowRoot.querySelectorAll('li');

    expect(crumbs.length).toEqual(3)

    const truncatedCrumbSelect = crumbs[1].querySelector('select');
    const truncatedCrumbOptions = truncatedCrumbSelect.querySelectorAll('option');

    truncatedCrumbOptions.forEach((option, i) => {
      if (i === 0) {
        expect(option.textContent).toEqual('...')
      } else {
        expect(option.textContent).toEqual(`Breadcrumb ${i}`)
      }
    })
  })

  // 
  it('Renders correct amount of seperators by default', async () => {
    const ele = await TestUtils.render('rui-breadcrumbs', {}, fiveBreadcrumbChildren);

    const seperators = ele.shadowRoot.querySelectorAll('.seperator');
    expect(seperators.length).toEqual(4);
  });

  // check seperator can be slotted
  it('Allows user to add custom seperator components', async () => {
    const ele = await TestUtils.render('rui-breadcrumbs', {}, `
    ${fiveBreadcrumbChildren}
    <span class="custom-seperator" slot="seperator">/</span>
    `);

    const seperatorSlots = ele.shadowRoot.querySelectorAll('[name*="seperator"]')
    expect(seperatorSlots.length).toEqual(4);
    
    seperatorSlots.forEach(slot => {
      const seperatorEl = slot.assignedNodes()[0];
      expect(seperatorEl.classList).toContain('custom-seperator')
    })
  });

  
});