'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Example = require('rhythm-dev-server/lib/Example');

var _Example2 = _interopRequireDefault(_Example);

var _PropTable = require('../../../docs/PropTable');

var _PropTable2 = _interopRequireDefault(_PropTable);

var _Text = require('./Text');

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var componentInfo = require('react-docgen').parse(require('!raw-loader!./Text'));

var TextDocs = function TextDocs() {
	return _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(
			'h1',
			{ className: 'rh' },
			'Text'
		),
		_react2.default.createElement(
			'p',
			{ className: 'rh' },
			componentInfo.description
		),
		_react2.default.createElement(
			'p',
			{ className: 'rh' },
			_react2.default.createElement(
				'code',
				null,
				'import Text from \'rhythm-form-react/lib/controls/Text\';'
			)
		),
		_react2.default.createElement(
			'h2',
			{ className: 'rh' },
			'Props reference'
		),
		_react2.default.createElement(
			'p',
			{ className: 'rh' },
			'Any extra props will be passed directly to the ',
			_react2.default.createElement(
				'code',
				null,
				'<input />'
			),
			' element.'
		),
		_react2.default.createElement(
			'p',
			{ className: 'rh' },
			'This gives you full control over how your app uses the component, and you can essential swap this out for any vanilla ',
			_react2.default.createElement(
				'code',
				null,
				'<input />'
			),
			' you already in your project.'
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
			_react2.default.createElement(_Text2.default, {
				name: 'test1',
				label: 'Email',
				placeholder: 'example@example.com',
				error: 'This field is required',
				width: 'xxs',
				required: true
			})
		),
		_react2.default.createElement(
			_Example2.default,
			{ isJsx: true },
			_react2.default.createElement(_Text2.default, {
				name: 'test2',
				label: 'Tooltip',
				placeholder: 'example@example.com',
				error: 'This field is required',
				tooltip: 'This is a tooltip',
				width: 's',
				required: true
			})
		),
		_react2.default.createElement(
			_Example2.default,
			{ isJsx: true },
			_react2.default.createElement(_Text2.default, {
				name: 'test3',
				label: 'Hidden label',
				hideLabel: true,
				placeholder: 'example@example.com',
				width: 'l'
			})
		),
		_react2.default.createElement(
			_Example2.default,
			{ isJsx: true },
			_react2.default.createElement(_Text2.default, {
				label: 'Pre text',
				preAddon: '@',
				error: 'This is an error',
				helpText: 'This is the help text',
				width: 'm'
			})
		),
		_react2.default.createElement(
			_Example2.default,
			{ isJsx: true },
			_react2.default.createElement(_Text2.default, {
				label: 'Pre text',
				postAddon: '%'
			})
		),
		_react2.default.createElement(
			_Example2.default,
			{ isJsx: true },
			_react2.default.createElement(_Text2.default, {
				label: 'Pre + post text',
				preAddon: '$',
				postAddon: 'per month',
				labelProps: {
					helpText: 'This is some help text below the label'
				}
			})
		),
		_react2.default.createElement(
			_Example2.default,
			{ isJsx: true },
			_react2.default.createElement(_Text2.default, {
				label: 'Help text',
				helpText: 'This is the help text'
			})
		),
		_react2.default.createElement(
			_Example2.default,
			{ isJsx: true },
			_react2.default.createElement(_Text2.default, {
				isInline: true,
				label: 'Inline label',
				placeholder: 'example@example.com'
			})
		),
		_react2.default.createElement(
			_Example2.default,
			{ isJsx: true },
			_react2.default.createElement(_Text2.default, {
				isInline: true,
				label: 'Long text inside an inline label and how weird it looks when wrapped',
				placeholder: 'example@example.com'
			})
		),
		_react2.default.createElement(
			_Example2.default,
			{ isJsx: true },
			_react2.default.createElement(_Text2.default, {
				label: 'Disabled',
				disabled: true
			})
		),
		_react2.default.createElement(
			_Example2.default,
			{ isJsx: true },
			_react2.default.createElement(_Text2.default, {
				name: 'success',
				label: 'Yay',
				status: 'success',
				statusMessage: 'You did it!',
				required: true
			})
		)
	);
};

exports.default = TextDocs;