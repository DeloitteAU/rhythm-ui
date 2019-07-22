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
  it('Renders the crumbs given via crumbs attribute', async () => {
    const ele = await TestUtils.render('rui-breadcrumbs', {
      'crumbs': `[
        {"title": "Home", "url": "/some/link"},
        {"title": "Breadcrumb 1", "url": "/someother/link"}
      ]`
    }, '');

    const crumbs = ele.shadowRoot.querySelectorAll('a');
    expect(crumbs.length === 2);

    const crumbOne = crumbs[0];
    const crumbTwo = crumbs[1];

    // first crumb should be a full href
    expect(crumbOne.textContent).toEqual('Home');
    expect(crumbOne.hasAttribute('href')).toBeTruthy();
    expect(crumbOne.getAttribute('href')).toEqual('/some/link');

    // second crumb should be active crumb, so no href
    expect(crumbTwo.textContent).toEqual('Breadcrumb 1');
    expect(!crumbTwo.hasAttribute('href')).toBeTruthy();
  });


  // check crumbs truncates at 7 items
  it('Truncates the items at > 7 items by default', async () => {
    const ele = await TestUtils.render('rui-breadcrumbs', {
      'crumbs': `[
        {"title": "Home", "url": "/some/link"},
        {"title": "Breadcrumb 1", "url": "/someother/link"},
        {"title": "Breadcrumb 2", "url": "/someother/link"},
        {"title": "Breadcrumb 3", "url": "/someother/link"},
        {"title": "Breadcrumb 4", "url": "/someother/link"},
        {"title": "Breadcrumb 5", "url": "/someother/link"},
        {"title": "Breadcrumb 6", "url": "/someother/link"},
        {"title": "Breadcrumb 7", "url": "/someother/link"}
      ]`
    }, '');

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
      'crumbs': `[
        {"title": "Home", "url": "/some/link"},
        {"title": "Breadcrumb 1", "url": "/someother/link"},
        {"title": "Breadcrumb 2", "url": "/someother/link"},
        {"title": "Breadcrumb 3", "url": "/someother/link"},
        {"title": "Breadcrumb 4", "url": "/someother/link"}
      ]`
    }, '');

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
    const ele = await TestUtils.render('rui-breadcrumbs', {
      'crumbs': `[
        {"title": "Home", "url": "/some/link"},
        {"title": "Breadcrumb 1", "url": "/someother/link"},
        {"title": "Breadcrumb 2", "url": "/someother/link"},
        {"title": "Breadcrumb 3", "url": "/someother/link"}
      ]`
    }, '');

    const seperators = ele.shadowRoot.querySelectorAll('.seperator');
    expect(seperators.length).toEqual(3);
  });

  // check seperator can be slotted
  it('Allows user to add custom seperator components', async () => {
    const ele = await TestUtils.render('rui-breadcrumbs', {
      'crumbs': `[
        {"title": "Home", "url": "/some/link"},
        {"title": "Breadcrumb 1", "url": "/someother/link"},
        {"title": "Breadcrumb 2", "url": "/someother/link"},
        {"title": "Breadcrumb 3", "url": "/someother/link"}
      ]`
    }, '<span class="custom-seperator" slot="seperator">/</span>');

    const seperatorSlots = ele.shadowRoot.querySelectorAll('[name*="seperator"]')
    expect(seperatorSlots.length).toEqual(3);
    
    seperatorSlots.forEach(slot => {
      const seperatorEl = slot.assignedNodes()[0];
      expect(seperatorEl.classList).toContain('custom-seperator')
    })
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
});