import React from 'react';
import Example from 'rhythm-dev-server/lib/Example';
import PropTable from '../../../docs/PropTable';

import Select from './Select';

const componentInfo = require('react-docgen').parse(require('!raw-loader!./Select'));

const SelectDocs = () => (
	<div>
		<h1 className="rh">Select</h1>

		<p>{componentInfo.description}</p>

		<p className="rh"><code>import Select from 'rhythm-form-react/lib/controls/Select';</code></p>

		<h2 className="rh">Props reference</h2>

		<PropTable componentInfo={componentInfo} />

		<h2 className="rh">Examples</h2>

		<Example isJsx>
			<Select
				name="select1"
				label="Select with options prop"
				options={[
					{ label: 'Option 1', value: '1' },
					{ label: 'Option 2', value: '2' },
					{ label: 'Option 3', value: '3' },
				]}
			/>
		</Example>

		<Example isJsx>
			<Select name="select2" label="Select with children" required>
				<option value="1">Option 1</option>
				<option value="2">Option 2</option>
				<option value="3">Option 3</option>
			</Select>
		</Example>

		<Example isJsx>
			<Select name="select2a" label="Select with children and optgroup">
				<optgroup label="Group 1">
					<option value="1a">Option A</option>
					<option value="2a">Option B</option>
					<option value="3a">Option C</option>
				</optgroup>
				<optgroup label="Group 2">
					<option value="1b">Option A</option>
					<option value="2b">Option B</option>
					<option value="3b">Option C</option>
				</optgroup>
			</Select>
		</Example>

		<Example isJsx>
			<Select
				name="select3"
				label="Select with error"
				options={[
					{ label: 'Option 1', value: '1' },
					{ label: 'Option 2', value: '2' },
					{ label: 'Option 3', value: '3' },
				]}
				error="There was an error"
			/>
		</Example>

		<Example isJsx>
			<Select
				name="select4"
				label="Select with pre text"
				options={[
					{ label: 'Option 1', value: '1' },
					{ label: 'Option 2', value: '2' },
					{ label: 'Option 3', value: '3' },
				]}
				preAddon="$"
			/>
		</Example>

		<Example isJsx>
			<Select
				name="select5"
				label="Select with post text"
				options={[
					{ label: 'Option 1', value: '1' },
					{ label: 'Option 2', value: '2' },
					{ label: 'Option 3', value: '3' },
				]}
				postAddon="%"
			/>
		</Example>

		<Example isJsx>
			<Select
				name="select6"
				label="Select with pre and post text"
				options={[
					{ label: 'Option 1', value: '1' },
					{ label: 'Option 2', value: '2' },
					{ label: 'Option 3', value: '3' },
				]}
				preAddon="$"
				postAddon="per month"
			/>
		</Example>

		<Example isJsx>
			<Select
				name="select7"
				label="Select with width"
				options={[
					{ label: 'Option 1', value: '1' },
					{ label: 'Option 2', value: '2' },
					{ label: 'Option 3', value: '3' },
				]}
				width="m"
			/>
		</Example>

		<Example isJsx>
			<Select
				name="select7"
				label="Inlined select"
				options={[
					{ label: 'Option 1', value: '1' },
					{ label: 'Option 2', value: '2' },
					{ label: 'Option 3', value: '3' },
				]}
				isInline
			/>
		</Example>
	</div>
);

export default SelectDocs;
