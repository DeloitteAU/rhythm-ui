'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactPopper = require('react-popper');

var _reactTransitionGroup = require('react-transition-group');

var _mapToCssModules = require('../../utils/mapToCssModules');

var _mapToCssModules2 = _interopRequireDefault(_mapToCssModules);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * A tooltip component.
 */
var Tooltip = function (_React$Component) {
	_inherits(Tooltip, _React$Component);

	function Tooltip(props) {
		_classCallCheck(this, Tooltip);

		var _this = _possibleConstructorReturn(this, (Tooltip.__proto__ || Object.getPrototypeOf(Tooltip)).call(this, props));

		_this.state = {
			isVisible: false
		};

		_this.hasFocus = false;

		_this._handleClick = _this._handleClick.bind(_this);
		_this._handleFocus = _this._handleFocus.bind(_this);
		_this._handleBlur = _this._handleBlur.bind(_this);
		_this._handleMouseEnter = _this._handleMouseEnter.bind(_this);
		_this._handleMouseLeave = _this._handleMouseLeave.bind(_this);
		return _this;
	}

	_createClass(Tooltip, [{
		key: 'toggleTouchOutsideEvent',
		value: function toggleTouchOutsideEvent(enabled) {
			if (enabled) {
				document.addEventListener('touchstart', this._handleBlur);
			} else {
				document.removeEventListener('touchstart', this._handleBlur);
			}
		}
	}, {
		key: 'show',
		value: function show() {
			this.setState({
				isVisible: true
			});

			this.toggleTouchOutsideEvent(true);
		}
	}, {
		key: 'hide',
		value: function hide() {
			this.setState({
				isVisible: false
			});

			this.toggleTouchOutsideEvent(false);
		}
	}, {
		key: '_handleClick',
		value: function _handleClick(e) {
			if (e && e.preventDefault) {
				e.preventDefault();
			}
		}
	}, {
		key: '_handleFocus',
		value: function _handleFocus() {
			this.hasFocus = true;
			this.show();
		}
	}, {
		key: '_handleBlur',
		value: function _handleBlur() {
			// Reset click and focus
			this.hasFocus = false;

			// Always hide on blur
			this.hide();
		}
	}, {
		key: '_handleMouseEnter',
		value: function _handleMouseEnter() {
			if (this.props.openOnHover) {
				this.show();
			}
		}
	}, {
		key: '_handleMouseLeave',
		value: function _handleMouseLeave() {
			// Stay open if the button is focused
			if (this.props.openOnHover) {
				this.hide();
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var isVisible = this.state.isVisible;
			var _props = this.props,
			    id = _props.id,
			    className = _props.className,
			    label = _props.label,
			    children = _props.children,
			    placement = _props.placement,
			    cssModule = _props.cssModule;


			var containerClasses = (0, _mapToCssModules2.default)((0, _classnames2.default)(className, 'tooltip-container'), cssModule);

			var tooltipClasses = (0, _mapToCssModules2.default)((0, _classnames2.default)('tooltip', 'tooltip-anim'), cssModule);

			return _react2.default.createElement(
				'div',
				{ className: containerClasses },
				_react2.default.createElement(
					_reactPopper.Manager,
					null,
					_react2.default.createElement(
						_reactPopper.Reference,
						null,
						function (_ref) {
							var ref = _ref.ref;
							return _react2.default.createElement(
								'button',
								{
									ref: ref,
									type: 'button',
									'aria-describedby': id,
									className: (0, _mapToCssModules2.default)('tooltip-btn', cssModule),
									onClick: _this2._handleClick,
									onFocus: _this2._handleFocus,
									onBlur: _this2._handleBlur,
									onMouseEnter: _this2._handleMouseEnter,
									onMouseLeave: _this2._handleMouseLeave
								},
								_react2.default.createElement(
									'span',
									null,
									label
								)
							);
						}
					),
					_react2.default.createElement(
						_reactTransitionGroup.CSSTransition,
						{
							'in': isVisible,
							timeout: 300,
							classNames: 'tooltip-anim',
							appear: true,
							unmountOnExit: true
						},
						_react2.default.createElement(
							_reactPopper.Popper,
							{
								innerRef: function innerRef(n) {
									_this2.popper = n;
								},
								placement: placement,
								eventsEnabled: false,
								modifiers: {
									offset: { offset: '0, 15' },
									preventOverflow: { padding: 10 }
								}
							},
							function (_ref2) {
								var ref = _ref2.ref,
								    style = _ref2.style,
								    placement = _ref2.placement,
								    arrowProps = _ref2.arrowProps;
								return _react2.default.createElement(
									'div',
									{ ref: ref, style: style, 'data-placement': placement, className: tooltipClasses, role: 'tooltip' },
									_react2.default.createElement(
										'div',
										{ className: 'tooltip-anim-wrapper' },
										_react2.default.createElement(
											'div',
											{ className: (0, _mapToCssModules2.default)('tooltip-content', cssModule), id: id },
											children
										),
										_react2.default.createElement('div', { className: (0, _mapToCssModules2.default)('tooltip-arrow', cssModule), ref: arrowProps.ref, style: arrowProps.style })
									)
								);
							}
						)
					)
				)
			);
		}
	}]);

	return Tooltip;
}(_react2.default.Component);

Tooltip.defaultProps = {
	className: null,
	label: 'Tooltip',
	children: null,
	placement: 'top',
	openOnHover: true,
	cssModule: null
};

Tooltip.propTypes = {
	id: _propTypes2.default.string.isRequired,
	/**
  * Will be passed through to the tooltip container
  */
	className: _propTypes2.default.string,
	/**
  * The text of the tooltip button
  */
	label: _propTypes2.default.string,
	/**
  * The tooltip's content
  */
	children: _propTypes2.default.node,
	/**
  * The position that the tooltip should appear relative to the button.
  */
	placement: _propTypes2.default.oneOf(['top', 'bottom']),
	/**
  * If true, the tooltip will open on mouse over
  */
	openOnHover: _propTypes2.default.bool,
	cssModule: _propTypes2.default.object
};

exports.default = Tooltip;