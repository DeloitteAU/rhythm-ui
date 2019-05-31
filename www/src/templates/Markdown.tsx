import { MDXProvider } from '@mdx-js/tag';
import { graphql } from 'gatsby';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import PropTypes from 'prop-types';
import React from 'react';
import slug from 'slug';
import { Navigation } from '../components/Navigation';
import { Code } from '../components/Code';

//import Code from '../components/Code'
const preToCodeBlock = (preProps: any) => {
  if (
    // children is MDXTag
    preProps.children
    // MDXTag props
    && preProps.children.props
    // if MDXTag is going to render a <code>
    && preProps.children.props.name === 'code'
  ) {
    const {
      children: codeString,
      props
    } = preProps.children.props

    console.log(codeString);

    return {
      codeString: codeString.trim(),
      language: props.className && props.className.split('-')[1],
      ...props
    }
  }

  return null
}

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}: { data: any }) {
  const { mdx } = data // data.markdownRemark holds our post data
  const {
    fields, frontmatter, headings, code
  } = mdx
  const { body } = code
  const { breadcrumbs, relativeUrlPath } = fields
  const { title: pageTitle } = frontmatter

  const pageHeadings = headings.map((heading: any) => {
    const label = heading.value

    // Make anchors consistent with gatsby-remark-autolink-headers
    const anchor = slug(label, { lower: true })

    const link = `${relativeUrlPath}#${anchor}`

    return {
      label,
      link
    }
  })

  const mdxComponents = {
    pre: (props: any) => {
      const preProps = preToCodeBlock(props)

      console.log('PREPOPS: ====>', preProps);

      if (preProps) {
        return <Code {...preProps} />
      }

      return <pre {...props} />
    },
    code: (props: any) => {
      debugger;
      return <code {...props} />
    },
    h1: (props: any) => {
      return <h1>fdsa

      </h1>
    }
  }

  const components = {
    h1: (props: any) => {
      return <h1>fdsa

      </h1>
    },
  }

  return (
    <rui-layout type="vangogh">
      <header>Header</header>
      <nav><Navigation /></nav>
      <main>
        <rui-grid>
          <div className="s-12" breadcrumbs={breadcrumbs} pageTitle={pageTitle} relativeUrlPath={relativeUrlPath}>
            <MDXProvider components={components}>
              <MDXRenderer>{body}</MDXRenderer>
            </MDXProvider>
          </div>
        </rui-grid>
      </main>
      <aside>{pageHeadings.map(h => <div>{h.title}</div>)}</aside>
    <footer>Footer</footer>
    </rui-layout >
  )
}

Template.propTypes = {
  data: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
}

export const pageQuery = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      id
      headings(depth: h2) {
        depth
        value
      }
      fields {
        breadcrumbs {
          nodeName
          label
          href
        }
        relativeUrlPath
      }
      code {
        body
      }
      frontmatter {
        title
      }
    }
  }
`