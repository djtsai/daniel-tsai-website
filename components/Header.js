import React from "react";
import { RichText, Link } from 'prismic-reactjs';
import { Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";

const Header = ({ menu = [] }) => (
  <Navbar fixed="top" bg="dark" variant="dark" expand="md">
    <Navbar.Brand href="/">
      {menu.data.profileImage.url ? (
        <img className="profile-image" src={menu.data.profileImage.url} alt={menu.data.profileImage.alt} width="32" />
      ) : (
        RichText.asText(menu.data.title)
      )}
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="main-navbar-nav" />
    <Navbar.Collapse id="main-navbar-nav">
      <Nav className="me-auto">
        {menu.data.menu_links.map((menu_link) => (
          <Nav.Link key={menu_link.link} href={Link.url(menu_link.link)}>
            {RichText.asText(menu_link.label)}
          </Nav.Link>
        ))}
      </Nav>
      <Nav>
        {menu.data.githubLink && (
          <Nav.Link href={Link.url(menu.data.githubLink)}>
            <FontAwesomeIcon icon={faGithub} /> GitHub
          </Nav.Link>
        )}
        {menu.data.linkedInLink && (
          <Nav.Link href={Link.url(menu.data.linkedInLink)}>
            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
          </Nav.Link>
        )}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
