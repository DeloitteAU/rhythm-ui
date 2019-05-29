import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

export const Navigation = () => (
  <StaticQuery
    query={graphql`
      query DocsQuery {
        allMdx {
          nodes {
            id
            fields {
              nodeTitle
              relativeUrlPath
            }
          } 
        }
      }
    `}
    render={data => (
		<ul>
		{data.allMdx.nodes.map(node => <li><Link to={node.fields.relativeUrlPath}>{node.fields.relativeUrlPath}</Link></li>)}
	  </ul>
    )}
  />
)

export default Navigation;
