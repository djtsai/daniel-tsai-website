import React from 'react'
import * as prismic from '@prismicio/client'
import { PrismicImage } from '@prismicio/react'
import { Nav, Navbar } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin'
import type { MenuDocument } from '@/prismicio-types'

const Header = ({ menu }: { menu: MenuDocument }) => (
  <Navbar fixed="top" bg="dark" variant="dark" expand="md">
    <Navbar.Brand href="/">
      {menu.data.profileImage.url ? (
        <PrismicImage className="profile-image" field={menu.data.profileImage} width="32" />
      ) : (
        prismic.asText(menu.data.title)
      )}
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="main-navbar-nav" />
    <Navbar.Collapse id="main-navbar-nav">
      <Nav className="me-auto">
        {menu.data.menu_links.map((menu_link) => (
          <Nav.Link key={prismic.asText(menu_link.label)} href={String(prismic.asLink(menu_link.link))}>
            {prismic.asText(menu_link.label)}
          </Nav.Link>
        ))}
      </Nav>
      <Nav>
        {menu.data.githubLink && (
          <Nav.Link href={String(prismic.asLink(menu.data.githubLink))}>
            <FontAwesomeIcon icon={faGithub} /> GitHub
          </Nav.Link>
        )}
        {menu.data.linkedInLink && (
          <Nav.Link href={String(prismic.asLink(menu.data.linkedInLink))}>
            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
          </Nav.Link>
        )}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
