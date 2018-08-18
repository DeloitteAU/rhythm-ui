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

var _Select = require('./Select');

var _Select2 = _interopRequireDefault(_Select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var componentInfo = require('react-docgen').parse(require('!raw-loader!./Select'));

var SelectDocs = function SelectDocs() {
	return _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(
			'h1',
			{ className: 'rh' },
			'Select'
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
				'import Select from \'rhythm-form-react/lib/controls/Select\';'
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
			_react2.default.createElement(_Select2.default, {
				name: 'select1',
				label: 'Select with options prop',
				options: [{ label: 'Option 1', value: '1' }, { label: 'Option 2', value: '2' }, { label: 'Option 3', value: '3' }]
			})
		),
		_react2.default.createElement(
			_Example2.default,
			{ isJsx: true },
			_react2.default.createElement(
				_Select2.default,
				{ name: 'select2', label: 'Select with children', required: true },
				_react2.default.createElement(
					'option',
					{ value: '1' },
					'Option 1'
				),
				_react2.default.createElement(
					'option',
					{ value: '2' },
					'Option 2'
				),
				_react2.default.createElement(
					'option',
					{ value: '3' },
					'Option 3'
				)
			)
		),
		_react2.default.createElement(
			_Example2.default,
			{ isJsx: true },
			_react2.default.createElement(
				_Select2.default,
				{ name: 'select2a', label: 'Select with children and optgroup' },
				_react2.default.createElement(
					'optgroup',
					{ label: 'Group 1' },
					_react2.default.createElement(
						'option',
						{ value: '1a' },
						'Option A'
					),
					_react2.default.createElement(
						'option',
						{ value: '2a' },
						'Option B'
					),
					_react2.default.createElement(
						'option',
						{ value: '3a' },
						'Option C'
					)
				),
				_react2.default.createElement(
					'optgroup',
					{ label: 'Group 2' },
					_react2.default.createElement(
						'option',
						{ value: '1b' },
						'Option A'
					),
					_react2.default.createElement(
						'option',
						{ value: '2b' },
						'Option B'
					),
					_react2.default.createElement(
						'option',
						{ value: '3b' },
						'Option C'
					)
				)
			)
		),
		_react2.default.createElement(
			_Example2.default,
			{ isJsx: true },
			_react2.default.createElement(_Select2.default, {
				name: 'select3',
				label: 'Select with error',
				options: [{ label: 'Option 1', value: '1' }, { label: 'Option 2', value: '2' }, { label: 'Option 3', value: '3' }],
				error: 'There was an error'
			})
		),
		_react2.default.createElement(
			_Example2.default,
			{ isJsx: true },
			_react2.default.createElement(_Select2.default, {
				name: 'select4',
				label: 'Select with pre text',
				options: [{ label: 'Option 1', value: '1' }, { label: 'Option 2', value: '2' }, { label: 'Option 3', value: '3' }],
				preAddon: '$'
			})
		),
		_react2.default.createElement(
			_Example2.default,
			{ isJsx: true },
			_react2.default.createElement(_Select2.default, {
				name: 'select5',
				label: 'Select with post text',
				options: [{ label: 'Option 1', value: '1' }, { label: 'Option 2', value: '2' }, { label: 'Option 3', value: '3' }],
				postAddon: '%'
			})
		),
		_react2.default.createElement(
			_Example2.default,
			{ isJsx: true },
			_react2.default.createElement(_Select2.default, {
				name: 'select6',
				label: 'Select with pre and post text',
				options: [{ label: 'Option 1', value: '1' }, { label: 'Option 2', value: '2' }, { label: 'Option 3', value: '3' }],
				preAddon: '$',
				postAddon: 'per month'
			})
		),
		_react2.default.createElement(
			_Example2.default,
			{ isJsx: true },
			_react2.default.createElement(_Select2.default, {
				name: 'select7',
				label: 'Select with width',
				options: [{ label: 'Option 1', value: '1' }, { label: 'Option 2', value: '2' }, { label: 'Option 3', value: '3' }],
				width: 'm'
			})
		),
		_react2.default.createElement(
			_Example2.default,
			{ isJsx: true },
			_react2.default.createElement(_Select2.default, {
				name: 'select7',
				label: 'Inlined select',
				options: [{ label: 'Option 1', value: '1' }, { label: 'Option 2', value: '2' }, { label: 'Option 3', value: '3' }],
				isInline: true
			})
		)
	);
};

exports.default = SelectDocs;