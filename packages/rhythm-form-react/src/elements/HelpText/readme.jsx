import React from 'react';
import Example from 'rhythm-dev-server/lib/Example';
import PropTable from '../../../docs/PropTable';

import HelpText from './HelpText';

const componentInfo = require('react-docgen').parse(require('!raw-loader!./HelpText'));

const HelpTextDocs = () => (
	<div>
		<h1 className="rh">HelpText</h1>

		<p>{componentInfo.description}</p>

		<p className="rh"><code>import HelpText from 'rhythm-form-react/lib/elements/HelpText';</code></p>

		<h2 className="rh">Props reference</h2>

		<PropTable componentInfo={componentInfo} />

		<h2 className="rh">Examples</h2>

		<Example isJsx>
			<HelpText>This is the help text</HelpText>
		</Example>
	</div>
);

export default HelpTextDocs;
