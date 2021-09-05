import React from 'react'
import { Link, RichText } from "prismic-reactjs";
import { Nav } from "react-bootstrap";

const Footer = ({ footer = {} }) => (
  <section className="footer-section">
    <div className="footer-nav">
      <Nav className="justify-content-center">
        {footer.data.navLinks.map((navLink) => (
          <Nav.Item key={RichText.asText(navLink.label)}>
            <Nav.Link href={Link.url(navLink.link)}>{RichText.asText(navLink.label)}</Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
    </div>
    <div className="footer-text">
      {footer.data.texts.map((text) => <p key={RichText.asText(text.text)}>{RichText.asText(text.text)}</p>)}
    </div>
    <style jsx>{`
      .footer-section {
        background-color: black;
      }
      .footer-nav {
        padding: 50px 0;
      }
      .footer-text {
        text-align: center;
      }
      .footer-text p {
        padding: 20px 0;
        margin-bottom: 0;
      }
    `}</style>
  </section>
)

export default Footer
