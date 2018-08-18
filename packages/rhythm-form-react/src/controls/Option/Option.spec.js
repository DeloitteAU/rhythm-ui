import React from 'react';
import { shallow } from 'enzyme';
import Option from './Option';
import Label from '../../elements/Label';
import Tooltip from '../../elements/Tooltip';

describe('Option', () => {
	let baseProps;
	let shallowOption;

	const option = props => {
		if (!shallowOption) {
			shallowOption = shallow(
				<Option {...baseProps} {...props} />,
			);
		}
		return shallowOption;
	};

	beforeEach(() => {
		baseProps = {
			// reset your props here
			id: 'baseId',
			name: 'baseProps',
		};
		shallowOption = undefined;
	});

	it('always renders a wrapper', () => {
		expect(option().find('.option').length).toBe(1);
	});

	it('passes the `className` prop to the wrapper', () => {
		const component = option({
			className: 'test-class',
		});
		const wrapper = component.find('.option');
		expect(wrapper.hasClass('test-class')).toBe(true);
	});

	it('always renders an input', () => {
		expect(option().find('input').length).toBe(1);
	});

	it('the `name` prop is passed to the input as `name`', () => {
		const component = option({
			name: 'testName',
		});
		const control = component.find('input');
		expect(control.prop('name')).toBe('testName');
	});

	it('the `id` prop is passed to the input as `id`', () => {
		const component = option({
			id: 'testId',
		});
		const control = component.find('input');
		expect(control.prop('id')).toBe('testId');
	});

	it('the `type` prop is passed to the input as `type`', () => {
		const component = option({
			type: 'radio',
		});
		const control = component.find('input');
		expect(control.prop('type')).toBe('radio');
	});

	it('unused attributes are passed to the input', () => {
		const component = option({
			poster: 'testValue',
		});
		const outerElement = component.find('input');
		expect(outerElement.prop('poster')).toEqual('testValue');
	});

	describe('when `label` is passed in', () => {
		beforeEach(() => {
			baseProps.id = 'testId',
			baseProps.label = <p>Test label content</p>;
		});

		it('a <Label /> is rendered', () => {
			const component = option();
			const labels = component.find(Label);
			expect(labels.length).toBe(1);
		});

		it('the `label` prop is passed as the <Label />\'s children', () => {
			const component = option();
			const label = component.find(Label).first();
			// The label's children is array because of the tooltip, the first entry is what we want
			expect(label.prop('children')[0]).toEqual(<p>Test label content</p>);
		});

		it('the `id` prop is passed as `htmlFor` to the <Label />', () => {
			const component = option();
			const label = component.find(Label).first();
			// The label's children is array because of the tooltip, the first entry is what we want
			expect(label.prop('htmlFor')).toEqual('testId');
		});

		it('`labelProps` is passed to the <Label />', () => {
			const labelProps = {
				hide: true,
				testProp: 'testVal',
			};

			const component = option({
				labelProps,
			});
			const label = component.find(Label).first();

			expect(label.prop('hide')).toEqual(true);
			expect(label.prop('testProp')).toEqual('testVal');
		});
	});

	describe('when `label` is not passed in', () => {
		beforeEach(() => {
			baseProps.label = null;
		});

		it('no <Label /> is rendered', () => {
			const component = option();
			const labels = component.find(Label);
			expect(labels.length).toBe(0);
		});
	});

	describe('when `tooltip` is passed in', () => {
		beforeEach(() => {
			baseProps.tooltip = 'test tooltip';
		});

		it('a <Tooltip /> is rendered', () => {
			const component = option();
			const tooltips = component.find(Tooltip);
			expect(tooltips.length).toBe(1);
		});

		it('`tooltip` is passed as the <Tooltip />\'s children', () => {
			const component = option();
			const tooltip = component.find(Tooltip).first();
			expect(tooltip.prop('children')).toEqual('test tooltip');
		});
	});

	describe('when `tooltip` is not passed in', () => {
		beforeEach(() => {
			baseProps.tooltip = null;
		});

		it('no <Tooltip /> is rendered', () => {
			const component = option();
			const tooltips = component.find(Tooltip);
			expect(tooltips.length).toBe(0);
		});
	});

	it('uses the `tag` prop as it\'s wrapper element', () => {
		const component = option({
			tag: 'faketag',
		});
		const wrapper = component.find('.option');
		expect(wrapper.type()).toEqual('faketag');
	});
});
