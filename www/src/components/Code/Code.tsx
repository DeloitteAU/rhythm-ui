import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import React from 'react'
import { css } from '@emotion/core';
import nightOwl from 'prism-react-renderer/themes/nightOwl';

interface ICode {
	codeString: string,
	language: Language,
	preview: boolean
}

const codePreviewStyles = css`
	padding: 16px;
	border: 1px solid #CCC;
	border-bottom: 0 none;
	
	header,
	footer,
	main,
	nav,
	aside {
		border: 1px solid #555;
		background: #F5F5F5;
		padding: 15px;
		height: auto;
		width: auto;
		border-radius: 2px;
		margin: 1px;
	}
`
const codeSnippetStyles = css`
	code[class*="language-"],
	pre[class*="language-"] {
		white-space: nowrap;
		overflow: scroll;
	}
`
const tokenLine = css`
	white-space: pre;
`

export const Code = ({ codeString, language, preview, ...props }: ICode) => (
	<>
		{preview && <div css={codePreviewStyles} dangerouslySetInnerHTML={{ __html: codeString }} />}
		<Highlight
			{...defaultProps}
			code={codeString}
			language={language}
			theme={nightOwl}
		>
			{({ className, style, tokens, getLineProps, getTokenProps }) => (
				<pre className={className} css={[codeSnippetStyles, style]}>
					{tokens.map((line, i) => (
						<div {...getLineProps({ line, key: i })} css={tokenLine}>
							{line.map((token, key) => (
								<span {...getTokenProps({ token, key })} />
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