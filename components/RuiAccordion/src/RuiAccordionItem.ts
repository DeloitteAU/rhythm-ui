/**
 * Copyright Deloitte Digital 2019
 *
 * This source code is licensed under the BSD-3-Clause license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {LitElement, html, property, CSSResultArray, TemplateResult} from 'lit-element';
import {getShadowStylesFor} from '@rhythm-ui/styles';
import RuiExpandCollapse from '@rhythm-ui/expand-collapse/lib/RuiExpandCollapse';
import {variables, layout} from './RuiAccordionItem.css';

export class RuiAccordionItem extends RuiExpandCollapse {
	public static get styles(): CSSResultArray {
		return [variables, layout, getShadowStylesFor('RuiAccordionItem')];
	}

	public static tag() {
		return 'rui-accordion-item';
	}
}

export default RuiAccordionItem;
