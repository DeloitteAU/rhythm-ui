import React from 'react';
import { shallow } from 'enzyme';
import Control from './Control';
import Label from '../Label';
import InlineStatus from '../InlineStatus';
import HelpText from '../HelpText';
import Tooltip from '../Tooltip';

describe('Control', () => {
	let baseProps;
	let shallowControl;
	const control = props => {
		if (!shallowControl) {
			shallowControl = shallow(
				<Control {...baseProps} {...props} />,
			);
		}
		return shallowControl;
	};

	beforeEach(() => {
		baseProps = {
			name: 'baseName',
		};
		shallowControl = undefined;
	});

	it('unused attributes are passed to the outer element', () => {
		const component = control({
			poster: 'testValue',
		});
		const outerElement = component.find('.ctrl-holder');
		expect(outerElement.prop('poster')).toEqual('testValue');
	});

	it('adds the classes from the className prop to the outer element\'s classes', () => {
		const component = control({
			className: 'test-class',
		});
		const outerElement = component.find('.ctrl-holder');
		expect(outerElement.hasClass('test-class')).toBe(true);
	});

	describe('when children are passed in', () => {
		beforeEach(() => {
			baseProps.children = <div><p>test children</p></div>;
		});

		it('the children are rendered', () => {
			const component = control();
			const outerElement = component.find('.ctrl-holder').first();
			expect(outerElement.children()).toEqual(control().children());
		});
	});

	describe('when `isInline` is true', () => {
		beforeEach(() => {
			baseProps.isInline = true;
		});

		it('the \'is-inline\' class is set', () => {
			const component = control();
			expect(component.hasClass('is-inline')).toEqual(true);
		});
	});

	describe('when `isInline` is false', () => {
		beforeEach(() => {
			baseProps.isInline = false;
		});

		it('the `is-inline` class is not set', () => {
			const component = control();
			expect(component.hasClass('is-inline')).toEqual(false);
		});
	});

	describe('when `status` is set', () => {
		beforeEach(() => {
			baseProps.status = 'info';
		});

		it('an \'is-{{status}}\' class is set', () => {
			const component = control();
			expect(component.hasClass('is-info')).toEqual(true);
		});
	});

	describe('when `status` is not set', () => {
		beforeEach(() => {
			baseProps.status = null;
		});

		it('an \'is-{{status}}\' class is not set', () => {
			const component = control();
			expect(component.prop('className').trim()).toEqual('ctrl-holder');
		});
	});

	describe('when `label` is passed in', () => {
		beforeEach(() => {
			baseProps.name = 'testName',
			baseProps.label = <p>Test label content</p>;
		});

		it('a <Label /> is rendered', () => {
			const component = control();
			const labels = component.find(Label);
			expect(labels.length).toBe(1);
		});

		it('the `label` prop is passed as the <Label />\'s children', () => {
			const component = control();
			const label = component.find(Label).first();
			// The label's children is array because of the tooltip, the first entry is what we want
			expect(label.prop('children')[0]).toEqual(<p>Test label content</p>);
		});

		it('the `name` prop is passed as `htmlFor` to the <Label />', () => {
			const component = control();
			const label = component.find(Label).first();
			// The label's children is array because of the tooltip, the first entry is what we want
			expect(label.prop('htmlFor')).toEqual('testName');
		});

		it('`labelProps` is passed to the <Label />', () => {
			const labelProps = {
				hide: true,
				testProp: 'testVal',
			};

			const component = control({
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
			const component = control();
			const labels = component.find(Label);
			expect(labels.length).toBe(0);
		});
	});

	describe('when `statusMessage` is passed in', () => {
		beforeEach(() => {
			baseProps.name = 'testName';
			baseProps.statusMessage = 'test message';
		});

		it('an <InlineStatus /> is rendered', () => {
			const component = control();
			const statuses = component.find(InlineStatus);
			expect(statuses.length).toBe(1);
		});

		it('`statusMessage` is passed as the <InlineStatus />\'s children', () => {
			const component = control();
			const status = component.find(InlineStatus).first();
			expect(status.prop('children')).toEqual('test message');
		});

		it('the `status` prop is passed to the <InlineStatus />', () => {
			const component = control({
				status: 'info',
			});
			const status = component.find(InlineStatus).first();
			expect(status.prop('status')).toEqual('info');
		});

		it('the `name` prop is used to add an id to <InlineStatus />', () => {
			const component = control();
			const status = component.find(InlineStatus).first();
			expect(status.prop('id')).toEqual('testName-status-msg');
		});
	});

	describe('when `statusMessage` is not passed in', () => {
		beforeEach(() => {
			baseProps.statusMessage = null;
		});

		it('no <InlineStatus /> is rendered', () => {
			const component = control();
			const statuses = component.find(InlineStatus);
			expect(statuses.length).toBe(0);
		});
	});

	describe('when `helpText` is passed in', () => {
		beforeEach(() => {
			baseProps.helpText = 'test help text';
		});

		it('a <HelpText /> is rendered', () => {
			const component = control();
			const helps = component.find(HelpText);
			expect(helps.length).toBe(1);
		});

		it('`helpText` is passed as the <HelpText />\'s children', () => {
			const component = control();
			const help = component.find(HelpText).first();
			expect(help.prop('children')).toEqual('test help text');
		});
	});

	describe('when `helpText` is not passed in', () => {
		beforeEach(() => {
			baseProps.statusMessage = null;
		});

		it('no <HelpText /> is rendered', () => {
			const component = control();
			const helps = component.find(HelpText);
			expect(helps.length).toBe(0);
		});
	});

	describe('when `tooltip` is passed in', () => {
		beforeEach(() => {
			baseProps.name = 'testName';
			baseProps.tooltip = 'test tooltip';
		});

		it('a <Tooltip /> is rendered', () => {
			const component = control();
			const tooltips = component.find(Tooltip);
			expect(tooltips.length).toBe(1);
		});

		it('the `name` prop is used as part of the id for the tooltip <Label />', () => {
			const component = control();
			const label = component.find(Tooltip).first();
			// The label's children is array because of the tooltip, the first entry is what we want
			expect(label.prop('id')).toEqual('testName__tooltip');
		});

		it('`tooltip` is passed as the <Tooltip />\'s children', () => {
			const component = control();
			const tooltip = component.find(Tooltip).first();
			expect(tooltip.prop('children')).toEqual('test tooltip');
		});
	});

	describe('when `tooltip` is not passed in', () => {
		beforeEach(() => {
			baseProps.tooltip = null;
		});

		it('no <Tooltip /> is rendered', () => {
			const component = control();
			const tooltips = component.find(Tooltip);
			expect(tooltips.length).toBe(0);
		});
	});

	describe('when the `width` prop is set', () => {
		beforeEach(() => {
			baseProps.width = 'xl';
		});

		it('the width class is set on the `.ctrl-holder`', () => {
			expect(control().hasClass('width-xl')).toEqual(true);
		});
	});

	describe('when the `width` prop is set', () => {
		beforeEach(() => {
			baseProps.width = null;
		});

		it('the width class is not set on the `.ctrl-holder`', () => {
			expect(control().prop('className')).toEqual('ctrl-holder');
		});
	});
});
