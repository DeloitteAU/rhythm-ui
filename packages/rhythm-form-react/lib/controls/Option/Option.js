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

var _Label = require('../../elements/Label');

var _Label2 = _interopRequireDefault(_Label);

var _Tooltip = require('../../elements/Tooltip');

var _Tooltip2 = _interopRequireDefault(_Tooltip);

var _mapToCssModules = require('../../utils/mapToCssModules');

var _mapToCssModules2 = _interopRequireDefault(_mapToCssModules);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * Description of the Option component
 */
var Option = function Option(_ref) {
	var className = _ref.className,
	    id = _ref.id,
	    name = _ref.name,
	    Tag = _ref.tag,
	    label = _ref.label,
	    labelProps = _ref.labelProps,
	    tooltip = _ref.tooltip,
	    tooltipProps = _ref.tooltipProps,
	    type = _ref.type,
	    cssModule = _ref.cssModule,
	    helpText = _ref.helpText,
	    attrs = _objectWithoutProperties(_ref, ['className', 'id', 'name', 'tag', 'label', 'labelProps', 'tooltip', 'tooltipProps', 'type', 'cssModule', 'helpText']);

	var classes = (0, _mapToCssModules2.default)((0, _classnames2.default)(className, 'option'), cssModule);

	return _react2.default.createElement(
		Tag,
		{ className: classes },
		_react2.default.createElement('input', _extends({
			id: id,
			name: name,
			type: type
		}, attrs)),
		(label || tooltip) && _react2.default.createElement(
			_Label2.default,
			_extends({
				htmlFor: id
			}, labelProps),
			label,
			tooltip && _react2.default.createElement(
				_Tooltip2.default,
				_extends({ id: id + '__tooltip' }, tooltipProps),
				tooltip
			)
		)
	);
};

Option.defaultProps = {
	className: null,
	type: 'checkbox',
	tag: 'div',

	label: null,
	labelProps: {},

	tooltip: null,
	tooltipProps: {},

	cssModule: null,
	helpText: null
};

Option.propTypes = {
	id: _propTypes2.default.string.isRequired,
	name: _propTypes2.default.string.isRequired,
	/**
  * A description of the prop, it will automatically appear in the docs
  */
	className: _propTypes2.default.string,
	type: _propTypes2.default.oneOf(['radio', 'checkbox']),
	tag: _propTypes2.default.string,
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
	cssModule: _propTypes2.default.object,
	/**
  * Help text to display below the field.
  */
	helpText: _propTypes2.default.node
};

exports.default = Option;