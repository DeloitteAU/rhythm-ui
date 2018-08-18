import React from 'react';
import { mount } from 'enzyme';
import Tooltip from './Tooltip';

describe('Tooltip', () => {
	let props;
	let mountedTooltip;

	const tooltip = () => {
		if (!mountedTooltip) {
			mountedTooltip = mount(
				<Tooltip {...props} />,
			);
		}
		return mountedTooltip;
	};

	beforeEach(() => {
		props = {
			// reset your props here
		};
		mountedTooltip = undefined;
	});

	xit('you need to write some tests!', () => {
		// TIP: You can get the enzyme ReactWrapper by calling tooltip()
		expect(true).toBe(false);
	});
});
