import * as React from 'react'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import Articles from '../components/Articles'

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <Articles/>
      </Container>
    </Page>
  </IndexLayout>
)

export default IndexPage
