import React from "react"
import { graphql, StaticQuery } from 'gatsby'

interface ArticlesProps {
  allMarkdownRemark: {
    totalCount: number
    nodes: Article[]
  }
}

interface Article {
  id: number
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
            id
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
          <div key={article.id}>
            <h3>
              {article.frontmatter.title}{" "}
            </h3>
            <p>{article.excerpt}</p>
          </div>
        ))}
    </div>
  )}
  />
)

export default Articles
