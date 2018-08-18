'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _mapToCssModules = require('../../utils/mapToCssModules');

var _mapToCssModules2 = _interopRequireDefault(_mapToCssModules);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * Displays a status message. Use this for things like inline validation errors or success messages.
 */
var InlineStatus = function InlineStatus(_ref) {
	var id = _ref.id,
	    className = _ref.className,
	    children = _ref.children,
	    status = _ref.status,
	    cssModule = _ref.cssModule,
	    attrs = _objectWithoutProperties(_ref, ['id', 'className', 'children', 'status', 'cssModule']);

	var classes = (0, _mapToCssModules2.default)((0, _classnames2.default)(className, 'status-msg', _defineProperty({}, 'status-msg--' + status, !!status)), cssModule);

	return _react2.default.createElement(
		'div',
		_extends({}, attrs, { className: classes, id: id }),
		_react2.default.createElement(
			'span',
			{ className: (0, _mapToCssModules2.default)('status-msg__message', cssModule) },
			children
		)
	);
};

InlineStatus.defaultProps = {
	id: null,
	className: null,
	children: null,
	status: 'error',
	cssModule: null
};

InlineStatus.propTypes = {
	/**
  * Useful for associating
  */
	id: _propTypes2.default.string,
	className: _propTypes2.default.string,
	children: _propTypes2.default.node,
	/**
  * A description of the prop, it will automatically appear in the docs
  */
	status: _propTypes2.default.oneOf(['error', 'success', 'warning', 'info']),
	cssModule: _propTypes2.default.object
};

exports.default = InlineStatus;