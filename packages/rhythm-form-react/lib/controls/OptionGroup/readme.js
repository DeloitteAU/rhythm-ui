'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Example = require('rhythm-dev-server/lib/Example');

var _Example2 = _interopRequireDefault(_Example);

var _PropTable = require('../../../docs/PropTable');

var _PropTable2 = _interopRequireDefault(_PropTable);

var _OptionGroup = require('./OptionGroup');

var _OptionGroup2 = _interopRequireDefault(_OptionGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var componentInfo = require('react-docgen').parse(require('!raw-loader!./OptionGroup'));

var OptionGroupDocs = function (_React$Component) {
	_inherits(OptionGroupDocs, _React$Component);

	function OptionGroupDocs(props) {
		_classCallCheck(this, OptionGroupDocs);

		var _this = _possibleConstructorReturn(this, (OptionGroupDocs.__proto__ || Object.getPrototypeOf(OptionGroupDocs)).call(this, props));

		_this.state = {
			radioValue: '2',
			checkboxValues: ['2', '3']
		};
		return _this;
	}

	_createClass(OptionGroupDocs, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'h1',
					{ className: 'rh' },
					'OptionGroup'
				),
				_react2.default.createElement(
					'p',
					null,
					componentInfo.description
				),
				_react2.default.createElement(
					'p',
					{ className: 'rh' },
					_react2.default.createElement(
						'code',
						null,
						'import OptionGroup from \'rhythm-form-react/lib/controls/OptionGroup\';'
					)
				),
				_react2.default.createElement(
					'h2',
					{ className: 'rh' },
					'Props reference'
				),
				_react2.default.createElement(_PropTable2.default, { componentInfo: componentInfo }),
				_react2.default.createElement(
					'h2',
					{ className: 'rh' },
					'Examples'
				),
				_react2.default.createElement(
					_Example2.default,
					{ isJsx: true },
					_react2.default.createElement(_OptionGroup2.default, {
						name: 'group1',
						label: 'Checkboxes',
						type: 'checkbox',
						options: [{ id: 'example1', label: 'Example 1', value: '1' }, { id: 'example2', label: 'Example 2', value: '2' }, { id: 'example3', label: 'Example 3', value: '3' }]
					}),
					_react2.default.createElement(_OptionGroup2.default, {
						name: 'group2',
						label: 'Radio buttons',
						type: 'radio',
						options: [{ id: 'example1', label: 'Example 1', value: '1' }, { id: 'example2', label: 'Example 2', value: '2' }, { id: 'example3', label: 'Example 3', value: '3' }]
					})
				),
				_react2.default.createElement(
					_Example2.default,
					{ isJsx: true },
					_react2.default.createElement(_OptionGroup2.default, {
						name: 'group3',
						label: 'Horizontal checkboxes',
						type: 'checkbox',
						isHorizontal: true,
						options: [{ id: 'example1', label: 'Example 1', value: '1' }, { id: 'example2', label: 'Example 2', value: '2' }, { id: 'example3', label: 'Example 3', value: '3' }]
					}),
					_react2.default.createElement(_OptionGroup2.default, {
						name: 'group4',
						label: 'Horizontal radio buttons',
						type: 'radio',
						isHorizontal: true,
						options: [{ id: 'example1', label: 'Example 1', value: '1' }, { id: 'example2', label: 'Example 2', value: '2' }, { id: 'example3', label: 'Example 3', value: '3' }]
					})
				),
				_react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: '\n\t\t\t\t\t.green label {\n\t\t\t\t\t\tbackground: green;\n\t\t\t\t\t\tcolor: white;\n\t\t\t\t\t}' }
				}),
				_react2.default.createElement(
					_Example2.default,
					{ isJsx: true },
					_react2.default.createElement(_OptionGroup2.default, {
						name: 'group5',
						label: 'Extra props passed through to options',
						type: 'radio',
						isInline: true,
						options: [{
							id: 'example1',
							label: 'Example option 1',
							value: '1',
							labelProps: {
								helpText: 'Help text'
							}
						}, {
							id: 'example2',
							label: 'Example 2',
							value: '2',
							tooltip: 'This is the tooltip'
						}, {
							id: 'example3',
							label: 'Example 3 with an extra class added',
							value: '3',
							className: 'green'
						}]
					})
				),
				_react2.default.createElement(
					_Example2.default,
					{ isJsx: true },
					_react2.default.createElement(_OptionGroup2.default, {
						name: 'group6',
						label: 'Horizontal layout',
						options: [{ id: 'example1', label: 'Option 1', value: '1' }, { id: 'opt2', label: 'Option 2', value: '2' }, { id: 'opt3', label: 'Option three', value: '3' }, { id: 'opt4', label: 'This is option four', value: '4' }, { id: 'opt5', label: 'Another option', value: '5' }, { id: 'opt6', label: 'The final option', value: '6' }],
						isHorizontal: true,
						type: 'radio'
					})
				),
				_react2.default.createElement(
					_Example2.default,
					{ isJsx: true },
					_react2.default.createElement(_OptionGroup2.default, {
						name: 'group7',
						label: 'With error',
						options: [{ id: 'opt1', label: 'Option 1', value: '1' }, { id: 'opt2', label: 'Option 2', value: '2' }, { id: 'opt3', label: 'Option 3', value: '3' }],
						isHorizontal: true,
						type: 'radio',
						error: 'Uh oh, this is error text'
					})
				),
				_react2.default.createElement(
					_Example2.default,
					{ isJsx: true },
					_react2.default.createElement(_OptionGroup2.default, {
						name: 'group8',
						label: 'Controlled',
						options: [{ id: 'opt1', label: 'Option 1', value: '1' }, { id: 'opt2', label: 'Option 2', value: '2' }, { id: 'opt3', label: 'Option 3', value: '3' }],
						value: this.state.radioValue,
						onChange: function onChange(value) {
							console.log(value);
							_this2.setState({
								radioValue: value
							});
						},
						isHorizontal: true,
						type: 'radio'
					})
				),
				_react2.default.createElement(
					_Example2.default,
					{ isJsx: true },
					_react2.default.createElement(_OptionGroup2.default, {
						name: 'group9',
						label: 'Controlled',
						options: [{ id: 'opt1', label: 'Option 1', value: '1' }, { id: 'opt2', label: 'Option 2', value: '2' }, { id: 'opt3', label: 'Option 3', value: '3' }],
						value: this.state.checkboxValues,
						onChange: function onChange(values) {
							_this2.setState({
								checkboxValues: values
							});
						},
						isHorizontal: true,
						type: 'checkbox'
					})
				)
			);
		}
	}]);

	return OptionGroupDocs;
}(_react2.default.Component);

exports.default = OptionGroupDocs;