import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import mapToCssModules from '../../utils/mapToCssModules';

const renderItems = items => {
	if (!items) {
		return null;
	}
	if (!items.length) {
		return null;
	}

	const listItems = items.map((item, i) => {
		return (
			<li key={item.key || i}>
				<a href={item.path}>
					<strong>{item.label}:</strong> {item.text}
				</a>
			</li>
		);
	});

	return (
		<ul>
			{listItems}
		</ul>
	);
};

/**
 * Description of the FormSummary component
 */
const FormSummary = ({
	className,
	title,
	children,
	status,
	items,
	cssModule,
	...attrs
}) => {
	const classes = mapToCssModules(classNames(
		className,
		'form-summary',
		{
			[`is-${status}`]: !!status,
		},
	), cssModule);

	return (
		<div {...attrs} className={classes}>
			{title &&
				<div className={mapToCssModules('form-summary-title', cssModule)}>{title}</div>
			}
			{children}
			{renderItems(items)}
		</div>
	);
};

FormSummary.defaultProps = {
	className: null,
	title: null,
	children: null,
	status: null,
	items: [],
	cssModule: null,
};

FormSummary.propTypes = {
	className: PropTypes.string,
	title: PropTypes.node,
	children: PropTypes.node,
	status: PropTypes.oneOf([
		'error',
		'info',
		'warning',
		'success',
	]),
	items: PropTypes.arrayOf(PropTypes.shape({
		key: PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.number,
		]).isRequired,
		label: PropTypes.node,
		text: PropTypes.node,
		path: PropTypes.string,
	})),
	cssModule: PropTypes.object,
};

export default FormSummary;
