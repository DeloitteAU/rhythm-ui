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

var _InlineStatus = require('./InlineStatus');

var _InlineStatus2 = _interopRequireDefault(_InlineStatus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var componentInfo = require('react-docgen').parse(require('!raw-loader!./InlineStatus'));

var InlineStatusDocs = function InlineStatusDocs() {
	return _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(
			'h1',
			{ className: 'rh' },
			'InlineStatus'
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
				'import InlineStatus from \'rhythm-form-react/lib/elements/InlineStatus\';'
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
				_InlineStatus2.default,
				{ status: 'error' },
				'This field is required'
			)
		),
		_react2.default.createElement(
			_Example2.default,
			{ isJsx: true },
			_react2.default.createElement(
				_InlineStatus2.default,
				{ status: 'warning' },
				'Warning message'
			)
		),
		_react2.default.createElement(
			_Example2.default,
			{ isJsx: true },
			_react2.default.createElement(
				_InlineStatus2.default,
				{ status: 'info' },
				'Information'
			)
		),
		_react2.default.createElement(
			_Example2.default,
			{ isJsx: true },
			_react2.default.createElement(
				_InlineStatus2.default,
				{ status: 'success' },
				'You did good'
			)
		)
	);
};

exports.default = InlineStatusDocs;