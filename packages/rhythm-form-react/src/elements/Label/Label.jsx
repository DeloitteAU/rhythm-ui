import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import mapToCssModules from '../../utils/mapToCssModules';

/**
 * A simple form label component
 */
const Label = ({
	className,
	tag,
	hide,
	text,
	helpText,
	children,
	cssModule,
	...attrs
}) => {
	const Tag = tag;

	const classes = mapToCssModules(classNames(className, {
		'ctrl-label': true,
		'vh': hide,
	}), cssModule);

	return (
		<Tag
			{...attrs}
			className={classes}
		>
			{text || children}

			{helpText &&
				<div className={mapToCssModules('ctrl-label__help', cssModule)}>{helpText}</div>
			}
		</Tag>
	);
};

Label.defaultProps = {
	className: null,
	tag: 'label',
	hide: false,
	text: null,
	children: null,
	helpText: null,
	cssModule: null,
};

Label.propTypes = {
	/**
	 * Any classes here will be added to the outer tag of the label
	 */
	className: PropTypes.string,
	/**
	 * The html tag to use, e.g. 'label' or 'span'. It's recommended you keep it as a label in most cases for accessibility.
	 */
	tag: PropTypes.string,
	/**
	 * Visually hide the label, but still allow it to be read by assistive tech. (uses .vh class)
	 */
	hide: PropTypes.bool,
	/**
	 * The text of the label, `children` will be ignored if this is set.
	 */
	text: PropTypes.string,
	/**
	 * You can either pass in simple text or whatever children you like if you want to get creative.
	 *
	 * This will be ignored if anything is passed to the `text` prop.
	 */
	children: PropTypes.node,
	/**
	 * Extra text that will be displayed beneath the label text
	 */
	helpText: PropTypes.string,
	cssModule: PropTypes.object,
};

export default Label;
