import React from 'react';
import Example from 'rhythm-dev-server/lib/Example';
import PropTable from '../../../docs/PropTable';

import InlineStatus from './InlineStatus';

const componentInfo = require('react-docgen').parse(require('!raw-loader!./InlineStatus'));

const InlineStatusDocs = () => (
	<div>
		<h1 className="rh">InlineStatus</h1>

		<p>{componentInfo.description}</p>

		<p className="rh"><code>import InlineStatus from 'rhythm-form-react/lib/elements/InlineStatus';</code></p>

		<h2 className="rh">Props reference</h2>

		<PropTable componentInfo={componentInfo} />

		<h2 className="rh">Examples</h2>

		<Example isJsx>
			<InlineStatus status="error">This field is required</InlineStatus>
		</Example>

		<Example isJsx>
			<InlineStatus status="warning">Warning message</InlineStatus>
		</Example>

		<Example isJsx>
			<InlineStatus status="info">Information</InlineStatus>
		</Example>

		<Example isJsx>
			<InlineStatus status="success">You did good</InlineStatus>
		</Example>
	</div>
);

export default InlineStatusDocs;
