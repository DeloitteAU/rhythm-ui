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

var renderItems = function renderItems(items) {
	if (!items) {
		return null;
	}
	if (!items.length) {
		return null;
	}

	var listItems = items.map(function (item, i) {
		return _react2.default.createElement(
			'li',
			{ key: item.key || i },
			_react2.default.createElement(
				'a',
				{ href: item.path },
				_react2.default.createElement(
					'strong',
					null,
					item.label,
					':'
				),
				' ',
				item.text
			)
		);
	});

	return _react2.default.createElement(
		'ul',
		null,
		listItems
	);
};

/**
 * Description of the FormSummary component
 */
var FormSummary = function FormSummary(_ref) {
	var className = _ref.className,
	    title = _ref.title,
	    children = _ref.children,
	    status = _ref.status,
	    items = _ref.items,
	    cssModule = _ref.cssModule,
	    attrs = _objectWithoutProperties(_ref, ['className', 'title', 'children', 'status', 'items', 'cssModule']);

	var classes = (0, _mapToCssModules2.default)((0, _classnames2.default)(className, 'form-summary', _defineProperty({}, 'is-' + status, !!status)), cssModule);

	return _react2.default.createElement(
		'div',
		_extends({}, attrs, { className: classes }),
		title && _react2.default.createElement(
			'div',
			{ className: (0, _mapToCssModules2.default)('form-summary-title', cssModule) },
			title
		),
		children,
		renderItems(items)
	);
};

FormSummary.defaultProps = {
	className: null,
	title: null,
	children: null,
	status: null,
	items: [],
	cssModule: null
};

FormSummary.propTypes = {
	className: _propTypes2.default.string,
	title: _propTypes2.default.node,
	children: _propTypes2.default.node,
	status: _propTypes2.default.oneOf(['error', 'info', 'warning', 'success']),
	items: _propTypes2.default.arrayOf(_propTypes2.default.shape({
		key: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]).isRequired,
		label: _propTypes2.default.node,
		text: _propTypes2.default.node,
		path: _propTypes2.default.string
	})),
	cssModule: _propTypes2.default.object
};

exports.default = FormSummary;