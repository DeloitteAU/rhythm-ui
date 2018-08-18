import React from 'react';
import { shallow } from 'enzyme';
import FormSummary from './FormSummary';

describe('FormSummary', () => {
	let baseProps;
	let shallowFormSummary;

	const formSummary = props => {
		if (!shallowFormSummary) {
			shallowFormSummary = shallow(
				<FormSummary {...baseProps} {...props} />,
			);
		}
		return shallowFormSummary;
	};

	beforeEach(() => {
		baseProps = {
			// reset your props here
		};
		shallowFormSummary = undefined;
	});

	it('unused attributes are passed to the outer element', () => {
		const component = formSummary({
			poster: 'testValue',
		});
		const outerElement = component.find('.form-summary');
		expect(outerElement.prop('poster')).toEqual('testValue');
	});

	it('adds the classes from the className prop to the outer element\'s classes', () => {
		const component = formSummary({
			className: 'test-class',
		});
		const outerElement = component.find('.form-summary');
		expect(outerElement.hasClass('test-class')).toBe(true);
	});

	describe('when `title` is set', () => {
		beforeEach(() => {
			baseProps.title = 'test title';
		});

		it('the title is rendered', () => {
			const component = formSummary();
			expect(component.find('.form-summary-title').length).toBe(1);
		});
	});

	describe('when `title` is not set', () => {
		beforeEach(() => {
			baseProps.title = null;
		});

		it('no title is rendered', () => {
			const component = formSummary();
			expect(component.find('.form-summary-title').length).toBe(0);
		});
	});

	describe('when `items` are passed in', () => {
		beforeEach(() => {
			baseProps.items = [
				{ key: 0, label: 'First name', text: 'First name cannot be Bob', path: '#first' },
				{ key: 1, label: 'Last name', text: 'Last name is required', path: '#last' },
			];
		});

		it('an <li /> is rendered for each item', () => {
			const component = formSummary();
			expect(component.find('li').length).toBe(2);
		});
	});

	describe('when `items` are not passed in', () => {
		beforeEach(() => {
			baseProps.items = null;
		});

		it('no <li />\'s are rendered', () => {
			const component = formSummary();
			expect(component.find('li').length).toBe(0);
		});
	});
});
