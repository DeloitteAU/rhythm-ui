
import React from 'react';
import {LiveProvider, LiveEditor, LiveError, LivePreview} from 'react-live';
import nightOwl from 'prism-react-renderer/themes/nightOwl';
import Highlight from './Highlight';
import CodeTabs from './CodeTabs';
import * as styles from './Code.css';

interface ICodeProps {
	codeString: string,
	language: string,
    preview: boolean,
    live: boolean
}

export const Code = ({codeString, language, preview, live, ...props}: ICodeProps) => (
	<>
		{(preview || live) && (
			<div css={styles.fakeBrowserStyles}>
				<div css={styles.fakeBrowswerBarStyles}>
					<span />
					<span />
					<span />
				</div>
				{live ? (
					<LiveProvider code={codeString} language={language}	theme={nightOwl}>
						<div css={styles.codePreviewStyles}>
							<LivePreview />
						</div>
						<CodeTabs />
						<LiveEditor />
						<LiveError />
						<div css={styles.liveBarStyles}>
							<b>LIVE</b>
						</div>
					</LiveProvider>
				) : (
					<>
						<div css={styles.codePreviewStyles} dangerouslySetInnerHTML={{__html: codeString}} />
						<CodeTabs />
						<Highlight codeString={codeString} language={language} />
					</>
				)}
			</div>
		)}
		{!(preview || live) && <Highlight codeString={codeString} language={language} />}
	</>
);
export default Code;
