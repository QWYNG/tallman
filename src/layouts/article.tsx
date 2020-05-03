import * as React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import 'modern-normalize'
import '../styles/normalize'

import { ReactNode } from 'react'
import Header from '../components/Header'
import LayoutRoot from '../components/LayoutRoot'
import LayoutMain from '../components/LayoutMain'

interface StaticQueryProps {
  site: {
    siteMetadata: {
      title: string
      description: string
      siteUrl: string
      keywords: string
    }
  }
}

interface ArticleLayoutProps {
  title: string
  description: string
  children: ReactNode
}

const ArticleLayout: React.FC<ArticleLayoutProps> = (props: ArticleLayoutProps) => (
  <StaticQuery
    query={graphql`
      query ArticleLayoutQuery {
        site {
          siteMetadata {
            title
            description
            siteUrl
          }
        }
      }
    `}
    render={({ site }: StaticQueryProps) => (
      <LayoutRoot>
        <Helmet
          title={site.siteMetadata.title}
          meta={[
            { name: 'description', content: site.siteMetadata.description },
            { name: 'keywords', content: site.siteMetadata.keywords },
            { name: 'twitter:card', content: 'summary' },
            { name: 'twitter:title', content: props.title },
            { name: 'twitter:description', content: props.description }
          ]}
        />
        <Header title={site.siteMetadata.title} />
        <LayoutMain>{props.children}</LayoutMain>
      </LayoutRoot>
    )}
  />
)

export default ArticleLayout
