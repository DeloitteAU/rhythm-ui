import Highlight, { defaultProps } from 'prism-react-renderer'
import React from 'react'

import theme from 'prism-react-renderer/themes/nightOwl'

// const Token = styled(Typography)`
//   font-family: Consolas, monaco, monospace;
// `

export const Code = ({ codeString, language, ...props }: any) => (
  <Highlight {...defaultProps} code={codeString} language={language} theme={theme}>
    {({
      className, tokens, getLineProps, getTokenProps
    }: any) => (
      <div className="gatsby-highlight">
        <pre className={className}>
          {tokens.map((line: any, i: number) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token: any, key: number) => (
                <div {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      </div>
    )}
  </Highlight>
)

export default Code