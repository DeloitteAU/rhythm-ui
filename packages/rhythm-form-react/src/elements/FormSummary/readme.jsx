import React from 'react';
import Example from 'rhythm-dev-server/lib/Example';
import PropTable from '../../../docs/PropTable';

import FormSummary from './FormSummary';

const componentInfo = require('react-docgen').parse(require('!raw-loader!./FormSummary'));

const FormSummaryDocs = () => (
	<div>
		<h1 className="rh">FormSummary</h1>

		<p>{componentInfo.description}</p>

		<p className="rh"><code>import FormSummary from 'rhythm-form-react/lib/elements/FormSummary';</code></p>

		<h2 className="rh">Props reference</h2>

		<PropTable componentInfo={componentInfo} />

		<h2 className="rh">Examples</h2>

		<Example isJsx>
			<FormSummary
				title="Error title"
				status="error"
				items={[
					{ key: 0, label: 'First name', text: 'First name cannot be Bob', path: '#first' },
					{ key: 1, label: 'Last name', text: 'Last name is required', path: '#last' },
				]}
			>
				<p>Description of the error.</p>
			</FormSummary>
		</Example>

		<Example isJsx>
			<FormSummary title="This is a title" />
		</Example>

		<Example isJsx>
			<FormSummary>
				<p>Whatever content you want here.</p>
				<p>More content.</p>
			</FormSummary>
		</Example>

		<Example isJsx>
			<FormSummary title="This is a title" status="error">Test</FormSummary>
		</Example>

		<Example isJsx>
			<FormSummary title="This is a title" status="info">Test</FormSummary>
		</Example>

		<Example isJsx>
			<FormSummary title="This is a title" status="warning">Test</FormSummary>
		</Example>

		<Example isJsx>
			<FormSummary title="This is a title" status="success">Test</FormSummary>
		</Example>
	</div>
);

export default FormSummaryDocs;
