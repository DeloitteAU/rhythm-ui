import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Control from '../../elements/Control';
import Option from '../../controls/Option';
import mapToCssModules from '../../utils/mapToCssModules';

/**
 * Description of the OptionGroup component
 */
class OptionGroup extends React.Component {
	constructor(props) {
		super(props);
		this.handleOptionChange = this.handleOptionChange.bind(this);
	}

	handleOptionChange(optValue) {
		const {
			onChange,
			value,
			type,
		} = this.props;

		if (type === 'radio') {
			onChange(optValue);
		} else if (type === 'checkbox') {
			// Clone the array, we're going to mutate it.
			const valueClone = (value || []).slice();

			const optIndex = valueClone.indexOf(optValue);

			if (valueClone.indexOf(optValue) >= 0) {
				valueClone.splice(optIndex, 1);
			} else {
				valueClone.push(optValue);
			}

			onChange(valueClone);
		}
	}

	render() {
		const {
			className,
			id,
			name,
			isInline,
			disabled,

			cssModule,

			isHorizontal,
			type,
			options,

			optionsClassName,

			required,
			requiredText,

			label,
			labelProps,

			tooltip,
			tooltipProps,

			value,
			onChange, // Don't pass through

			helpText,

			error,
			status,
			statusMessage,

			...attrs
		} = this.props;

		let _status = status;
		let _statusMessage = statusMessage;

		if (error) {
			_status = 'error';
			_statusMessage = error;
		}

		const inputClasses = mapToCssModules(classNames(
			optionsClassName,
			'options',
			{
				'is-horizontal': isHorizontal,
			},
		), cssModule);

		const inputId = id || name;

		return (
			<Control
				className={className}
				name={inputId}
				isInline={isInline}
				label={label}
				labelProps={labelProps}
				tooltip={tooltip}
				tooltipProps={tooltipProps}
				helpText={helpText}
				required={required}
				requiredText={requiredText}
				status={_status}
				statusMessage={_statusMessage}
				role="group"
				aria-labelledby={labelProps && labelProps.id}
			>
				<ul
					className={inputClasses}
					{...attrs}
				>
					{(options || []).map(({id: optionId, value: optValue, ...opt}) => {

						let checked = false;

						if (type === 'radio') {
							checked = value === optValue;
						} if (type === 'checkbox' && Array.isArray(value)) {
							checked = value.indexOf(optValue) >= 0;
						}

						return (
							<Option
								key={optionId}
								tag="li"
								type={type}
								id={`${inputId}__${optionId}`}
								name={name}
								checked={checked}
								disabled={disabled}
								onChange={e => {
									this.handleOptionChange(optValue);
								}}
								{...opt}
							/>
						);
					})}
				</ul>
			</Control>
		);
	}

};

OptionGroup.defaultProps = {
	className: null,
	isInline: false,

	id: undefined,

	cssModule: null,

	type: 'checkbox',
	isHorizontal: false,
	disabled: false,

	options: [],
	optionsClassName: null,

	required: false,

	label: null,
	labelProps: {},

	tooltip: null,
	tooltipProps: {},

	helpText: null,

	value: undefined,
	onChange: () => {},

	error: null,
	status: null,
	statusMessage: null,
};

OptionGroup.propTypes = {
	/**
	 * A description of the prop, it will automatically appear in the docs
	 */
	type: PropTypes.oneOf([
		'radio',
		'checkbox',
	]),
	className: PropTypes.string,
	/**
	 * name will be used as the input's id if it's not provided.
	 */
	id: PropTypes.string,
	/**
	 * The name of the input, will also be used as the id.
	 */
	name: PropTypes.string.isRequired,
	/**
	 * Takes options options of the form: { label: <string>, value: <any, ...extraProps }. Ignored if `children` are passed in.
	 */
	options: PropTypes.array,
	/**
	 * Any class(es) you want added the <ul> that wraps the options. For example, you could use this to add a '.fancy' class for styling.
	 */
	optionsClassName: PropTypes.string,
	/**
	 * The label of the control.
	 */
	label: PropTypes.node,
	/**
	 * Props to be passed to the label
	 */
	labelProps: PropTypes.object,
	/**
	 * The content of the controls tooltip.
	 */
	tooltip: PropTypes.node,
	/**
	 * Props to be passed to the tooltip
	 */
	tooltipProps: PropTypes.object,
	/**
	 * Help text to display below the field.
	 */
	helpText: PropTypes.node,
	/**
	 * If true, the control will use an inline layout. See `isHorizontal` to adjust the layout of the actual options.
	 */
	isInline: PropTypes.bool,
	/**
	 * If true, the options will be layed out horizontally. See `isInline` to adjust the layout of the controls label.
	 */
	isHorizontal: PropTypes.bool,
	error: PropTypes.node,
	status: PropTypes.oneOf([
		'error',
		'warning',
		'info',
		'success',
	]),
	statusMessage: PropTypes.node,
	required: PropTypes.bool,
	cssModule: PropTypes.object,
	onChange: PropTypes.func,
	/**
	 * Expects a string for radio buttons and an array of values for checkboxes
	 */
	value: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.array,
	]),
	disabled: PropTypes.bool,
};

export default OptionGroup;
