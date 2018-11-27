import React from 'react';
import {shallow} from 'enzyme';
import Label from './Label';

describe('Label', () => {
	let baseProps;
	let shallowLabel;
	const label = props => {
		if (!shallowLabel) {
			shallowLabel = shallow(
				<Label {...baseProps} {...props} />,
			);
		}
		return shallowLabel;
	};

	beforeEach(() => {
		baseProps = {};
		shallowLabel = undefined;
	});

	it('unused attributes are passed to the outer element', () => {
		const component = label({
			poster: 'testValue',
		});
		const outerElement = component.find('.ctrl-label');
		expect(outerElement.prop('poster')).toEqual('testValue');
	});

	it('adds the classes from the className prop to the outer element\'s classes', () => {
		const component = label({
			className: 'test-class',
		});
		const outerElement = component.find('.ctrl-label');
		expect(outerElement.hasClass('test-class')).toBe(true);
	});

	it('uses the `tag` prop as it\'s outer element', () => {
		const component = label({
			tag: 'faketag',
		});
		const outerElement = component.find('.ctrl-label');
		expect(outerElement.type()).toEqual('faketag');
	});

	it('if no `tag` is specify it uses a <label />', () => {
		const component = label();
		const outerElement = component.find('.ctrl-label');
		expect(outerElement.type()).toEqual('label');
	});

	describe('when the `hide` prop is false', () => {
		beforeEach(() => {
			baseProps.hide = false;
		});

		it('the .vh class is not added to the outer element', () => {
			const component = label();
			const outerElement = component.find('.ctrl-label');
			expect(outerElement.hasClass('vh')).toBe(false);
		});
	});

	describe('when the `hide` prop is true', () => {
		beforeEach(() => {
			baseProps.hide = true;
		});

		it('the .vh class is added to the outer element', () => {
			const component = label();
			const outerElement = component.find('.ctrl-label');
			expect(outerElement.hasClass('vh')).toBe(true);
		});
	});

	describe('when the `text` prop is set', () => {
		beforeEach(() => {
			baseProps.text = 'test value';
		});

		it('the text is rendered inside the outer element', () => {
			const component = label();
			const outerElement = component.find('.ctrl-label');
			expect(outerElement.children().text()).toEqual('test value');
		});
	});

	describe('when children are passed in', () => {
		beforeEach(() => {
			baseProps.children = <div><p>test children</p></div>;
		});

		it('the children are rendered inside the outer element', () => {
			const component = label();
			const outerElement = component.find('.ctrl-label');
			expect(outerElement.children()).toEqual(label().children());
		});
	});

	describe('when `helpText` is passed in', () => {
		beforeEach(() => {
			baseProps.helpText = 'test helpText';
		});

		it('a `div.ctrl-label__help` is rendered', () => {
			expect(label().find('.ctrl-label__help').length).toBe(1);
		});

		it('`helpText` is passed as the `div.ctrl-label__help`s children', () => {
			const component = label();
			const help = component.find('.ctrl-label__help').first();
			expect(help.prop('children')).toEqual('test helpText');
		});
	});

	describe('when `helpText` is not passed in', () => {
		beforeEach(() => {
			baseProps.helpText = null;
		});

		it('no `div.ctrl-label__help` is rendered', () => {
			expect(label().find('.ctrl-label__help').length).toBe(0);
		});
	});
});
