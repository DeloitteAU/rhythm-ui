import React from 'react';
import { shallow } from 'enzyme';
import OptionGroup from './OptionGroup';
import Option from '../Option';
import Control from '../../elements/Control';

describe('OptionGroup', () => {
	let baseProps;
	let shallowOptionGroup;

	const optionGroup = props => {
		if (!shallowOptionGroup) {
			shallowOptionGroup = shallow(
				<OptionGroup {...baseProps} {...props} />,
			);
		}
		return shallowOptionGroup;
	};

	beforeEach(() => {
		baseProps = {
			// reset your props here
			name: 'baseName',
		};
		shallowOptionGroup = undefined;
	});

	it('always renders a Control', () => {
		expect(optionGroup().find(Control).length).toBe(1);
	});

	it('always renders a \'.options\' list', () => {
		expect(optionGroup().find('.options').length).toBe(1);
	});

	it('the \'options\' list has a role of \'radiogroup\'', () => {
		expect(optionGroup().find('.options').prop('role')).toEqual('radiogroup');
	});

	it('unused attributes are passed to the \'.options\' list', () => {
		const component = optionGroup({
			poster: 'testValue',
		});
		const list = component.find('.options');
		expect(list.prop('poster')).toEqual('testValue');
	});

	it('passes the `className` prop to the Control', () => {
		const component = optionGroup({
			className: 'test-class',
		});
		const control = component.find(Control);
		expect(control.hasClass('test-class')).toBe(true);
	});

	it('the correct props are passed through to the Control', () => {
		const props = {
			name: 'testName',
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
			status: 'info',
			statusMessage: 'test status',
		};

		const component = optionGroup(props);
		const control = component.find(Control);

		expect(control.prop('name')).toEqual(props.name);
		expect(control.prop('isInline')).toEqual(props.isInline);
		expect(control.prop('label')).toEqual(props.label);
		expect(control.prop('labelProps')).toEqual(props.labelProps);
		expect(control.prop('tooltip')).toEqual(props.tooltip);
		expect(control.prop('tooltipProps')).toEqual(props.tooltipProps);
		expect(control.prop('helpText')).toEqual(props.helpText);
		expect(control.prop('required')).toEqual(props.required);
		expect(control.prop('status')).toEqual(props.status);
		expect(control.prop('statusMessage')).toEqual(props.statusMessage);
	});

	describe('when the `error` prop is set', () => {
		beforeEach(() => {
			baseProps.error = 'This is the error';
		});

		it('the string \'error\' is passed to the Control as `status`', () => {
			const component = optionGroup();
			const control = component.find(Control).first();

			expect(control.prop('status')).toEqual('error');
		});

		it('the prop/value of `error` is passed to the Control as `statusMessage`', () => {
			const component = optionGroup();
			const control = component.find(Control).first();

			expect(control.prop('statusMessage')).toEqual('This is the error');
		});
	});

	describe('when `options` are passed in', () => {
		beforeEach(() => {
			baseProps.options = [
				{ id: 'o1', label: 'option 1', value: 'opt1', poster: 'extraProp1' },
				{ id: 'o2', label: 'option 2', value: 'opt2', poster: 'extraProp2' },
				{ id: 'o3', label: 'option 3', value: 'opt3', poster: 'extraProp3' },
			];
		});

		it('an <Option /> is rendered for each item in the array', () => {
			const options = optionGroup().find(Option);
			expect(options.length).toEqual(3);
		});

		it('each option uses \'li\' as it\'s tag', () => {
			const options = optionGroup().find(Option);
			options.forEach(opt => {
				expect(opt.prop('tag')).toEqual('li');
			});
		});

		it('the `type` prop is passed to each Option as `type`', () => {
			const options = optionGroup({
				type: 'radio',
			}).find(Option);

			options.forEach(opt => {
				expect(opt.prop('type')).toEqual('radio');
			});
		});

		it('the `name` prop is passed to each Option as `name`', () => {
			const options = optionGroup({
				name: 'testName',
			}).find(Option);

			options.forEach(opt => {
				expect(opt.prop('name')).toEqual('testName');
			});
		});

		it('an id is added to each Option (`{groupName}__{optionId}`', () => {
			const options = optionGroup({
				name: 'testName',
			}).find(Option);

			expect(options.at(0).prop('id')).toEqual('testName__o1');
			expect(options.at(1).prop('id')).toEqual('testName__o2');
			expect(options.at(2).prop('id')).toEqual('testName__o3');
		});

		it('extra attributes for each option are passed to the Option as props`', () => {
			const options = optionGroup({
				name: 'testName',
			}).find(Option);

			expect(options.at(0).prop('poster')).toEqual('extraProp1');
			expect(options.at(1).prop('poster')).toEqual('extraProp2');
			expect(options.at(2).prop('poster')).toEqual('extraProp3');
		});
	});

	describe('when `options` are not passed in', () => {
		beforeEach(() => {
			baseProps.options = null;
		});

		it('no <Option />s are rendered', () => {
			const options = optionGroup().find(Option);
			expect(options.length).toEqual(0);
		});
	});

	describe('when `isHorizontal` is true', () => {
		beforeEach(() => {
			baseProps.isHorizontal = true;
		});

		it('\'.is-horizontal\' is added to the .options list', () => {
			const component = optionGroup();
			const list = component.find('.options').first();

			expect(list.hasClass('is-horizontal')).toEqual(true);
		});
	});

	describe('when `isHorizontal` is false', () => {
		beforeEach(() => {
			baseProps.isHorizontal = false;
		});

		it('\'.is-horizontal\' is not added to the .options list', () => {
			const component = optionGroup();
			const list = component.find('.options').first();

			expect(list.hasClass('is-horizontal')).toEqual(false);
		});
	});

	it('`optionsClassName` is added to the .options list', () => {
		const component = optionGroup({
			optionsClassName: 'test-options-class',
		});
		const list = component.find('.options').first();
		expect(list.hasClass('test-options-class')).toEqual(true);
	});

	describe('when type is checkbox', () => {
		beforeEach(() => {
			baseProps.type = 'checkbox';
			baseProps.options = [
				{ id: 'o1', label: 'option 1', value: 'opt1' },
				{ id: 'o2', label: 'option 2', value: 'opt2' },
				{ id: 'o3', label: 'option 3', value: 'opt3' },
			];
		});

		describe('and an array of values is passed in', () => {
			beforeEach(() => {
				baseProps.value = ['opt2', 'opt3'];
			});

			it('the correct options should be checked', () => {
				const options = optionGroup().find(Option);

				expect(options.at(0).prop('checked')).toEqual(false);
				expect(options.at(1).prop('checked')).toEqual(true);
				expect(options.at(2).prop('checked')).toEqual(true);
			});
		});

		describe('and null is passed in', () => {
			beforeEach(() => {
				baseProps.value = null;
			});

			it('no options should be checked', () => {
				const options = optionGroup().find(Option);

				expect(options.at(0).prop('checked')).toEqual(false);
				expect(options.at(1).prop('checked')).toEqual(false);
				expect(options.at(2).prop('checked')).toEqual(false);
			});
		});

		describe('and undefined is passed in', () => {
			beforeEach(() => {
				baseProps.value = undefined;
			});

			it('no options should be checked', () => {
				const options = optionGroup().find(Option);

				expect(options.at(0).prop('checked')).toEqual(false);
				expect(options.at(1).prop('checked')).toEqual(false);
				expect(options.at(2).prop('checked')).toEqual(false);
			});
		});

		describe('and an empty array is passed in', () => {
			beforeEach(() => {
				baseProps.value = [];
			});

			it('no options should be checked', () => {
				const options = optionGroup().find(Option);

				expect(options.at(0).prop('checked')).toEqual(false);
				expect(options.at(1).prop('checked')).toEqual(false);
				expect(options.at(2).prop('checked')).toEqual(false);
			});
		});

		describe('and a string is passed in', () => {
			beforeEach(() => {
				baseProps.value = 'opt2';
			});

			it('no options should be checked', () => {
				const options = optionGroup().find(Option);

				expect(options.at(0).prop('checked')).toEqual(false);
				expect(options.at(1).prop('checked')).toEqual(false);
				expect(options.at(2).prop('checked')).toEqual(false);
			});
		});

		it('and an unchecked option is checked, that option should be added to the value array', done => {
			const options = optionGroup({
				value: ['opt1'],
				onChange: value => {
					expect(value.length).toEqual(2);
					expect(value.indexOf('opt1') >= 0).toBe(true);
					expect(value.indexOf('opt3') >= 0).toBe(true);
					done();
				},
			}).find(Option);

			// check opt3
			options.at(2).simulate('change');
		});

		it('and an checked option is unchecked, that option should be removed from the value array', done => {
			const options = optionGroup({
				value: ['opt1', 'opt3'],
				onChange: value => {
					expect(value.length).toEqual(1);
					expect(value.indexOf('opt3') >= 0).toBe(true);
					done();
				},
			}).find(Option);

			// uncheck opt1
			options.at(0).simulate('change');
		});
	});

	describe('when type is radio', () => {
		beforeEach(() => {
			baseProps.type = 'radio';
			baseProps.options = [
				{ id: 'o1', label: 'option 1', value: 'opt1' },
				{ id: 'o2', label: 'option 2', value: 'opt2' },
				{ id: 'o3', label: 'option 3', value: 'opt3' },
			];
		});

		describe('and an array of values is passed in', () => {
			beforeEach(() => {
				baseProps.value = ['opt2', 'opt3'];
			});

			it('no options should be checked', () => {
				const options = optionGroup().find(Option);

				expect(options.at(0).prop('checked')).toEqual(false);
				expect(options.at(1).prop('checked')).toEqual(false);
				expect(options.at(2).prop('checked')).toEqual(false);
			});
		});

		describe('and null is passed in', () => {
			beforeEach(() => {
				baseProps.value = null;
			});

			it('no options should be checked', () => {
				const options = optionGroup().find(Option);

				expect(options.at(0).prop('checked')).toEqual(false);
				expect(options.at(1).prop('checked')).toEqual(false);
				expect(options.at(2).prop('checked')).toEqual(false);
			});
		});

		describe('and undefined is passed in', () => {
			beforeEach(() => {
				baseProps.value = undefined;
			});

			it('no options should be checked', () => {
				const options = optionGroup().find(Option);

				expect(options.at(0).prop('checked')).toEqual(false);
				expect(options.at(1).prop('checked')).toEqual(false);
				expect(options.at(2).prop('checked')).toEqual(false);
			});
		});

		describe('and an empty array is passed in', () => {
			beforeEach(() => {
				baseProps.value = [];
			});

			it('no options should be checked', () => {
				const options = optionGroup().find(Option);

				expect(options.at(0).prop('checked')).toEqual(false);
				expect(options.at(1).prop('checked')).toEqual(false);
				expect(options.at(2).prop('checked')).toEqual(false);
			});
		});

		describe('and a string is passed in', () => {
			beforeEach(() => {
				baseProps.value = 'opt2';
			});

			it('no options should be checked', () => {
				const options = optionGroup().find(Option);

				expect(options.at(0).prop('checked')).toEqual(false);
				expect(options.at(1).prop('checked')).toEqual(true);
				expect(options.at(2).prop('checked')).toEqual(false);
			});
		});

		it('and an unchecked option is checked, that option should become the new value', done => {
			const options = optionGroup({
				value: ['opt1'],
				onChange: value => {
					expect(value).toEqual('opt3');
					done();
				},
			}).find(Option);

			// check opt3
			options.at(2).simulate('change');
		});
	});
});
