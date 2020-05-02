'use strict'

module.exports = {
  siteMetadata: {
    title: 'とるめんろぐ',
    description: 'とるめんのミニブログ',
    keywords: 'something',
    siteUrl: 'https://ecstatic-bardeen-39a0f9.netlify.app',
    author: {
      name: 'QWYNG',
      url: 'https://twitter.com/qwyngg',
      email: 'ikusawasi@gmail.com'
    }
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1rem'
            }
          },
          {
            resolve: `gatsby-remark-twitter-cards`,
            options: {
              title: 'tallman', // website title
              separator: '|', // default
              author: 'QWYNG',
              background: '#8a4baf',
              fontColor: '#ffffff',
              titleFontSize: 96,
              subtitleFontSize: 60,
              fontStyle: 'monospace',
            }
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1140,
              quality: 90,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://gatsby-starter-typescript-plus.netlify.com'
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-110687917-2'
      }
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet'
  ]
}
