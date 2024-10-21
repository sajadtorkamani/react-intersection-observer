import { useIntersectionObserver } from '@uidotdev/usehooks'
import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { Helmet } from 'react-helmet'

import LoremIpsum from '../components/LoremIpsum'
import PageTitle from '../components/PageTitle'

const Home: React.FC = () => {
  const [ref, entry] = useIntersectionObserver()

  return (
    <>
      <Helmet>
        <title>Detect element visibility</title>
      </Helmet>

      <Container>
        <div
          className="position-fixed top-0 end-0 bg-danger text-white px-4 py-3"
          style={{ fontSize: '30px' }}
        >
          Is button visible: {entry?.isIntersecting ? 'YES' : 'NO'}
        </div>
        <PageTitle>Detect element visibility</PageTitle>

        <LoremIpsum count={12} />

        <div className="my-3">
          <Button size="lg" ref={ref}>
            This is a button
          </Button>
        </div>

        <LoremIpsum count={12} />
      </Container>
    </>
  )
}

export default Home
