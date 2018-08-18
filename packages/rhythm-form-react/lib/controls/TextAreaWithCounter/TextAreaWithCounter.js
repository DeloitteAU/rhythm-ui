'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TextArea = require('../TextArea');

var _TextArea2 = _interopRequireDefault(_TextArea);

var _CharacterCounter = require('../../components/CharacterCounter');

var _CharacterCounter2 = _interopRequireDefault(_CharacterCounter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * A textarea component.
 */
var TextAreaWithCounter = function (_React$Component) {
	_inherits(TextAreaWithCounter, _React$Component);

	function TextAreaWithCounter(props) {
		_classCallCheck(this, TextAreaWithCounter);

		var _this = _possibleConstructorReturn(this, (TextAreaWithCounter.__proto__ || Object.getPrototypeOf(TextAreaWithCounter)).call(this, props));

		_this.state = {
			counterValue: _this.props.max
		};

		_this._handleChange = _this._handleChange.bind(_this);
		return _this;
	}

	_createClass(TextAreaWithCounter, [{
		key: '_handleChange',
		value: function _handleChange(event) {
			if (!!this.props.max && event.target.value.length >= 0) {
				this.setState({ counterValue: this.props.max - event.target.value.length });
			}

			this.props.onChange(event);
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    counterPrefix = _props.counterPrefix,
			    counterA11yPrefix = _props.counterA11yPrefix,
			    counterSuffix = _props.counterSuffix,
			    counterA11ySuffix = _props.counterA11ySuffix,
			    otherProps = _objectWithoutProperties(_props, ['counterPrefix', 'counterA11yPrefix', 'counterSuffix', 'counterA11ySuffix']);

			return _react2.default.createElement(
				'div',
				{ className: 'text-area-with-counter' },
				_react2.default.createElement(_TextArea2.default, _extends({}, otherProps, {
					onChange: this._handleChange,
					footer: _react2.default.createElement(_CharacterCounter2.default, {
						value: this.state.counterValue,
						prefix: counterPrefix,
						a11yPrefix: counterA11yPrefix,
						suffix: counterSuffix,
						a11ySuffix: counterA11ySuffix
					})
				}))
			);
		}
	}]);

	return TextAreaWithCounter;
}(_react2.default.Component);

TextAreaWithCounter.propTypes = {
	max: _propTypes2.default.number.isRequired,
	onChange: _propTypes2.default.func.isRequired,
	counterPrefix: _propTypes2.default.string,
	counterA11yPrefix: _propTypes2.default.string,
	counterSuffix: _propTypes2.default.string,
	counterA11ySuffix: _propTypes2.default.string
};

TextAreaWithCounter.defaultProps = {
	counterPrefix: null,
	counterA11yPrefix: null,
	counterSuffix: null,
	counterA11ySuffix: null
};

exports.default = TextAreaWithCounter;