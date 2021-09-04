import React from 'react'
import { Link, RichText } from 'prismic-reactjs'
import { Col, Container, Row } from 'react-bootstrap'

const FeaturedImage = ({ slice }) => (
  <section className="featured-image-section">
    <div className="featured-image-content container">
      <Container fluid>
        <Row>
          <Col md={6}>
            <div className="featured-image">
              <img src={slice.primary.featuredImage.url} alt={slice.primary.featuredImage.alt} />
            </div>
          </Col>
          <Col md={6}>
            <div className="featured-image-text">
              <RichText render={slice.primary.title} />
              <RichText render={slice.primary.headline} />
              <p>
                <a href={Link.url(slice.primary.link)}>
                  <span>{slice.primary.linkLabel}</span>
                </a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    <style jsx>{`
      .featured-image-section {
        margin: 100px 0;
      }
      .featured-image {
        margin: 20px 0;
        text-align: center;
      }
      .featured-image-text {
        margin: 20px 0;
      }
    `}</style>
  </section>
)

export default FeaturedImage
