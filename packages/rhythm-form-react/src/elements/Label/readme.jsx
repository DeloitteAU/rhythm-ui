import React from 'react';
import Example from 'rhythm-dev-server/lib/Example';
import PropTable from '../../../docs/PropTable';

import Label from './Label';

const componentInfo = require('react-docgen').parse(require('!raw-loader!./Label'));

const LabelDocs = () => (
	<div>
		<h1 className="rh">Label</h1>

		<p>{componentInfo.description}</p>

		<p className="rh"><code>import Label from 'rhythm-form-react/lib/elements/Label';</code></p>

		<h2 className="rh">Props reference</h2>

		<p>Any extra props will be passed directly to the outer tag of the label.</p>

		<PropTable componentInfo={componentInfo} />

		<h2 className="rh">Examples</h2>

		<Example isJsx>
			<Label helpText="I'm some help text">I'm the label text</Label>
		</Example>

		<Example isJsx>
			<Label tag="span">I'm secretly a span</Label>
		</Example>

		<Example isJsx>
			<Label>
				<h3>Custom markup inside <a href="#">here's an example link</a>.</h3>
			</Label>
		</Example>

		<Example isJsx>
			<Label data-testing="hjbasdhj" className="active yes" text="Testing props pass through" />
		</Example>

		<Example isJsx>
			<Label hide>
				Hidden
			</Label>
			<p>There's a hidden label above</p>
		</Example>
	</div>
);

export default LabelDocs;
