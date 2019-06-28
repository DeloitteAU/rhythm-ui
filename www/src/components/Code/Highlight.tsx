import React from 'react';
import Highlight, {defaultProps} from 'prism-react-renderer';
import nightOwl from 'prism-react-renderer/themes/nightOwl';

import {codeSnippetStyles, tokenLine} from './Highlight.css';

const test = 'fdsafds0';

const CodeHighlight = ({codeString, language}) => {
	return (
		<Highlight
			{...defaultProps}
			code={codeString}
			language={language}
			theme={nightOwl}
		>
			{({className, style, tokens, getLineProps, getTokenProps}) => (
				<pre className={className} css={[codeSnippetStyles, style]}>
					{tokens.map((line, i) => (
						<div {...getLineProps({line, key: i})} css={tokenLine}>
							{line.map((token, key) => (
								<span {...getTokenProps({token, key})} />
							))}
						</div>
					))}
				</pre>
			)
			}
		</Highlight>
	);
};

export default CodeHighlight;
