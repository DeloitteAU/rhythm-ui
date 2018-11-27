import React from 'react';
import Example from 'rhythm-dev-server/lib/Example';
import PropTable from '../../../docs/PropTable';

import TextAreaWithCounter from './TextAreaWithCounter';

const componentInfo = require('react-docgen').parse(require('!raw-loader!./TextAreaWithCounter'));

const TextAreaDocs = () => (
	<div>
		<h1 className="rh">TextArea</h1>

		<p>{componentInfo.description}</p>

		<p className="rh"><code>import TextArea from 'rhythm-form-react/lib/controls/TextAreaWithCounter';</code></p>

		<h2 className="rh">Props reference</h2>

		<PropTable componentInfo={componentInfo} />

		<h2 className="rh">Examples</h2>

		<Example isJsx>
			<TextAreaWithCounter
				name="textarea1"
				label="This is a TextArea"
				helpText="This is help text"
				max={500}
			/>
		</Example>

	</div>
);

export default TextAreaDocs;
