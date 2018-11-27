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

var _TextArea = require('./TextArea');

var _TextArea2 = _interopRequireDefault(_TextArea);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var componentInfo = require('react-docgen').parse(require('!raw-loader!./TextArea'));

var TextAreaDocs = function TextAreaDocs() {
	return _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(
			'h1',
			{ className: 'rh' },
			'TextArea'
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
				'import TextArea from \'rhythm-form-react/lib/controls/TextArea\';'
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
			_react2.default.createElement(_TextArea2.default, {
				name: 'textarea1',
				label: 'This is a TextArea',
				helpText: 'This is help text'
			})
		),
		_react2.default.createElement(
			_Example2.default,
			{ isJsx: true },
			_react2.default.createElement(_TextArea2.default, {
				name: 'textarea2',
				label: 'This is a TextArea',
				helpText: 'This is help text',
				error: 'Oh no you\'ve got an error'
			})
		),
		_react2.default.createElement(
			_Example2.default,
			{ isJsx: true },
			_react2.default.createElement(_TextArea2.default, {
				name: 'textarea3',
				label: 'This is a TextArea',
				helpText: 'This is help text',
				tooltip: 'tips',
				width: 'm'
			})
		)
	);
};

exports.default = TextAreaDocs;