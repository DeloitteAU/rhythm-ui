import Highlight, {defaultProps, Language} from 'prism-react-renderer'
import React from 'react'
import nightOwl from 'prism-react-renderer/themes/nightOwl';
import {codePreviewStyles, codeSnippetStyles, tokenLine} from './Code.css';

interface ICode {
	codeString: string,
	language: Language,
	preview: boolean
}

export const Code = ({codeString, language, preview, ...props}: ICode) => (
	<>
		{preview && <div css={codePreviewStyles} dangerouslySetInnerHTML={{__html: codeString}} />}
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
	</>
)
export default Code