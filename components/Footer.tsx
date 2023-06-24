import React from 'react'
import * as prismic from '@prismicio/client'
import { Nav } from 'react-bootstrap'
import type { FooterDocument } from '@/prismicio-types'

const Footer = ({ footer }: { footer: FooterDocument }) => (
  <section className="footer-section">
    <div className="footer-nav">
      <Nav className="justify-content-center">
        {footer.data.navLinks.map((navLink) => (
          <Nav.Item key={prismic.asText(navLink.label)}>
            <Nav.Link href={String(prismic.asLink(navLink.link))}>{prismic.asText(navLink.label)}</Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
    </div>
    <div className="footer-text">
      {footer.data.texts.map((text) => <p key={prismic.asText(text.text)}>{prismic.asText(text.text)}</p>)}
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
