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
  slug: string
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
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:title', content: site.siteMetadata.title },
            { name: 'og:image', content: `${site.siteMetadata.siteUrl}${props.slug}twitter-card.jpg` },
            { name: 'twitter:image', content: `${site.siteMetadata.siteUrl}${props.slug}twitter-card.jpg` }
          ]}
        />
        <Header title={site.siteMetadata.title} />
        <LayoutMain>{props.children}</LayoutMain>
      </LayoutRoot>
    )}
  />
)

export default ArticleLayout
