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

var _Tooltip = require('./Tooltip');

var _Tooltip2 = _interopRequireDefault(_Tooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var componentInfo = require('react-docgen').parse(require('!raw-loader!./Tooltip'));

var TooltipDocs = function TooltipDocs() {
	return _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(
			'h1',
			{ className: 'rh' },
			'Tooltip'
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
				'import Tooltip from \'rhythm-form-react/lib/elements/Tooltip\';'
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
				_Tooltip2.default,
				{ id: 'tooltip1' },
				'This is the tooltip text'
			)
		),
		_react2.default.createElement(
			_Example2.default,
			{ isJsx: true },
			_react2.default.createElement(
				_Tooltip2.default,
				{ id: 'tooltip2', label: 'Custom label', eventsEnabled: true },
				_react2.default.createElement(
					'p',
					null,
					'Do whatever you want inside'
				),
				_react2.default.createElement(
					'p',
					null,
					'Here\'s some markup'
				)
			)
		),
		_react2.default.createElement(
			_Example2.default,
			{ isJsx: true },
			_react2.default.createElement(
				_Tooltip2.default,
				{ id: 'tooltip3', label: 'No hover', openOnHover: false },
				_react2.default.createElement(
					'p',
					null,
					'Do whatever you want inside'
				),
				_react2.default.createElement(
					'p',
					null,
					'Here\'s some markup'
				)
			)
		)
	);
};

exports.default = TooltipDocs;