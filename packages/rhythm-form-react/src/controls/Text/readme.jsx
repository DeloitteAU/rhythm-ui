import React from 'react';
import Example from 'rhythm-dev-server/lib/Example';
import PropTable from '../../../docs/PropTable';

import Text from './Text';

const componentInfo = require('react-docgen').parse(require('!raw-loader!./Text'));

const TextDocs = () => (
	<div>
		<h1 className="rh">Text</h1>

		<p className="rh">{componentInfo.description}</p>

		<p className="rh"><code>import Text from 'rhythm-form-react/lib/controls/Text';</code></p>

		<h2 className="rh">Props reference</h2>

		<p className="rh">Any extra props will be passed directly to the <code>&lt;input /&gt;</code> element.</p>

		<p className="rh">This gives you full control over how your app uses the component, and you can essential swap this out for any vanilla <code>&lt;input /&gt;</code> you already in your project.</p>

		<PropTable componentInfo={componentInfo} />

		<h2 className="rh">Examples</h2>

		<Example isJsx>
			<Text
				name="test1"
				label="Email"
				placeholder="example@example.com"
				error="This field is required"
				width="xxs"
				required
			/>
		</Example>

		<Example isJsx>
			<Text
				name="test2"
				label="Tooltip"
				placeholder="example@example.com"
				error="This field is required"
				tooltip="This is a tooltip"
				width="s"
				required
			/>
		</Example>

		<Example isJsx>
			<Text
				name="test3"
				label="Hidden label"
				hideLabel
				placeholder="example@example.com"
				width="l"
			/>
		</Example>

		<Example isJsx>
			<Text
				label="Pre text"
				preAddon="@"
				error="This is an error"
				helpText="This is the help text"
				width="m"
			/>
		</Example>

		<Example isJsx>
			<Text
				label="Pre text"
				postAddon="%"
			/>
		</Example>

		<Example isJsx>
			<Text
				label="Pre + post text"
				preAddon="$"
				postAddon="per month"
				labelProps={{
					helpText: 'This is some help text below the label',
				}}
			/>
		</Example>

		<Example isJsx>
			<Text
				label="Help text"
				helpText="This is the help text"
			/>
		</Example>

		<Example isJsx>
			<Text
				isInline
				label="Inline label"
				placeholder="example@example.com"
			/>
		</Example>

		<Example isJsx>
			<Text
				isInline
				label="Long text inside an inline label and how weird it looks when wrapped"
				placeholder="example@example.com"
			/>
		</Example>

		<Example isJsx>
			<Text
				label="Disabled"
				disabled
			/>
		</Example>

		<Example isJsx>
			<Text
				name="success"
				label="Yay"
				status="success"
				statusMessage="You did it!"
				required
			/>
		</Example>
	</div>
);

export default TextDocs;
