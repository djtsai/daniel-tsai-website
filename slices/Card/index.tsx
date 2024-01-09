'use client'
import { asText, Content } from '@prismicio/client'
import { PrismicRichText, SliceComponentProps } from '@prismicio/react'
import { Card as BootstrapCard, CardGroup } from 'react-bootstrap'

/**
 * Props for `Card`.
 */
export type CardProps = SliceComponentProps<Content.CardSlice>

/**
 * Component for "Card" Slices.
 */
const Card = ({ slice }: CardProps): JSX.Element => {
  return (
    <section
      className="card-section"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="card-content container">
        <CardGroup>
          {slice.items.map((item, i) => (
            <BootstrapCard key={asText(item.card_title)}>
              <BootstrapCard.Header>
                <PrismicRichText field={item.card_title} />
              </BootstrapCard.Header>
              <BootstrapCard.Body>
                <div>
                  <PrismicRichText field={item.card_description} />
                </div>
              </BootstrapCard.Body>
            </BootstrapCard>
          ))}
        </CardGroup>
      </div>
      <style jsx>{`
        .card-section {
          margin: 100px 0;
        }
      `}</style>
    </section>
  )
}

export default Card
