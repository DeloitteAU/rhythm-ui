/* eslint @typescript-eslint/explicit-function-return-type: 0 */
/**
* Copyright Deloitte Digital 2019
*
* This source code is licensed under the BSD-3-Clause license found in the
* LICENSE file in the root directory of this source tree.
*/
import '../src';
import TestUtils from '../../../TestUtils';

describe('RuiExpandCollapse', () => {
  it('Renders the RuiExpandCollapse', async () => {
    const ele = await TestUtils.render('rui-expand-collapse', {}, '');
    expect(ele).toBeDefined();
    expect(ele.shadowRoot).toBeDefined();
  });

  /**
   * Checks that when given a correctly defined summary content slot element, that
   * link to it exists in shadow dom
   */
  it('Links given summary content to shadow dom', async () => {
    const summaryElStr = '<p id="summary-content" slot="summary-content">Expander summary</p>';
    const children = `${summaryElStr}`;
    const ele = await TestUtils.render('rui-expand-collapse', {}, children);
    
    const summaryEl = ele.querySelector('#summary-content');
    expect(ele).toBeDefined();
    expect(ele.shadowRoot).toBeDefined();
    
    // get the slot we are trying to render into from shadow dom
    const summarySlot: HTMLSlotElement = ele.shadowRoot.querySelector('slot[name=summary-content]');
    expect(summarySlot).toBeDefined();
    
    // find the rendered child of the summary slot
    const slottedEl = summarySlot.assignedNodes()[0];
    expect(slottedEl).toBeDefined();

    // if the slot is configured correctly the provided el and the slotted el should be same
    expect(slottedEl).toEqual(summaryEl);
  });

  /**
   * Checks that when given a correctly defined details content slot element, that
   * link to it exists in shadow dom
   */
  it('Links given details content to shadow dom', async () => {
    const detailsElStr = '<p id="details-content" slot="details-content">Details</p>';
    const children = `${detailsElStr}`;
    const ele = await TestUtils.render('rui-expand-collapse', {}, children);
    
    const detailsEl = ele.querySelector('#details-content');
    expect(ele).toBeDefined();
    expect(ele.shadowRoot).toBeDefined();
    
    // get the slot we are trying to render into from shadow dom
    const detailsSlot: HTMLSlotElement = ele.shadowRoot.querySelector('slot[name=details-content]');
    expect(detailsSlot).toBeDefined();
    
    // find the rendered child of the summary slot
    const slottedEl = detailsSlot.assignedNodes()[0];
    expect(slottedEl).toBeDefined();

    // if the slot is configured correctly the provided el and the slotted el should be same
    expect(slottedEl).toEqual(detailsEl);
  });

  it('Hides given details content by default', async () => {
    const summaryElStr = '<p id="summary-content" slot="summary-content">Expander summary</p>';
    const detailsElStr = '<p id="details-content" slot="details-content">Details</p>';
    const children = `${summaryElStr}${detailsElStr}`;
    const ele = await TestUtils.render('rui-expand-collapse', {}, children);
    
    expect(ele).toBeDefined();
    expect(ele.shadowRoot).toBeDefined();
    
    // get the slot we are trying to render into from shadow dom
    const detailsSlot: HTMLSlotElement = ele.shadowRoot.querySelector('slot[name=details-content]');
    expect(detailsSlot).toBeDefined();
    
    // find the rendered child of the summary slot
    const slottedEl: Node = detailsSlot.assignedNodes()[0];
    
    // expect the slotted el to not display
    expect((slottedEl as HTMLElement).offsetParent).toEqual(null);
  });

  it('Shows given details content when given initial open attribute', async () => {
    const summaryElStr = '<p id="summary-content" slot="summary-content">Expander summary</p>';
    const detailsElStr = '<p id="details-content" slot="details-content">Details</p>';
    const children = `${summaryElStr}${detailsElStr}`;
    const ele = await TestUtils.render('rui-expand-collapse', {open: true}, children);
    
    expect(ele).toBeDefined();
    expect(ele.shadowRoot).toBeDefined();
    
    // get the slot we are trying to render into from shadow dom
    const detailsSlot: HTMLSlotElement = ele.shadowRoot.querySelector('slot[name=details-content]');
    expect(detailsSlot).toBeDefined();
    
    // find the rendered child of the summary slot
    const slottedEl: Node = detailsSlot.assignedNodes()[0];
    
    // expect the slotted el to display
    expect((slottedEl as HTMLElement).offsetParent).not.toEqual(null);
  });

  it('Shows hidden details content when summary button is clicked', async () => {
    const summaryElStr = '<p id="summary-content" slot="summary-content">Expander summary</p>';
    const detailsElStr = '<p id="details-content" slot="details-content">Details</p>';
    const children = `${summaryElStr}${detailsElStr}`;
    const ele = await TestUtils.render('rui-expand-collapse', {}, children);

    expect(ele).toBeDefined();
    expect(ele.shadowRoot).toBeDefined();

    const triggerEl = ele.shadowRoot.querySelector('button');
    
    // get the slot we are trying to render into from shadow dom
    const detailsSlot: HTMLSlotElement = ele.shadowRoot.querySelector('slot[name=details-content]');
    expect(detailsSlot).toBeDefined();
    
    // find the rendered child of the summary slot
    const slottedEl: Node = detailsSlot.assignedNodes()[0];
    
    // first we expect it to be hidden before click
    expect((slottedEl as HTMLElement).offsetParent).toEqual(null);

    await triggerEl.click();

    // expect the slotted el to display
    expect((slottedEl as HTMLElement).offsetParent).not.toEqual(null);
  });

  it('Hides shown details content when summary button is clicked', async () => {
    const summaryElStr = '<p id="summary-content" slot="summary-content">Expander summary</p>';
    const detailsElStr = '<p id="details-content" slot="details-content">Details</p>';
    const children = `${summaryElStr}${detailsElStr}`;
    const ele = await TestUtils.render('rui-expand-collapse', {open: true}, children);

    expect(ele).toBeDefined();
    expect(ele.shadowRoot).toBeDefined();

    const triggerEl = ele.shadowRoot.querySelector('button');
    
    // get the slot we are trying to render into from shadow dom
    const detailsSlot: HTMLSlotElement = ele.shadowRoot.querySelector('slot[name=details-content]');
    expect(detailsSlot).toBeDefined();
    
    // find the rendered child of the summary slot
    const slottedEl: Node = detailsSlot.assignedNodes()[0];
    
    // first we expect it to not be hidden before click
    expect((slottedEl as HTMLElement).offsetParent).not.toEqual(null);

    await triggerEl.click();
  
    // expect the slotted el to now be hidden
    expect((slottedEl as HTMLElement).offsetParent).toEqual(null);
  });
});