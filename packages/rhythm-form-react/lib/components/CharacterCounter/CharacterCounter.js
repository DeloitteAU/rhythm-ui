'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CharacterCounter = function CharacterCounter(props) {
	var charCounterClasses = (0, _classnames2.default)('character-counter', {
		'is-error': props.value < 0
	});

	return _react2.default.createElement(
		'div',
		{
			className: charCounterClasses,
			role: 'status',
			'aria-live': 'polite',
			'aria-atomic': 'true',
			'aria-relevant': 'all'
		},
		_react2.default.createElement(
			'span',
			{ className: 'vh' },
			props.a11yPrefix
		),
		props.prefix,
		props.value,
		props.suffix,
		' ',
		_react2.default.createElement(
			'span',
			{ className: 'vh' },
			props.a11ySuffix
		)
	);
};

CharacterCounter.defaultProps = {
	value: null,
	prefix: null,
	a11yPrefix: null,
	suffix: null,
	a11ySuffix: 'characters remaining'
};

CharacterCounter.propTypes = {
	value: _propTypes2.default.number,
	prefix: _propTypes2.default.string,
	a11yPrefix: _propTypes2.default.string,
	suffix: _propTypes2.default.string,
	a11ySuffix: _propTypes2.default.string
};

exports.default = CharacterCounter;