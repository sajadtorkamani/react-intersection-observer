import React from 'react'
import { Container } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'

import { APP_NAME, ROUTES } from '../lib/constants'

const Header: React.FC = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
      <Container>
        <Link to={ROUTES.home} className="navbar-brand">
          {APP_NAME}
        </Link>
      </Container>
    </Navbar>
  )
}

export default Header
