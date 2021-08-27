import React from "react";
import { RichText, Link } from 'prismic-reactjs';
import { Nav, Navbar } from "react-bootstrap";

const Header = ({ menu = [] }) => (
  <Navbar fixed="top" bg="dark" variant="dark" expand="md">
    <Navbar.Brand href="/">{RichText.asText(menu.data.title)}</Navbar.Brand>
    <Navbar.Toggle aria-controls="main-navbar-nav"/>
    <Navbar.Collapse id="main-navbar-nav">
      <Nav className="me-auto">
        {menu.data.menu_links.map((menu_link) => (
          <Nav.Link key={menu_link.link} href={Link.url(menu_link.link)}>
            {RichText.asText(menu_link.label)}
          </Nav.Link>
        ))}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
