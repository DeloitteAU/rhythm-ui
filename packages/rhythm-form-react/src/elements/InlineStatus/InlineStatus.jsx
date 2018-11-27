import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import mapToCssModules from '../../utils/mapToCssModules';

/**
 * Displays a status message. Use this for things like inline validation errors or success messages.
 */
const InlineStatus = ({
	id,
	className,
	children,
	status,
	cssModule,
	...attrs
}) => {
	const classes = mapToCssModules(classNames(
		className,
		'status-msg',
		{
			[`status-msg--${status}`]: !!status,
		},
	), cssModule);

	return (
		<div {...attrs} className={classes} id={id}>
			<span className={mapToCssModules('status-msg__message', cssModule)}>{children}</span>
		</div>
	);
};

InlineStatus.defaultProps = {
	id: null,
	className: null,
	children: null,
	status: 'error',
	cssModule: null,
};

InlineStatus.propTypes = {
	/**
	 * Useful for associating
	 */
	id: PropTypes.string,
	className: PropTypes.string,
	children: PropTypes.node,
	/**
	 * A description of the prop, it will automatically appear in the docs
	 */
	status: PropTypes.oneOf([
		'error',
		'success',
		'warning',
		'info',
	]),
	cssModule: PropTypes.object,
};

export default InlineStatus;
