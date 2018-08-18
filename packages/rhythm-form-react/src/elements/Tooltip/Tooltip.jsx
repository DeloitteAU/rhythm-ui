import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Manager, Reference, Popper } from 'react-popper';
import { CSSTransition } from 'react-transition-group';
import mapToCssModules from '../../utils/mapToCssModules';

/**
 * A tooltip component.
 */
class Tooltip extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isVisible: false,
		};

		this.hasFocus = false;

		this._handleClick = this._handleClick.bind(this);
		this._handleFocus = this._handleFocus.bind(this);
		this._handleBlur = this._handleBlur.bind(this);
		this._handleMouseEnter = this._handleMouseEnter.bind(this);
		this._handleMouseLeave = this._handleMouseLeave.bind(this);
	}

	toggleTouchOutsideEvent(enabled) {
		if (enabled) {
			document.addEventListener('touchstart', this._handleBlur);
		} else {
			document.removeEventListener('touchstart', this._handleBlur);
		}
	}

	show() {
		this.setState({
			isVisible: true,
		});

		this.toggleTouchOutsideEvent(true);
	}

	hide() {
		this.setState({
			isVisible: false,
		});

		this.toggleTouchOutsideEvent(false);
	}

	_handleClick(e) {
		if (e && e.preventDefault) {
			e.preventDefault();
		}
	}

	_handleFocus() {
		this.hasFocus = true;
		this.show();
	}

	_handleBlur() {
		// Reset click and focus
		this.hasFocus = false;

		// Always hide on blur
		this.hide();
	}

	_handleMouseEnter() {
		if (this.props.openOnHover) {
			this.show();
		}
	}

	_handleMouseLeave() {
		// Stay open if the button is focused
		if (this.props.openOnHover) {
			this.hide();
		}
	}

	render() {
		const { isVisible } = this.state;

		const {
			id,
			className,
			label,
			children,
			placement,
			cssModule,
		} = this.props;

		const containerClasses = mapToCssModules(classNames(
			className,
			'tooltip-container',
		), cssModule);

		const tooltipClasses = mapToCssModules(classNames(
			'tooltip',
			'tooltip-anim',
		), cssModule);

		return (
			<div className={containerClasses}>
				<Manager>
					<Reference>
						{({ ref }) => (
							<button
								ref={ref}
								type="button"
								aria-describedby={id}
								className={mapToCssModules('tooltip-btn', cssModule)}
								onClick={this._handleClick}
								onFocus={this._handleFocus}
								onBlur={this._handleBlur}
								onMouseEnter={this._handleMouseEnter}
								onMouseLeave={this._handleMouseLeave}
							>
								<span>{label}</span>
							</button>
						)}
					</Reference>

					<CSSTransition
						in={isVisible}
						timeout={300}
						classNames="tooltip-anim"
						appear
						unmountOnExit
					>
						<Popper
							innerRef={n => { this.popper = n; }}
							placement={placement}
							eventsEnabled={false}
							modifiers={{
								offset: { offset: '0, 15' },
								preventOverflow: { padding: 10 },
							}}
						>
							{({ ref, style, placement, arrowProps }) => (
								<div ref={ref} style={style} data-placement={placement} className={tooltipClasses} role="tooltip">
									<div className="tooltip-anim-wrapper">
										<div className={mapToCssModules('tooltip-content', cssModule)} id={id}>
											{children}
										</div>
										<div className={mapToCssModules('tooltip-arrow', cssModule)} ref={arrowProps.ref} style={arrowProps.style} />
									</div>
								</div>
							)}
						</Popper>
					</CSSTransition>
				</Manager>
			</div>
		);
	}
}

Tooltip.defaultProps = {
	className: null,
	label: 'Tooltip',
	children: null,
	placement: 'top',
	openOnHover: true,
	cssModule: null,
};

Tooltip.propTypes = {
	id: PropTypes.string.isRequired,
	/**
	 * Will be passed through to the tooltip container
	 */
	className: PropTypes.string,
	/**
	 * The text of the tooltip button
	 */
	label: PropTypes.string,
	/**
	 * The tooltip's content
	 */
	children: PropTypes.node,
	/**
	 * The position that the tooltip should appear relative to the button.
	 */
	placement: PropTypes.oneOf([
		'top',
		'bottom',
	]),
	/**
	 * If true, the tooltip will open on mouse over
	 */
	openOnHover: PropTypes.bool,
	cssModule: PropTypes.object,
};

export default Tooltip;
