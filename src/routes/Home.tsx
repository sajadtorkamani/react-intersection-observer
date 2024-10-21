import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { Helmet } from 'react-helmet'

import PageTitle from '../components/PageTitle'
import LoremIpsum from '../components/LoremIpsum'

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Detect element visibility</title>
      </Helmet>

      <Container>
        <PageTitle>Detect element visibility</PageTitle>

        <LoremIpsum count={12} />

        <div className="my-3">

        <Button size="lg">This is a button</Button>

        </div>

        <LoremIpsum count={12} />
      </Container>
    </>
  )
}

export default Home
