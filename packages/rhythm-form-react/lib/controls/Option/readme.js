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

var _Option = require('./Option');

var _Option2 = _interopRequireDefault(_Option);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var componentInfo = require('react-docgen').parse(require('!raw-loader!./Option'));

var OptionDocs = function OptionDocs() {
	return _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(
			'h1',
			{ className: 'rh' },
			'Option'
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
				'import Option from \'rhythm-form-react/lib/controls/Option\';'
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
			_react2.default.createElement(_Option2.default, {
				id: 'check1',
				name: 'check1',
				label: 'This is a label',
				type: 'checkbox'
			})
		),
		_react2.default.createElement(
			_Example2.default,
			{ isJsx: true },
			_react2.default.createElement(_Option2.default, {
				id: 'radio1',
				name: 'radio1',
				label: 'This is a label',
				type: 'radio'
			})
		)
	);
};

exports.default = OptionDocs;