import React from 'react';
import Example from 'rhythm-dev-server/lib/Example';
import PropTable from '../../../docs/PropTable';

import TextArea from './TextArea';

const componentInfo = require('react-docgen').parse(require('!raw-loader!./TextArea'));

const TextAreaDocs = () => (
	<div>
		<h1 className="rh">TextArea</h1>

		<p>{componentInfo.description}</p>

		<p className="rh"><code>import TextArea from 'rhythm-form-react/lib/controls/TextArea';</code></p>

		<h2 className="rh">Props reference</h2>

		<PropTable componentInfo={componentInfo} />

		<h2 className="rh">Examples</h2>

		<Example isJsx>
			<TextArea
				name="textarea1"
				label="This is a TextArea"
				helpText="This is help text"
			/>
		</Example>

		<Example isJsx>
			<TextArea
				name="textarea2"
				label="This is a TextArea"
				helpText="This is help text"
				error="Oh no you've got an error"
			/>
		</Example>

		<Example isJsx>
			<TextArea
				name="textarea3"
				label="This is a TextArea"
				helpText="This is help text"
				tooltip="tips"
				width="m"
			/>
		</Example>
	</div>
);

export default TextAreaDocs;
