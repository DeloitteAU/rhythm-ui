import React from 'react';
import { shallow } from 'enzyme';
import Text from './Text';
import Control from '../../elements/Control';

describe('Text', () => {
	let baseProps;
	let shallowText;

	const text = props => {
		if (!shallowText) {
			shallowText = shallow(
				<Text {...baseProps} {...props} />,
			);
		}
		return shallowText;
	};

	beforeEach(() => {
		baseProps = {
			name: 'baseName',
		};
		shallowText = undefined;
	});

	it('always renders a Control', () => {
		expect(text().find(Control).length).toBe(1);
	});

	it('always renders a \'.text-input\' wrapper', () => {
		expect(text().find('.text-input').length).toBe(1);
	});

	it('always renders an input', () => {
		expect(text().find('input').length).toBe(1);
	});

	it('unused attributes are passed to the input', () => {
		const component = text({
			poster: 'testValue',
		});
		const outerElement = component.find('input');
		expect(outerElement.prop('poster')).toEqual('testValue');
	});

	it('passes the `className` prop to the Control', () => {
		const component = text({
			className: 'test-class',
		});
		const control = component.find(Control);
		expect(control.hasClass('test-class')).toBe(true);
	});

	it('the `name` prop is passed to the input as `name`', () => {
		const component = text({
			name: 'testName',
		});
		const control = component.find('input');
		expect(control.prop('name')).toBe('testName');
	});

	it('the `name` prop is passed to the input as `id`', () => {
		const component = text({
			name: 'testName',
		});
		const control = component.find('input');
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

		const component = text(props);
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

		it('a \'div.text-input__pre\' is rendered', () => {
			expect(text().find('.text-input__pre').length).toBe(1);
		});

		it('`preAddon` is rendered inside the div', () => {
			expect(text().find('.text-input__pre').first().prop('children')).toBe('test preaddon');
		});
	});

	describe('when `preAddon` is not set', () => {
		beforeEach(() => {
			baseProps.preAddon = null;
		});

		it('no \'div.text-input__pre\' is rendered', () => {
			expect(text().find('.text-input__pre').length).toBe(0);
		});
	});

	describe('when `postAddon` is set', () => {
		beforeEach(() => {
			baseProps.postAddon = 'test postaddon';
		});

		it('a \'div.text-input__post\' is rendered', () => {
			expect(text().find('.text-input__post').length).toBe(1);
		});

		it('`postAddon` is rendered inside the div', () => {
			expect(text().find('.text-input__post').first().prop('children')).toBe('test postaddon');
		});
	});

	describe('when `postAddon` is not set', () => {
		beforeEach(() => {
			baseProps.postAddon = null;
		});

		it('no \'div.text-input__post\' is rendered', () => {
			expect(text().find('.text-input__post').length).toBe(0);
		});
	});

	describe('when `status` is \'error\'', () => {
		beforeEach(() => {
			baseProps.status = 'error';
		});

		it('aria-invalid is set on the input', () => {
			expect(text().find('input').first().prop('aria-invalid')).toEqual(true);
		});
	});

	describe('when `status` is not \'error\'', () => {
		beforeEach(() => {
			baseProps.status = 'info';
		});

		it('aria-invalid is not set on the input', () => {
			expect(text().find('input').first().prop('aria-invalid')).toEqual(false);
		});
	});

	describe('when `status` is set', () => {
		beforeEach(() => {
			baseProps.status = 'info';
		});

		it('a \'text-input--{{status}}\' class is added to the input wrapper', () => {
			const component = text();
			const inputWrapper = component.find('.text-input').first();

			expect(inputWrapper.hasClass('text-input--info')).toEqual(true);
		});
	});

	describe('when `status` is not set', () => {
		beforeEach(() => {
			baseProps.status = null;
		});

		it('a \'text-input--{{status}}\' class is not added to the input wrapper', () => {
			const component = text();
			const inputWrapper = component.find('.text-input').first();

			expect(inputWrapper.prop('className').trim()).toEqual('text-input');
		});
	});

	describe('when the `error` prop is set', () => {
		beforeEach(() => {
			baseProps.error = 'This is the error';
		});

		it('the string \'error\' is passed to the Control as `status`', () => {
			const component = text();
			const control = component.find(Control).first();

			expect(control.prop('status')).toEqual('error');
		});

		it('the prop/value of `error` is passed to the Control as `statusMessage`', () => {
			const component = text();
			const control = component.find(Control).first();

			expect(control.prop('statusMessage')).toEqual('This is the error');
		});
	});

	it('the `required` prop is passed to the input as `required`', () => {
		const component = text({
			required: true,
		});
		const input = component.find('input');
		expect(input.prop('required')).toBe(true);
	});

	it('the `required` prop is passed to the input as `aria-required`', () => {
		const component = text({
			required: true,
		});
		const input = component.find('input');
		expect(input.prop('aria-required')).toBe(true);
	});

	it('`aria-describedby` is set on the input, based on the `name` prop', () => {
		const component = text({
			name: 'testName',
		});
		const input = component.find('input');
		expect(input.prop('aria-describedby')).toBe('testName-status-msg');
	});
});
