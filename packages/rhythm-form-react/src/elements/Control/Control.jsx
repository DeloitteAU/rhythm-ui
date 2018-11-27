import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Label from '../Label';
import HelpText from '../HelpText';
import Tooltip from '../Tooltip';
import InlineStatus from '../InlineStatus';
import mapToCssModules from '../../utils/mapToCssModules';

/**
 * A <Control /> holds all the rendering logic for form fields (labels, errors etc.)
 *
 * You can use the Control component to build your own custom controls.
 */
const Control = ({
	className,
	name,
	isInline,
	width,

	tag: Tag,

	cssModule,

	required,
	requiredText,

	label,
	labelProps,

	tooltip,
	tooltipProps,

	helpText,

	children,

	status,
	statusMessage,

	...attrs
}) => {
	const classes = mapToCssModules(classNames(
		className,
		{
			'ctrl-holder': true,
			'is-inline': isInline,
			[`width-${width}`]: !!width,
			[`is-${status}`]: !!status,
		},
	), cssModule);

	let _requiredText = required ? <em>*<span className="vh">Required field</span></em> : null;
	if (requiredText) {
		_requiredText = requiredText(required);
	}

	return (
		<Tag {...attrs} className={classes}>
			{(label || tooltip) &&
				<Label
					htmlFor={name}
					{...labelProps}
				>
					{label}
					{_requiredText}
					{tooltip &&
						<Tooltip id={`${name}__tooltip`} {...tooltipProps}>
							{tooltip}
						</Tooltip>
					}
				</Label>
			}

			<div className={mapToCssModules('ctrl', cssModule)}>
				{/*
					This extra wrapper exists so that `width` can be a property on all controls, without coupling it to other components
				*/}
				<div className={mapToCssModules('ctrl__width-wrap', cssModule)}>
					{children}
				</div>

				{/*
					`id` is added for accessibility, it should correspond to aria-describedby on the input
					 Please don't remove
			 		*/}
				{statusMessage &&
					<InlineStatus id={`${name}-status-msg`} status={status}>{statusMessage}</InlineStatus>
				}

				{helpText &&
					<HelpText>{helpText}</HelpText>
				}
			</div>
		</Tag>
	);
};

Control.defaultProps = {
	className: null,
	isInline: false,
	width: null,

	tag: 'div',

	required: false,
	requiredText: null,

	label: null,
	labelProps: {},

	tooltip: null,
	tooltipProps: {},

	helpText: null,

	children: null,

	status: null,
	statusMessage: null,

	cssModule: null,
};

Control.propTypes = {
	/**
	 * Any extra classes are added to the `.ctrl-holder`
	 */
	className: PropTypes.string,
	/**
	 * Used as both the name and id of the control
	 */
	name: PropTypes.string.isRequired,
	/**
	 * If true, the control will use an inline layout
	 */
	isInline: PropTypes.bool,
	required: PropTypes.bool,
	/**
	 * The markup to display next to a label to denote a required field.
	 *
	 * Can also take a render function that is passed a single parameter: isRequired
	 */
	requiredText: PropTypes.func,
	/**
	 * Defaults to full width if not specified which is useful for bootstrap style grids, but you can set the field width here too.
	 */
	width: PropTypes.oneOf([
		'xl',
		'l',
		'm',
		's',
		'xs',
		'xxs',
	]),
	/**
	 * The content of the label
	 */
	label: PropTypes.node,
	/**
	 * Any extra props to be passed to the <Label />. See the Label docs for a list of options
	 */
	labelProps: PropTypes.object,
	/**
	 * The content of the tooltip
	 */
	tooltip: PropTypes.node,
	/**
	 * Any extra props to be passed to the <Tooltip />. See the Tooltip docs for a list of options
	 */
	tooltipProps: PropTypes.object,
	/**
	 * The help text display below the field
	 */
	helpText: PropTypes.node,

	children: PropTypes.node,
	/**
	 * The status of the control, used for error states etc.
	 */
	status: PropTypes.oneOf([
		'error',
		'warning',
		'info',
		'success',
	]),
	/**
	 * The status message displayed below the field, used for error/validation messages etc.
	 */
	statusMessage: PropTypes.node,
	cssModule: PropTypes.object,
	tag: PropTypes.string,
};

export default Control;
