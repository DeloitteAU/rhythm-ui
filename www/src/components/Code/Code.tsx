
import React from 'react';
import Highlight from './Highlight';
import * as styles from './Code.css';

interface ICodeProps {
	codeString: string,
	language: string,
	preview: boolean
}

export const Code = ({codeString, language, preview, ...props}: ICodeProps) => (
	<>
		{preview && (
			<div css={styles.fakeBrowserStyles}>
				<div css={styles.fakeBrowswerBarStyles}>
					<span />
					<span />
					<span />
				</div>
				<div css={styles.codePreviewStyles} dangerouslySetInnerHTML={{__html: codeString}} />
				<>
					<div css={styles.codeTabs}>
						<span>Html</span>
						<a href="https://rui-react-545559.netlify.com/" target="_blank">React</a>
						<a href="https://rui-vue-545559.netlify.com" target="_blank">Vue</a>
					</div>
					<Highlight codeString={codeString} language={language} />
				</>
			</div>
		)}
		{!preview && <Highlight codeString={codeString} language={language} />}
	</>
);
export default Code;
