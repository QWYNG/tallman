import React from "react"
import { graphql, StaticQuery } from 'gatsby'
import { Link } from 'gatsby'

interface ArticlesProps {
  allMarkdownRemark: {
    totalCount: number
    nodes: Article[]
  }
}

interface Article {
  fields: {
    slug: string
  }
  frontmatter: {
    title: string
  }
  excerpt: string
}

const Articles: React.FC = () => (
  <StaticQuery
    query={graphql`
      query ArticlesQuery {
        allMarkdownRemark {
          totalCount
          nodes {
            fields {
              slug
            }
            frontmatter {
              title
            }
            excerpt
          }
        }
      }
    `}

  render={(data: ArticlesProps) => (
    <div>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      {data.allMarkdownRemark.nodes.map(article => (
          <div key={article.fields.slug}>
            <h3>
              <Link to={`/${article.fields.slug}`}>
                {article.frontmatter.title}
              </Link>
            </h3>
            <p>{article.excerpt}</p>
          </div>
        ))}
    </div>
  )}
  />
)

export default Articles
