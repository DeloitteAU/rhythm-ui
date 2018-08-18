import React from 'react';
import Example from 'rhythm-dev-server/lib/Example';
import PropTable from '../../../docs/PropTable';

import OptionGroup from './OptionGroup';

const componentInfo = require('react-docgen').parse(require('!raw-loader!./OptionGroup'));

class OptionGroupDocs extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			radioValue: '2',
			checkboxValues: ['2', '3'],
		};
	}

	render() {
		return (
			<div>
				<h1 className="rh">OptionGroup</h1>

				<p>{componentInfo.description}</p>

				<p className="rh"><code>import OptionGroup from 'rhythm-form-react/lib/controls/OptionGroup';</code></p>

				<h2 className="rh">Props reference</h2>

				<PropTable componentInfo={componentInfo} />

				<h2 className="rh">Examples</h2>

				<Example isJsx>
					<OptionGroup
						name="group1"
						label="Checkboxes"
						type="checkbox"
						options={[
							{ id: 'example1', label: 'Example 1', value: '1' },
							{ id: 'example2', label: 'Example 2', value: '2' },
							{ id: 'example3', label: 'Example 3', value: '3' },
						]}
					/>

					<OptionGroup
						name="group2"
						label="Radio buttons"
						type="radio"
						options={[
							{ id: 'example1', label: 'Example 1', value: '1' },
							{ id: 'example2', label: 'Example 2', value: '2' },
							{ id: 'example3', label: 'Example 3', value: '3' },
						]}
					/>
				</Example>

				<Example isJsx>
					<OptionGroup
						name="group3"
						label="Horizontal checkboxes"
						type="checkbox"
						isHorizontal
						options={[
							{ id: 'example1', label: 'Example 1', value: '1' },
							{ id: 'example2', label: 'Example 2', value: '2' },
							{ id: 'example3', label: 'Example 3', value: '3' },
						]}
					/>

					<OptionGroup
						name="group4"
						label="Horizontal radio buttons"
						type="radio"
						isHorizontal
						options={[
							{ id: 'example1', label: 'Example 1', value: '1' },
							{ id: 'example2', label: 'Example 2', value: '2' },
							{ id: 'example3', label: 'Example 3', value: '3' },
						]}
					/>
				</Example>

				<style dangerouslySetInnerHTML={{ __html: `
					.green label {
						background: green;
						color: white;
					}`}}
				/>

				<Example isJsx>
					<OptionGroup
						name="group5"
						label="Extra props passed through to options"
						type="radio"
						isInline
						options={[
							{
								id: 'example1',
								label: 'Example option 1',
								value: '1',
								labelProps: {
									helpText: 'Help text',
								},
							},
							{
								id: 'example2',
								label: 'Example 2',
								value: '2',
								tooltip: 'This is the tooltip',
							},
							{
								id: 'example3',
								label: 'Example 3 with an extra class added',
								value: '3',
								className: 'green',
							},
						]}
					/>
				</Example>

				<Example isJsx>
					<OptionGroup
						name="group6"
						label="Horizontal layout"
						options={[
							{ id: 'example1', label: 'Option 1', value: '1' },
							{ id: 'opt2', label: 'Option 2', value: '2' },
							{ id: 'opt3', label: 'Option three', value: '3' },
							{ id: 'opt4', label: 'This is option four', value: '4' },
							{ id: 'opt5', label: 'Another option', value: '5' },
							{ id: 'opt6', label: 'The final option', value: '6' },

						]}
						isHorizontal
						type="radio"
					/>
				</Example>

				<Example isJsx>
					<OptionGroup
						name="group7"
						label="With error"
						options={[
							{ id: 'opt1', label: 'Option 1', value: '1' },
							{ id: 'opt2', label: 'Option 2', value: '2' },
							{ id: 'opt3', label: 'Option 3', value: '3' },

						]}
						isHorizontal
						type="radio"
						error="Uh oh, this is error text"
					/>
				</Example>



				<Example isJsx>
					<OptionGroup
						name="group8"
						label="Controlled"
						options={[
							{ id: 'opt1', label: 'Option 1', value: '1' },
							{ id: 'opt2', label: 'Option 2', value: '2' },
							{ id: 'opt3', label: 'Option 3', value: '3' },
						]}
						value={this.state.radioValue}
						onChange={value => {
							console.log(value)
							this.setState({
								radioValue: value,
							});
						}}
						isHorizontal
						type="radio"
					/>
				</Example>

				<Example isJsx>
					<OptionGroup
						name="group9"
						label="Controlled"
						options={[
							{ id: 'opt1', label: 'Option 1', value: '1' },
							{ id: 'opt2', label: 'Option 2', value: '2' },
							{ id: 'opt3', label: 'Option 3', value: '3' },
						]}
						value={this.state.checkboxValues}
						onChange={values => {
							this.setState({
								checkboxValues: values,
							});
						}}
						isHorizontal
						type="checkbox"
					/>
				</Example>
			</div>
		);
	}
}

export default OptionGroupDocs;
