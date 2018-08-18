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

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * A simple component to render field level help text.
 */
var HelpText = function HelpText(_ref) {
	var className = _ref.className,
	    children = _ref.children,
	    Tag = _ref.tag,
	    cssModule = _ref.cssModule,
	    attrs = _objectWithoutProperties(_ref, ['className', 'children', 'tag', 'cssModule']);

	var classes = (0, _mapToCssModules2.default)((0, _classnames2.default)(className, {
		'ctrl-help': true
	}), cssModule);

	return _react2.default.createElement(
		Tag,
		_extends({}, attrs, { className: classes }),
		children
	);
};

HelpText.defaultProps = {
	className: null,
	children: null,
	tag: 'div',
	cssModule: null
};

HelpText.propTypes = {
	className: _propTypes2.default.string,
	/**
  * HTML tag to use for outer wrapper
  */
	tag: _propTypes2.default.string,
	children: _propTypes2.default.node,
	cssModule: _propTypes2.default.string
};

exports.default = HelpText;