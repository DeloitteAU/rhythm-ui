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

var renderOptions = function renderOptions(options) {
	return (options || []).map(function (_ref) {
		var label = _ref.label,
		    opt = _objectWithoutProperties(_ref, ['label']);

		return _react2.default.createElement(
			'option',
			_extends({ key: opt.value }, opt),
			label
		);
	});
};

/**
 * A <select /> component.
 */
var Select = function Select(_ref2) {
	var className = _ref2.className,
	    id = _ref2.id,
	    name = _ref2.name,
	    isInline = _ref2.isInline,
	    cssModule = _ref2.cssModule,
	    options = _ref2.options,
	    children = _ref2.children,
	    required = _ref2.required,
	    requiredText = _ref2.requiredText,
	    preAddon = _ref2.preAddon,
	    postAddon = _ref2.postAddon,
	    label = _ref2.label,
	    labelProps = _ref2.labelProps,
	    tooltip = _ref2.tooltip,
	    tooltipProps = _ref2.tooltipProps,
	    helpText = _ref2.helpText,
	    error = _ref2.error,
	    status = _ref2.status,
	    statusMessage = _ref2.statusMessage,
	    width = _ref2.width,
	    attrs = _objectWithoutProperties(_ref2, ['className', 'id', 'name', 'isInline', 'cssModule', 'options', 'children', 'required', 'requiredText', 'preAddon', 'postAddon', 'label', 'labelProps', 'tooltip', 'tooltipProps', 'helpText', 'error', 'status', 'statusMessage', 'width']);

	var _status = status;
	var _statusMessage = statusMessage;

	if (error) {
		_status = 'error';
		_statusMessage = error;
	}

	var isInvalid = _status === 'error';

	var inputClasses = (0, _mapToCssModules2.default)((0, _classnames2.default)('select-input', _defineProperty({}, 'select-input--' + _status, !!_status)), cssModule);

	var inputId = id || name;

	var optionalInputAttributes = {};

	if (_statusMessage) {
		optionalInputAttributes['aria-describedby'] = inputId + '-status-msg';
	}

	return _react2.default.createElement(
		_Control2.default,
		{
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
				{ className: (0, _mapToCssModules2.default)('select-input__pre', cssModule) },
				preAddon
			),
			_react2.default.createElement(
				'select',
				_extends({
					id: inputId,
					name: name,
					required: required,
					'aria-required': required,
					'aria-invalid': isInvalid
				}, optionalInputAttributes, attrs),
				children || renderOptions(options)
			),
			postAddon && _react2.default.createElement(
				'div',
				{ className: (0, _mapToCssModules2.default)('select-input__post', cssModule) },
				postAddon
			)
		)
	);
};

Select.defaultProps = {
	className: null,
	isInline: false,

	id: undefined,

	cssModule: null,

	options: [],
	children: null,

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
	requiredText: null
};

Select.propTypes = {
	className: _propTypes2.default.string,
	/**
  * name will be used as the input's id if it's not provided.
  */
	id: _propTypes2.default.string,
	/**
  * The name of the input, will also be used as the id.
  */
	name: _propTypes2.default.string.isRequired,
	/**
  * Takes options options of the form: { label: <string>, value: <any, ...extraProps }. Ignored if `children` are passed in.
  */
	options: _propTypes2.default.array,
	/**
  * You can pass in <option/>s as childre. If children are provided, the `options` prop is ignored.
  */
	children: _propTypes2.default.node,
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

exports.default = Select;