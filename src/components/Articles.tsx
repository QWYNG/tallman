import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'

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
    date: string
  }
  excerpt: string
}

const Articles: React.FC = () => (
  <StaticQuery
    query={graphql`
      query ArticlesQuery {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
          totalCount
          nodes {
            fields {
              slug
            }
            frontmatter {
              title
              date
            }
            excerpt
          }
        }
      }
    `}
    render={(data: ArticlesProps) => (
      <div>
        {data.allMarkdownRemark.nodes.map(article => (
          <div key={article.fields.slug}>
            <h4>{article.frontmatter.date}</h4>
            <h3>
              <Link to={`/${article.fields.slug}`}>{article.frontmatter.title}</Link>
            </h3>
            <p>{article.excerpt}</p>
          </div>
        ))}
      </div>
    )}
  />
)

export default Articles
