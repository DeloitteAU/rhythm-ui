import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const CharacterCounter = props => {
	const charCounterClasses = classNames(
		'character-counter', {
			'is-error': props.value < 0,
		},
	);

	return (
		<div
			className={charCounterClasses}
			role="status"
			aria-live="polite"
			aria-atomic="true"
			aria-relevant="all"
		>
			<span className="vh">{props.a11yPrefix}</span>{props.prefix}{props.value}{props.suffix} <span className="vh">{props.a11ySuffix}</span>
		</div>
	);
};

CharacterCounter.defaultProps = {
	value: null,
	prefix: null,
	a11yPrefix: null,
	suffix: null,
	a11ySuffix: 'characters remaining',
};

CharacterCounter.propTypes = {
	value: PropTypes.number,
	prefix: PropTypes.string,
	a11yPrefix: PropTypes.string,
	suffix: PropTypes.string,
	a11ySuffix: PropTypes.string,
};

export default CharacterCounter;
