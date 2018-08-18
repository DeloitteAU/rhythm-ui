import React from 'react';
import { shallow } from 'enzyme';
import Select from './Select';
import Control from '../../elements/Control';

describe('Select', () => {
	let baseProps;
	let shallowSelect;

	const select = props => {
		if (!shallowSelect) {
			shallowSelect = shallow(
				<Select {...baseProps} {...props} />,
			);
		}
		return shallowSelect;
	};

	beforeEach(() => {
		baseProps = {
			name: 'baseName',
		};
		shallowSelect = undefined;
	});

	it('always renders a Control', () => {
		expect(select().find(Control).length).toBe(1);
	});

	it('always renders a \'.select-input\' wrapper', () => {
		expect(select().find('.select-input').length).toBe(1);
	});

	it('always renders an input', () => {
		expect(select().find('select').length).toBe(1);
	});

	it('unused attributes are passed to the input', () => {
		const component = select({
			poster: 'testValue',
		});
		const outerElement = component.find('select');
		expect(outerElement.prop('poster')).toEqual('testValue');
	});

	it('passes the `className` prop to the Control', () => {
		const component = select({
			className: 'test-class',
		});
		const control = component.find(Control);
		expect(control.hasClass('test-class')).toBe(true);
	});

	it('the `name` prop is passed to the input as `name`', () => {
		const component = select({
			name: 'testName',
		});
		const control = component.find('select');
		expect(control.prop('name')).toBe('testName');
	});

	it('the `name` prop is passed to the input as `id`', () => {
		const component = select({
			name: 'testName',
		});
		const control = component.find('select');
		expect(control.prop('id')).toBe('testName');
	});

	it('the correct props are passed through to the Control', () => {
		const props = {
			isInline: true,
			label: 'test label',
			labelProps: {
				testLabelProp: 'test label prop',
			},
			tooltip: 'test tooltip',
			tooltipProps: {
				testTooltipProp: 'test tooltip prop',
			},
			helpText: 'test help text',
			required: true,
			width: 'm',
		};

		const component = select(props);
		const control = component.find(Control);

		expect(control.prop('isInline')).toEqual(props.isInline);
		expect(control.prop('label')).toEqual(props.label);
		expect(control.prop('labelProps')).toEqual(props.labelProps);
		expect(control.prop('tooltip')).toEqual(props.tooltip);
		expect(control.prop('tooltipProps')).toEqual(props.tooltipProps);
		expect(control.prop('helpText')).toEqual(props.helpText);
		expect(control.prop('required')).toEqual(props.required);
		expect(control.prop('width')).toEqual(props.width);
	});

	describe('when `preAddon` is set', () => {
		beforeEach(() => {
			baseProps.preAddon = 'test preaddon';
		});

		it('a \'div.select-input__pre\' is rendered', () => {
			expect(select().find('.select-input__pre').length).toBe(1);
		});

		it('`preAddon` is rendered inside the div', () => {
			expect(select().find('.select-input__pre').first().prop('children')).toBe('test preaddon');
		});
	});

	describe('when `preAddon` is not set', () => {
		beforeEach(() => {
			baseProps.preAddon = null;
		});

		it('no \'div.select-input__pre\' is rendered', () => {
			expect(select().find('.select-input__pre').length).toBe(0);
		});
	});

	describe('when `postAddon` is set', () => {
		beforeEach(() => {
			baseProps.postAddon = 'test postaddon';
		});

		it('a \'div.select-input__post\' is rendered', () => {
			expect(select().find('.select-input__post').length).toBe(1);
		});

		it('`postAddon` is rendered inside the div', () => {
			expect(select().find('.select-input__post').first().prop('children')).toBe('test postaddon');
		});
	});

	describe('when `postAddon` is not set', () => {
		beforeEach(() => {
			baseProps.postAddon = null;
		});

		it('no \'div.select-input__post\' is rendered', () => {
			expect(select().find('.select-input__post').length).toBe(0);
		});
	});

	describe('when `status` is \'error\'', () => {
		beforeEach(() => {
			baseProps.status = 'error';
		});

		it('aria-invalid is set on the input', () => {
			expect(select().find('select').first().prop('aria-invalid')).toEqual(true);
		});
	});

	describe('when `status` is not \'error\'', () => {
		beforeEach(() => {
			baseProps.status = 'info';
		});

		it('aria-invalid is not set on the input', () => {
			expect(select().find('select').first().prop('aria-invalid')).toEqual(false);
		});
	});

	describe('when `status` is set', () => {
		beforeEach(() => {
			baseProps.status = 'info';
		});

		it('a \'select-input--{{status}}\' class is added to the input wrapper', () => {
			const component = select();
			const inputWrapper = component.find('.select-input').first();

			expect(inputWrapper.hasClass('select-input--info')).toEqual(true);
		});
	});

	describe('when `status` is not set', () => {
		beforeEach(() => {
			baseProps.status = null;
		});

		it('a \'select-input--{{status}}\' class is not added to the input wrapper', () => {
			const component = select();
			const inputWrapper = component.find('.select-input').first();

			expect(inputWrapper.prop('className').trim()).toEqual('select-input');
		});
	});

	describe('when the `error` prop is set', () => {
		beforeEach(() => {
			baseProps.error = 'This is the error';
		});

		it('the string \'error\' is passed to the Control as `status`', () => {
			const component = select();
			const control = component.find(Control).first();

			expect(control.prop('status')).toEqual('error');
		});

		it('the prop/value of `error` is passed to the Control as `statusMessage`', () => {
			const component = select();
			const control = component.find(Control).first();

			expect(control.prop('statusMessage')).toEqual('This is the error');
		});

		it('aria-invalid is set on the input', () => {
			expect(select().find('select').first().prop('aria-invalid')).toEqual(true);
		});
	});

	it('the `required` prop is passed to the input as `required`', () => {
		const component = select({
			required: true,
		});
		const input = component.find('select');
		expect(input.prop('required')).toBe(true);
	});

	it('the `required` prop is passed to the input as `aria-required`', () => {
		const component = select({
			required: true,
		});
		const input = component.find('select');
		expect(input.prop('aria-required')).toBe(true);
	});

	it('`aria-describedby` is set on the input, based on the `name` prop', () => {
		const component = select({
			name: 'testName',
		});
		const input = component.find('select');
		expect(input.prop('aria-describedby')).toBe('testName-status-msg');
	});

	describe('when `options` are passed', () => {
		beforeEach(() => {
			baseProps.options = [
				{ label: 'opt1', value: 1, poster: 'extraProp1' },
				{ label: 'opt2', value: 2, poster: 'extraProp2' },
			];
		});

		it('an <option /> is rendered for each option', () => {
			expect(select().find('option').length).toEqual(2);
		});

		it('each option\'s label is passed as the <option />\'s children', () => {
			const options = select().find('option');
			expect(options.at(0).prop('children')).toEqual('opt1');
			expect(options.at(1).prop('children')).toEqual('opt2');
		});

		it('each option\'s value is passed to the <option />', () => {
			const options = select().find('option');
			expect(options.at(0).prop('value')).toEqual(1);
			expect(options.at(1).prop('value')).toEqual(2);
		});

		it('any extra props are passed through to the <option />', () => {
			const options = select({
				poster: 'testProp',
			}).find('option');
			expect(options.at(0).prop('poster')).toEqual('extraProp1');
			expect(options.at(1).prop('poster')).toEqual('extraProp2');
		});
	});

	describe('when `children` are passed', () => {
		beforeEach(() => {
			baseProps.children = <option value="1">Option 1</option>;
		});

		it('the children are rendered inside the select', () => {
			const component = select();
			const input = component.find('select').first();
			expect(input.prop('children')).toEqual(<option value="1">Option 1</option>);
		});
	});
});
