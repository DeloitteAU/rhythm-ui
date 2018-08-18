import React from 'react';
import { shallow } from 'enzyme';
import HelpText from './HelpText';

describe('HelpText', () => {
	let baseProps;
	let shallowHelpText;

	const helpText = props => {
		if (!shallowHelpText) {
			shallowHelpText = shallow(
				<HelpText {...baseProps} {...props} />,
			);
		}
		return shallowHelpText;
	};

	beforeEach(() => {
		baseProps = {};
		shallowHelpText = undefined;
	});

	it('unused attributes are passed to the outer element', () => {
		const component = helpText({
			poster: 'testValue',
		});
		const outerElement = component.find('.ctrl-help');
		expect(outerElement.prop('poster')).toEqual('testValue');
	});

	it('adds the classes from the className prop to the outer element\'s classes', () => {
		const component = helpText({
			className: 'test-class',
		});
		const outerElement = component.find('.ctrl-help');
		expect(outerElement.hasClass('test-class')).toBe(true);
	});

	it('uses the `tag` prop as it\'s outer element', () => {
		const component = helpText({
			tag: 'faketag',
		});
		const outerElement = component.find('.ctrl-help');
		expect(outerElement.type()).toEqual('faketag');
	});

	describe('when children are passed in', () => {
		beforeEach(() => {
			baseProps.children = <div><p>test children</p></div>;
		});

		it('the children are rendered inside the outer element', () => {
			const component = helpText();
			const outerElement = component.find('.ctrl-help');
			expect(outerElement.children()).toEqual(helpText().children());
		});
	});
});
