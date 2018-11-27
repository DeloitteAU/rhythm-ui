import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Label from '../../elements/Label';
import Tooltip from '../../elements/Tooltip';

import mapToCssModules from '../../utils/mapToCssModules';

/**
 * Description of the Option component
 */
const Option = ({
	className,
	id,
	name,
	tag: Tag,
	label,
	labelProps,
	tooltip,
	tooltipProps,
	type,
	cssModule,
	helpText, // Don't accidentally pass down to child attribute
	...attrs
}) => {
	const classes = mapToCssModules(classNames(
		className,
		'option',
	), cssModule);

	return (
		<Tag className={classes}>
			<input
				id={id}
				name={name}
				type={type}
				{...attrs}
			/>
			{(label || tooltip) &&
				<Label
					htmlFor={id}
					{...labelProps}
				>
					{label}
					{tooltip &&
						<Tooltip id={`${id}__tooltip`} {...tooltipProps}>
							{tooltip}
						</Tooltip>
					}
				</Label>
			}
		</Tag>
	);
};

Option.defaultProps = {
	className: null,
	type: 'checkbox',
	tag: 'div',

	label: null,
	labelProps: {},

	tooltip: null,
	tooltipProps: {},

	cssModule: null,
	helpText: null,
};

Option.propTypes = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	/**
	 * A description of the prop, it will automatically appear in the docs
	 */
	className: PropTypes.string,
	type: PropTypes.oneOf([
		'radio',
		'checkbox',
	]),
	tag: PropTypes.string,
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
	cssModule: PropTypes.object,
	/**
	 * Help text to display below the field.
	 */
	helpText: PropTypes.node,
};

export default Option;
