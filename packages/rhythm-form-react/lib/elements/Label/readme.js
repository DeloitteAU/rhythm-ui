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

var _Label = require('./Label');

var _Label2 = _interopRequireDefault(_Label);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var componentInfo = require('react-docgen').parse(require('!raw-loader!./Label'));

var LabelDocs = function LabelDocs() {
	return _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(
			'h1',
			{ className: 'rh' },
			'Label'
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
				'import Label from \'rhythm-form-react/lib/elements/Label\';'
			)
		),
		_react2.default.createElement(
			'h2',
			{ className: 'rh' },
			'Props reference'
		),
		_react2.default.createElement(
			'p',
			null,
			'Any extra props will be passed directly to the outer tag of the label.'
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
				_Label2.default,
				{ helpText: 'I\'m some help text' },
				'I\'m the label text'
			)
		),
		_react2.default.createElement(
			_Example2.default,
			{ isJsx: true },
			_react2.default.createElement(
				_Label2.default,
				{ tag: 'span' },
				'I\'m secretly a span'
			)
		),
		_react2.default.createElement(
			_Example2.default,
			{ isJsx: true },
			_react2.default.createElement(
				_Label2.default,
				null,
				_react2.default.createElement(
					'h3',
					null,
					'Custom markup inside ',
					_react2.default.createElement(
						'a',
						{ href: '#' },
						'here\'s an example link'
					),
					'.'
				)
			)
		),
		_react2.default.createElement(
			_Example2.default,
			{ isJsx: true },
			_react2.default.createElement(_Label2.default, { 'data-testing': 'hjbasdhj', className: 'active yes', text: 'Testing props pass through' })
		),
		_react2.default.createElement(
			_Example2.default,
			{ isJsx: true },
			_react2.default.createElement(
				_Label2.default,
				{ hide: true },
				'Hidden'
			),
			_react2.default.createElement(
				'p',
				null,
				'There\'s a hidden label above'
			)
		)
	);
};

exports.default = LabelDocs;