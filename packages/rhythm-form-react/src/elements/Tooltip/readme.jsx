import React from 'react';
import Example from 'rhythm-dev-server/lib/Example';
import PropTable from '../../../docs/PropTable';

import Tooltip from './Tooltip';

const componentInfo = require('react-docgen').parse(require('!raw-loader!./Tooltip'));

const TooltipDocs = () => (
	<div>
		<h1 className="rh">Tooltip</h1>

		<p>{componentInfo.description}</p>

		<p className="rh"><code>import Tooltip from 'rhythm-form-react/lib/elements/Tooltip';</code></p>

		<h2 className="rh">Props reference</h2>

		<PropTable componentInfo={componentInfo} />

		<h2 className="rh">Examples</h2>

		<Example isJsx>
			<Tooltip id="tooltip1" >
				This is the tooltip text
			</Tooltip>
		</Example>

		<Example isJsx>
			<Tooltip id="tooltip2" label="Custom label" eventsEnabled>
				<p>Do whatever you want inside</p>
				<p>Here's some markup</p>
			</Tooltip>
		</Example>

		<Example isJsx>
			<Tooltip id="tooltip3" label="No hover" openOnHover={false}>
				<p>Do whatever you want inside</p>
				<p>Here's some markup</p>
			</Tooltip>
		</Example>
	</div>
);

export default TooltipDocs;
