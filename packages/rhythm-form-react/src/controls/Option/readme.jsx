import React from 'react';
import Example from 'rhythm-dev-server/lib/Example';
import PropTable from '../../../docs/PropTable';

import Option from './Option';

const componentInfo = require('react-docgen').parse(require('!raw-loader!./Option'));

const OptionDocs = () => (
	<div>
		<h1 className="rh">Option</h1>

		<p>{componentInfo.description}</p>

		<p className="rh"><code>import Option from 'rhythm-form-react/lib/controls/Option';</code></p>

		<h2 className="rh">Props reference</h2>

		<PropTable componentInfo={componentInfo} />

		<h2 className="rh">Examples</h2>

		<Example isJsx>
			<Option
				id="check1"
				name="check1"
				label="This is a label"
				type="checkbox"
			/>
		</Example>

		<Example isJsx>
			<Option
				id="radio1"
				name="radio1"
				label="This is a label"
				type="radio"
			/>
		</Example>
	</div>
);

export default OptionDocs;
