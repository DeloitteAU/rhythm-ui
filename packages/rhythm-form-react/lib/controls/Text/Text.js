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

var _Control = require('../../elements/Control');

var _Control2 = _interopRequireDefault(_Control);

var _mapToCssModules = require('../../utils/mapToCssModules');

var _mapToCssModules2 = _interopRequireDefault(_mapToCssModules);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * A text input component. Can be used for most 'text style' inputs such as password, number, tel etc.
 */
var Text = function Text(_ref) {
	var cssModule = _ref.cssModule,
	    className = _ref.className,
	    id = _ref.id,
	    name = _ref.name,
	    isInline = _ref.isInline,
	    required = _ref.required,
	    requiredText = _ref.requiredText,
	    preAddon = _ref.preAddon,
	    postAddon = _ref.postAddon,
	    label = _ref.label,
	    labelProps = _ref.labelProps,
	    tooltip = _ref.tooltip,
	    tooltipProps = _ref.tooltipProps,
	    helpText = _ref.helpText,
	    error = _ref.error,
	    status = _ref.status,
	    statusMessage = _ref.statusMessage,
	    width = _ref.width,
	    attrs = _objectWithoutProperties(_ref, ['cssModule', 'className', 'id', 'name', 'isInline', 'required', 'requiredText', 'preAddon', 'postAddon', 'label', 'labelProps', 'tooltip', 'tooltipProps', 'helpText', 'error', 'status', 'statusMessage', 'width']);

	var _status = status;
	var _statusMessage = statusMessage;

	if (error) {
		_status = 'error';
		_statusMessage = error;
	}

	var isInvalid = _status === 'error';

	var inputClasses = (0, _mapToCssModules2.default)((0, _classnames2.default)('text-input', _defineProperty({}, 'text-input--' + _status, !!_status)), cssModule);

	var inputId = id || name;

	var optionalInputAttributes = {};

	if (_statusMessage) {
		optionalInputAttributes['aria-describedby'] = inputId + '-status-msg';
	}

	return _react2.default.createElement(
		_Control2.default,
		{
			cssModule: cssModule,
			className: className,
			name: inputId,
			isInline: isInline,
			label: label,
			labelProps: labelProps,
			tooltip: tooltip,
			tooltipProps: tooltipProps,
			helpText: helpText,
			required: required,
			requiredText: requiredText,
			width: width,
			status: _status,
			statusMessage: _statusMessage
		},
		_react2.default.createElement(
			'div',
			{ className: inputClasses },
			preAddon && _react2.default.createElement(
				'div',
				{ className: (0, _mapToCssModules2.default)('text-input__pre', cssModule) },
				preAddon
			),
			_react2.default.createElement('input', _extends({
				id: inputId,
				name: name,
				required: required,
				'aria-required': required,
				'aria-invalid': isInvalid
			}, optionalInputAttributes, attrs)),
			postAddon && _react2.default.createElement(
				'div',
				{ className: (0, _mapToCssModules2.default)('text-input__post', cssModule) },
				postAddon
			)
		)
	);
};

Text.defaultProps = {
	className: null,
	isInline: false,

	id: undefined,
	required: false,

	preAddon: null,
	postAddon: null,

	label: null,
	labelProps: {},

	tooltip: null,
	tooltipProps: {},

	helpText: null,

	error: null,
	status: null,
	statusMessage: null,

	width: null,

	cssModule: null,
	requiredText: null
};

Text.propTypes = {
	className: _propTypes2.default.string,
	/**
  * name will be used as the input's id if it's not provided.
  */
	id: _propTypes2.default.string,
	/**
  * The name of the input, will also be used as the id if no id is provided.
  */
	name: _propTypes2.default.string.isRequired,
	/**
  * The label of the control.
  */
	label: _propTypes2.default.node,
	/**
  * Props to be passed to the label
  */
	labelProps: _propTypes2.default.object,
	/**
  * The content of the controls tooltip.
  */
	tooltip: _propTypes2.default.node,
	/**
  * Props to be passed to the tooltip
  */
	tooltipProps: _propTypes2.default.object,
	/**
  * Help text to display below the field.
  */
	helpText: _propTypes2.default.node,
	/**
  * Display something to the left of the field
  */
	preAddon: _propTypes2.default.node,
	/**
  * Display something to the right of the field
  */
	postAddon: _propTypes2.default.node,
	/**
  * If true, the control will use an inline layout
  */
	isInline: _propTypes2.default.bool,
	error: _propTypes2.default.node,
	status: _propTypes2.default.oneOf(['error', 'warning', 'info', 'success']),
	statusMessage: _propTypes2.default.node,
	required: _propTypes2.default.bool,
	/**
  * Will be full width if not specified
  */
	width: _propTypes2.default.oneOf(['xl', 'l', 'm', 's', 'xs', 'xxs']),
	cssModule: _propTypes2.default.object,
	requiredText: _propTypes2.default.func
};

exports.default = Text;