import React from 'react';
import PropTypes from 'prop-types';
import TextArea from '../TextArea';
import CharacterCounter from '../../components/CharacterCounter';

/**
 * A textarea component.
 */
class TextAreaWithCounter extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			counterValue: this.props.max,
		};

		this._handleChange = this._handleChange.bind(this);
	};

	_handleChange(event) {
		if (!!this.props.max && event.target.value.length >= 0)	{
			this.setState({counterValue: this.props.max - event.target.value.length});
		}

		this.props.onChange(event);
	}

	render() {
		const {counterPrefix, counterA11yPrefix, counterSuffix, counterA11ySuffix, ...otherProps} = this.props;
		return (
			<div className="text-area-with-counter">
				<TextArea
					{...otherProps}
					onChange={this._handleChange}
					footer={
						<CharacterCounter
							value={this.state.counterValue}
							prefix={counterPrefix}
							a11yPrefix={counterA11yPrefix}
							suffix={counterSuffix}
							a11ySuffix={counterA11ySuffix}
						/>
					}
				/>
			</div>
		);
	}
}


TextAreaWithCounter.propTypes = {
	max: PropTypes.number.isRequired,
	onChange: PropTypes.func.isRequired,
	counterPrefix: PropTypes.string,
	counterA11yPrefix: PropTypes.string,
	counterSuffix: PropTypes.string,
	counterA11ySuffix: PropTypes.string,
};

TextAreaWithCounter.defaultProps = {
	counterPrefix: null,
	counterA11yPrefix: null,
	counterSuffix: null,
	counterA11ySuffix: null,
};

export default TextAreaWithCounter;
