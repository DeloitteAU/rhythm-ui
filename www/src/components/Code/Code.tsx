import Highlight, {defaultProps, Language} from 'prism-react-renderer'
import React from 'react'
import nightOwl from 'prism-react-renderer/themes/nightOwl';
import {codePreviewStyles, codeSnippetStyles, tokenLine, fakeBrowserStyles, fakeBrowswerBarStyles, codeTabs} from './Code.css';

interface ICode {
	codeString: string,
	language: Language,
	preview: boolean
}

const CodeHighlight = ({codeString, language}) => {
	return (
		<>
			<div css={codeTabs}>
				<span>Html</span>
				<a href="https://rui-react-545559.netlify.com/" target="_blank">React</a>
			</div>
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
	);
}

export const Code = ({codeString, language, preview, ...props}: ICode) => (
	<>
		{preview && (
			<div css={fakeBrowserStyles}>
				<div css={fakeBrowswerBarStyles}>
					<span />
					<span />
					<span />
				</div>
				<div css={codePreviewStyles} dangerouslySetInnerHTML={{__html: codeString}} />
				<CodeHighlight codeString={codeString} language={language} />
			</div>
		)}
		{!preview && <CodeHighlight codeString={codeString} language={language} />}
	</>
)
export default Code