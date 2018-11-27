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
 * A simple form label component
 */
var Label = function Label(_ref) {
	var className = _ref.className,
	    tag = _ref.tag,
	    hide = _ref.hide,
	    text = _ref.text,
	    helpText = _ref.helpText,
	    children = _ref.children,
	    cssModule = _ref.cssModule,
	    attrs = _objectWithoutProperties(_ref, ['className', 'tag', 'hide', 'text', 'helpText', 'children', 'cssModule']);

	var Tag = tag;

	var classes = (0, _mapToCssModules2.default)((0, _classnames2.default)(className, {
		'ctrl-label': true,
		'vh': hide
	}), cssModule);

	return _react2.default.createElement(
		Tag,
		_extends({}, attrs, {
			className: classes
		}),
		text || children,
		helpText && _react2.default.createElement(
			'div',
			{ className: (0, _mapToCssModules2.default)('ctrl-label__help', cssModule) },
			helpText
		)
	);
};

Label.defaultProps = {
	className: null,
	tag: 'label',
	hide: false,
	text: null,
	children: null,
	helpText: null,
	cssModule: null
};

Label.propTypes = {
	/**
  * Any classes here will be added to the outer tag of the label
  */
	className: _propTypes2.default.string,
	/**
  * The html tag to use, e.g. 'label' or 'span'. It's recommended you keep it as a label in most cases for accessibility.
  */
	tag: _propTypes2.default.string,
	/**
  * Visually hide the label, but still allow it to be read by assistive tech. (uses .vh class)
  */
	hide: _propTypes2.default.bool,
	/**
  * The text of the label, `children` will be ignored if this is set.
  */
	text: _propTypes2.default.string,
	/**
  * You can either pass in simple text or whatever children you like if you want to get creative.
  *
  * This will be ignored if anything is passed to the `text` prop.
  */
	children: _propTypes2.default.node,
	/**
  * Extra text that will be displayed beneath the label text
  */
	helpText: _propTypes2.default.string,
	cssModule: _propTypes2.default.object
};

exports.default = Label;