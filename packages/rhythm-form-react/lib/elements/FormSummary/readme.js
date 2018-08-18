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

var _FormSummary = require('./FormSummary');

var _FormSummary2 = _interopRequireDefault(_FormSummary);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var componentInfo = require('react-docgen').parse(require('!raw-loader!./FormSummary'));

var FormSummaryDocs = function FormSummaryDocs() {
	return _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(
			'h1',
			{ className: 'rh' },
			'FormSummary'
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
				'import FormSummary from \'rhythm-form-react/lib/elements/FormSummary\';'
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
			_react2.default.createElement(
				_FormSummary2.default,
				{
					title: 'Error title',
					status: 'error',
					items: [{ key: 0, label: 'First name', text: 'First name cannot be Bob', path: '#first' }, { key: 1, label: 'Last name', text: 'Last name is required', path: '#last' }]
				},
				_react2.default.createElement(
					'p',
					null,
					'Description of the error.'
				)
			)
		),
		_react2.default.createElement(
			_Example2.default,
			{ isJsx: true },
			_react2.default.createElement(_FormSummary2.default, { title: 'This is a title' })
		),
		_react2.default.createElement(
			_Example2.default,
			{ isJsx: true },
			_react2.default.createElement(
				_FormSummary2.default,
				null,
				_react2.default.createElement(
					'p',
					null,
					'Whatever content you want here.'
				),
				_react2.default.createElement(
					'p',
					null,
					'More content.'
				)
			)
		),
		_react2.default.createElement(
			_Example2.default,
			{ isJsx: true },
			_react2.default.createElement(
				_FormSummary2.default,
				{ title: 'This is a title', status: 'error' },
				'Test'
			)
		),
		_react2.default.createElement(
			_Example2.default,
			{ isJsx: true },
			_react2.default.createElement(
				_FormSummary2.default,
				{ title: 'This is a title', status: 'info' },
				'Test'
			)
		),
		_react2.default.createElement(
			_Example2.default,
			{ isJsx: true },
			_react2.default.createElement(
				_FormSummary2.default,
				{ title: 'This is a title', status: 'warning' },
				'Test'
			)
		),
		_react2.default.createElement(
			_Example2.default,
			{ isJsx: true },
			_react2.default.createElement(
				_FormSummary2.default,
				{ title: 'This is a title', status: 'success' },
				'Test'
			)
		)
	);
};

exports.default = FormSummaryDocs;