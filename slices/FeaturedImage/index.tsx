import { Content } from '@prismicio/client'
import { PrismicImage, PrismicLink, PrismicRichText, SliceComponentProps } from '@prismicio/react'
import { Col, Container, Row } from 'react-bootstrap'

/**
 * Props for `FeaturedImage`.
 */
export type FeaturedImageProps = SliceComponentProps<Content.FeaturedImageSlice>

/**
 * Component for "FeaturedImage" Slices.
 */
const FeaturedImage = ({ slice }: FeaturedImageProps): JSX.Element => {
  return (
    <section
      className="featured-image-section"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="featured-image-content container">
        <Container fluid>
          <Row>
            <Col md={6}>
              <div className="featured-image">
                <PrismicImage field={slice.primary.featuredImage} />
              </div>
            </Col>
            <Col md={6}>
              <div className="featured-image-text">
                <PrismicRichText field={slice.primary.title} />
                <PrismicRichText field={slice.primary.headline} />
                <p>
                  <PrismicLink field={slice.primary.link}>
                    <span>{slice.primary.linkLabel}</span>
                  </PrismicLink>
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
}

export default FeaturedImage
