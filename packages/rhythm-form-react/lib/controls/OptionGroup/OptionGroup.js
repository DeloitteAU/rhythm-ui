'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Control = require('../../elements/Control');

var _Control2 = _interopRequireDefault(_Control);

var _Option = require('../../controls/Option');

var _Option2 = _interopRequireDefault(_Option);

var _mapToCssModules = require('../../utils/mapToCssModules');

var _mapToCssModules2 = _interopRequireDefault(_mapToCssModules);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Description of the OptionGroup component
 */
var OptionGroup = function (_React$Component) {
	_inherits(OptionGroup, _React$Component);

	function OptionGroup(props) {
		_classCallCheck(this, OptionGroup);

		var _this = _possibleConstructorReturn(this, (OptionGroup.__proto__ || Object.getPrototypeOf(OptionGroup)).call(this, props));

		_this.handleOptionChange = _this.handleOptionChange.bind(_this);
		return _this;
	}

	_createClass(OptionGroup, [{
		key: 'handleOptionChange',
		value: function handleOptionChange(optValue) {
			var _props = this.props,
			    onChange = _props.onChange,
			    value = _props.value,
			    type = _props.type;


			if (type === 'radio') {
				onChange(optValue);
			} else if (type === 'checkbox') {
				// Clone the array, we're going to mutate it.
				var valueClone = (value || []).slice();

				var optIndex = valueClone.indexOf(optValue);

				if (valueClone.indexOf(optValue) >= 0) {
					valueClone.splice(optIndex, 1);
				} else {
					valueClone.push(optValue);
				}

				onChange(valueClone);
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _props2 = this.props,
			    className = _props2.className,
			    id = _props2.id,
			    name = _props2.name,
			    isInline = _props2.isInline,
			    disabled = _props2.disabled,
			    cssModule = _props2.cssModule,
			    isHorizontal = _props2.isHorizontal,
			    type = _props2.type,
			    options = _props2.options,
			    optionsClassName = _props2.optionsClassName,
			    required = _props2.required,
			    requiredText = _props2.requiredText,
			    label = _props2.label,
			    labelProps = _props2.labelProps,
			    tooltip = _props2.tooltip,
			    tooltipProps = _props2.tooltipProps,
			    value = _props2.value,
			    onChange = _props2.onChange,
			    helpText = _props2.helpText,
			    error = _props2.error,
			    status = _props2.status,
			    statusMessage = _props2.statusMessage,
			    attrs = _objectWithoutProperties(_props2, ['className', 'id', 'name', 'isInline', 'disabled', 'cssModule', 'isHorizontal', 'type', 'options', 'optionsClassName', 'required', 'requiredText', 'label', 'labelProps', 'tooltip', 'tooltipProps', 'value', 'onChange', 'helpText', 'error', 'status', 'statusMessage']);

			var _status = status;
			var _statusMessage = statusMessage;

			if (error) {
				_status = 'error';
				_statusMessage = error;
			}

			var inputClasses = (0, _mapToCssModules2.default)((0, _classnames2.default)(optionsClassName, 'options', {
				'is-horizontal': isHorizontal
			}), cssModule);

			var inputId = id || name;

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
					status: _status,
					statusMessage: _statusMessage,
					role: 'group',
					'aria-labelledby': labelProps && labelProps.id
				},
				_react2.default.createElement(
					'ul',
					_extends({
						className: inputClasses
					}, attrs),
					(options || []).map(function (_ref) {
						var optionId = _ref.id,
						    optValue = _ref.value,
						    opt = _objectWithoutProperties(_ref, ['id', 'value']);

						var checked = false;

						if (type === 'radio') {
							checked = value === optValue;
						}if (type === 'checkbox' && Array.isArray(value)) {
							checked = value.indexOf(optValue) >= 0;
						}

						return _react2.default.createElement(_Option2.default, _extends({
							key: optionId,
							tag: 'li',
							type: type,
							id: inputId + '__' + optionId,
							name: name,
							checked: checked,
							disabled: disabled,
							onChange: function onChange(e) {
								_this2.handleOptionChange(optValue);
							}
						}, opt));
					})
				)
			);
		}
	}]);

	return OptionGroup;
}(_react2.default.Component);

;

OptionGroup.defaultProps = {
	className: null,
	isInline: false,

	id: undefined,

	cssModule: null,

	type: 'checkbox',
	isHorizontal: false,
	disabled: false,

	options: [],
	optionsClassName: null,

	required: false,

	label: null,
	labelProps: {},

	tooltip: null,
	tooltipProps: {},

	helpText: null,

	value: undefined,
	onChange: function onChange() {},

	error: null,
	status: null,
	statusMessage: null
};

OptionGroup.propTypes = {
	/**
  * A description of the prop, it will automatically appear in the docs
  */
	type: _propTypes2.default.oneOf(['radio', 'checkbox']),
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
  * Any class(es) you want added the <ul> that wraps the options. For example, you could use this to add a '.fancy' class for styling.
  */
	optionsClassName: _propTypes2.default.string,
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
  * If true, the control will use an inline layout. See `isHorizontal` to adjust the layout of the actual options.
  */
	isInline: _propTypes2.default.bool,
	/**
  * If true, the options will be layed out horizontally. See `isInline` to adjust the layout of the controls label.
  */
	isHorizontal: _propTypes2.default.bool,
	error: _propTypes2.default.node,
	status: _propTypes2.default.oneOf(['error', 'warning', 'info', 'success']),
	statusMessage: _propTypes2.default.node,
	required: _propTypes2.default.bool,
	cssModule: _propTypes2.default.object,
	onChange: _propTypes2.default.func,
	/**
  * Expects a string for radio buttons and an array of values for checkboxes
  */
	value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array]),
	disabled: _propTypes2.default.bool
};

exports.default = OptionGroup;