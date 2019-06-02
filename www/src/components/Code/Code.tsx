import Highlight, { defaultProps } from 'prism-react-renderer'
import React from 'react'
import nightOwl from 'prism-react-renderer/themes/nightOwl';

import './Code.css';

export const Code = ({ codeString, language, preview, ...props }: any) => (
  <>
    {preview && <div className="code-preview" dangerouslySetInnerHTML={{__html: codeString}} />}
    <Highlight
      {...defaultProps}
      code={codeString}
      language={language}
      theme={nightOwl}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  </>
)

export default Code