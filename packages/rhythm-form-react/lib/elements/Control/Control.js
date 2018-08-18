'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Label = require('../Label');

var _Label2 = _interopRequireDefault(_Label);

var _HelpText = require('../HelpText');

var _HelpText2 = _interopRequireDefault(_HelpText);

var _Tooltip = require('../Tooltip');

var _Tooltip2 = _interopRequireDefault(_Tooltip);

var _InlineStatus = require('../InlineStatus');

var _InlineStatus2 = _interopRequireDefault(_InlineStatus);

var _mapToCssModules = require('../../utils/mapToCssModules');

var _mapToCssModules2 = _interopRequireDefault(_mapToCssModules);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * A <Control /> holds all the rendering logic for form fields (labels, errors etc.)
 *
 * You can use the Control component to build your own custom controls.
 */
var Control = function Control(_ref) {
	var _classNames;

	var className = _ref.className,
	    name = _ref.name,
	    isInline = _ref.isInline,
	    width = _ref.width,
	    cssModule = _ref.cssModule,
	    required = _ref.required,
	    requiredText = _ref.requiredText,
	    label = _ref.label,
	    labelProps = _ref.labelProps,
	    tooltip = _ref.tooltip,
	    tooltipProps = _ref.tooltipProps,
	    helpText = _ref.helpText,
	    children = _ref.children,
	    status = _ref.status,
	    statusMessage = _ref.statusMessage,
	    attrs = _objectWithoutProperties(_ref, ['className', 'name', 'isInline', 'width', 'cssModule', 'required', 'requiredText', 'label', 'labelProps', 'tooltip', 'tooltipProps', 'helpText', 'children', 'status', 'statusMessage']);

	var classes = (0, _mapToCssModules2.default)((0, _classnames2.default)(className, (_classNames = {
		'ctrl-holder': true,
		'is-inline': isInline
	}, _defineProperty(_classNames, 'width-' + width, !!width), _defineProperty(_classNames, 'is-' + status, !!status), _classNames)), cssModule);

	var _requiredText = required ? _react2.default.createElement(
		'em',
		null,
		'*',
		_react2.default.createElement(
			'span',
			{ className: 'vh' },
			'Required field'
		)
	) : null;
	if (requiredText) {
		_requiredText = requiredText(required);
	}

	return _react2.default.createElement(
		'div',
		_extends({}, attrs, { className: classes }),
		(label || tooltip) && _react2.default.createElement(
			_Label2.default,
			_extends({
				htmlFor: name
			}, labelProps),
			label,
			_requiredText,
			tooltip && _react2.default.createElement(
				_Tooltip2.default,
				_extends({ id: name + '__tooltip' }, tooltipProps),
				tooltip
			)
		),
		_react2.default.createElement(
			'div',
			{ className: (0, _mapToCssModules2.default)('ctrl', cssModule) },
			_react2.default.createElement(
				'div',
				{ className: (0, _mapToCssModules2.default)('ctrl__width-wrap', cssModule) },
				children
			),
			statusMessage && _react2.default.createElement(
				_InlineStatus2.default,
				{ id: name + '-status-msg', status: status },
				statusMessage
			),
			helpText && _react2.default.createElement(
				_HelpText2.default,
				null,
				helpText
			)
		)
	);
};

Control.defaultProps = {
	className: null,
	isInline: false,
	width: null,

	required: false,
	requiredText: null,

	label: null,
	labelProps: {},

	tooltip: null,
	tooltipProps: {},

	helpText: null,

	children: null,

	status: null,
	statusMessage: null,

	cssModule: null
};

Control.propTypes = {
	/**
  * Any extra classes are added to the `.ctrl-holder`
  */
	className: _propTypes2.default.string,
	/**
  * Used as both the name and id of the control
  */
	name: _propTypes2.default.string.isRequired,
	/**
  * If true, the control will use an inline layout
  */
	isInline: _propTypes2.default.bool,
	required: _propTypes2.default.bool,
	/**
  * The markup to display next to a label to denote a required field.
  *
  * Can also take a render function that is passed a single parameter: isRequired
  */
	requiredText: _propTypes2.default.func,
	/**
  * Defaults to full width if not specified which is useful for bootstrap style grids, but you can set the field width here too.
  */
	width: _propTypes2.default.oneOf(['xl', 'l', 'm', 's', 'xs', 'xxs']),
	/**
  * The content of the label
  */
	label: _propTypes2.default.node,
	/**
  * Any extra props to be passed to the <Label />. See the Label docs for a list of options
  */
	labelProps: _propTypes2.default.object,
	/**
  * The content of the tooltip
  */
	tooltip: _propTypes2.default.node,
	/**
  * Any extra props to be passed to the <Tooltip />. See the Tooltip docs for a list of options
  */
	tooltipProps: _propTypes2.default.object,
	/**
  * The help text display below the field
  */
	helpText: _propTypes2.default.node,

	children: _propTypes2.default.node,
	/**
  * The status of the control, used for error states etc.
  */
	status: _propTypes2.default.oneOf(['error', 'warning', 'info', 'success']),
	/**
  * The status message displayed below the field, used for error/validation messages etc.
  */
	statusMessage: _propTypes2.default.node,
	cssModule: _propTypes2.default.object
};

exports.default = Control;