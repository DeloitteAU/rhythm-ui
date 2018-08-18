import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import mapToCssModules from '../../utils/mapToCssModules';

/**
 * A simple component to render field level help text.
 */
const HelpText = ({
	className,
	children,
	tag: Tag,
	cssModule,
	...attrs
}) => {
	const classes = mapToCssModules(classNames(
		className,
		{
			'ctrl-help': true,
		},
	), cssModule);

	return (
		<Tag {...attrs} className={classes}>{children}</Tag>
	);
};

HelpText.defaultProps = {
	className: null,
	children: null,
	tag: 'div',
	cssModule: null,
};

HelpText.propTypes = {
	className: PropTypes.string,
	/**
	 * HTML tag to use for outer wrapper
	 */
	tag: PropTypes.string,
	children: PropTypes.node,
	cssModule: PropTypes.string,
};

export default HelpText;
