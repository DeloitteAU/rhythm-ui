import React from 'react';
import { shallow } from 'enzyme';
import TextArea from './TextArea';
import Control from '../../elements/Control';

describe('TextArea', () => {
	let baseProps;
	let shallowTextArea;

	const textArea = props => {
		if (!shallowTextArea) {
			shallowTextArea = shallow(
				<TextArea {...baseProps} {...props} />,
			);
		}
		return shallowTextArea;
	};

	beforeEach(() => {
		baseProps = {
			name: 'baseName',
		};
		shallowTextArea = undefined;
	});

	it('always renders a Control', () => {
		expect(textArea().find(Control).length).toBe(1);
	});

	it('always renders a \'.textarea-input\' wrapper', () => {
		expect(textArea().find('.textarea-input').length).toBe(1);
	});

	it('always renders a textarea', () => {
		expect(textArea().find('textarea').length).toBe(1);
	});

	it('unused attributes are passed to the input', () => {
		const component = textArea({
			poster: 'testValue',
		});
		const outerElement = component.find('textarea');
		expect(outerElement.prop('poster')).toEqual('testValue');
	});

	it('passes the `className` prop to the Control', () => {
		const component = textArea({
			className: 'test-class',
		});
		const control = component.find(Control);
		expect(control.hasClass('test-class')).toBe(true);
	});

	it('the `name` prop is passed to the input as `name`', () => {
		const component = textArea({
			name: 'testName',
		});
		const control = component.find('textarea');
		expect(control.prop('name')).toBe('testName');
	});

	it('the `name` prop is passed to the input as `id`', () => {
		const component = textArea({
			name: 'testName',
		});
		const control = component.find('textarea');
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

		const component = textArea(props);
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

	describe('when `status` is \'error\'', () => {
		beforeEach(() => {
			baseProps.status = 'error';
		});

		it('aria-invalid is set on the input', () => {
			expect(textArea().find('textarea').first().prop('aria-invalid')).toEqual(true);
		});
	});

	describe('when `status` is not \'error\'', () => {
		beforeEach(() => {
			baseProps.status = 'info';
		});

		it('aria-invalid is not set on the input', () => {
			expect(textArea().find('textarea').first().prop('aria-invalid')).toEqual(false);
		});
	});

	describe('when `status` is set', () => {
		beforeEach(() => {
			baseProps.status = 'info';
		});

		it('a \'textarea-input--{{status}}\' class is added to the input wrapper', () => {
			const component = textArea();
			const inputWrapper = component.find('.textarea-input').first();

			expect(inputWrapper.hasClass('textarea-input--info')).toEqual(true);
		});
	});

	describe('when `status` is not set', () => {
		beforeEach(() => {
			baseProps.status = null;
		});

		it('a \'textarea-input--{{status}}\' class is not added to the input wrapper', () => {
			const component = textArea();
			const inputWrapper = component.find('.textarea-input').first();

			expect(inputWrapper.prop('className').trim()).toEqual('textarea-input');
		});
	});

	describe('when the `error` prop is set', () => {
		beforeEach(() => {
			baseProps.error = 'This is the error';
		});

		it('the string \'error\' is passed to the Control as `status`', () => {
			const component = textArea();
			const control = component.find(Control).first();

			expect(control.prop('status')).toEqual('error');
		});

		it('the prop/value of `error` is passed to the Control as `statusMessage`', () => {
			const component = textArea();
			const control = component.find(Control).first();

			expect(control.prop('statusMessage')).toEqual('This is the error');
		});
	});

	it('the `required` prop is passed to the input as `required`', () => {
		const component = textArea({
			required: true,
		});
		const input = component.find('textarea');
		expect(input.prop('required')).toBe(true);
	});

	it('the `required` prop is passed to the input as `aria-required`', () => {
		const component = textArea({
			required: true,
		});
		const input = component.find('textarea');
		expect(input.prop('aria-required')).toBe(true);
	});

	it('`aria-describedby` is set on the input, based on the `name` prop', () => {
		const component = textArea({
			name: 'testName',
		});
		const input = component.find('textarea');
		expect(input.prop('aria-describedby')).toBe('testName-status-msg');
	});
});
