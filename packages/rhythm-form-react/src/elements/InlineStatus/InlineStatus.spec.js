import React from 'react';
import { shallow } from 'enzyme';
import InlineStatus from './InlineStatus';

describe('InlineStatus', () => {
	let baseProps;
	let shallowInlineStatus;

	const inlineStatus = props => {
		if (!shallowInlineStatus) {
			shallowInlineStatus = shallow(
				<InlineStatus {...baseProps} {...props} />,
			);
		}
		return shallowInlineStatus;
	};

	beforeEach(() => {
		baseProps = {};
		shallowInlineStatus = undefined;
	});

	it('unused attributes are passed to the outer element', () => {
		const component = inlineStatus({
			poster: 'testValue',
		});
		const outerElement = component.find('.status-msg');
		expect(outerElement.prop('poster')).toEqual('testValue');
	});

	it('adds the classes from the className prop to the outer element\'s classes', () => {
		const component = inlineStatus({
			className: 'test-class',
		});
		const outerElement = component.find('.status-msg');
		expect(outerElement.hasClass('test-class')).toBe(true);
	});

	describe('when children are passed in', () => {
		beforeEach(() => {
			baseProps.children = <div><p>test children</p></div>;
		});

		it('the children are rendered', () => {
			const component = inlineStatus();
			const outerElement = component.find('.status-msg').first();
			expect(outerElement.children()).toEqual(inlineStatus().children());
		});
	});

	// Used for accessibility (aria-describedby on an input)
	it('the `id` prop is passed to the outer element', () => {
		const component = inlineStatus({
			id: 'testing123',
		});
		const outerElement = component.find('.status-msg').first();
		expect(outerElement.prop('id')).toEqual('testing123');
	});

	describe('when `status` is set', () => {
		beforeEach(() => {
			baseProps.status = 'info';
		});

		it('a status class is added to the outer element', () => {
			const component = inlineStatus();
			const outerElement = component.find('.status-msg').first();
			expect(outerElement.hasClass('status-msg--info')).toEqual(true);
		});
	});

	describe('when `status` is not set', () => {
		beforeEach(() => {
			baseProps.status = null;
		});

		it('a status class is not added to the outer element', () => {
			const component = inlineStatus();
			const outerElement = component.find('.status-msg').first();
			expect(outerElement.prop('className').trim()).toEqual('status-msg');
		});
	});
});
