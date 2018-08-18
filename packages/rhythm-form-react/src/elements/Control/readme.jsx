import React from 'react';
import Example from 'rhythm-dev-server/lib/Example';
import PropTable from '../../../docs/PropTable';

import Control from './Control';

const componentInfo = require('react-docgen').parse(require('!raw-loader!./Control'));

const ControlDocs = () => (
	<div>
		<h1 className="rh">Control</h1>

		<p>{componentInfo.description}</p>

		<p className="rh"><code>import Control from 'rhythm-form-react/lib/elements/Control';</code></p>

		<h2 className="rh">Props reference</h2>

		<PropTable componentInfo={componentInfo} />

		<h2 className="rh">Examples</h2>

		<Example isJsx>
			<Control
				label="Email"
				error="This is an error"
				helpText="This is the help text"
			>
				<div>Hello!</div>
			</Control>
		</Example>
	</div>
);

export default ControlDocs;
