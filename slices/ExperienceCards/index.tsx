import { asText, Content } from '@prismicio/client'
import { PrismicRichText, SliceComponentProps } from '@prismicio/react'
import { Card } from 'react-bootstrap'

/**
 * Props for `ExperienceCards`.
 */
export type ExperienceCardsProps = SliceComponentProps<Content.ExperienceCardsSlice>

/**
 * Component for "ExperienceCards" Slices.
 */
const ExperienceCards = ({ slice }: ExperienceCardsProps): JSX.Element => {
  return (
    <section
      className="experience-cards-section"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="experience-cards-content container">
        {slice.items.map((item) => (
            <div key={item.date_string} className="experience-card">
              <Card>
                <Card.Header>
                  <PrismicRichText field={item.company_name} />
                </Card.Header>
                <Card.Body>
                  {asText(item.job_title) && (
                      <Card.Title>
                        {asText(item.job_title)} ({item.date_string})
                      </Card.Title>
                  )}
                  <Card.Text>
                    <PrismicRichText field={item.description} />
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
        ))}
      </div>
      <style jsx>{`
        .experience-cards-section {
          margin: 100px 0;
        }
        .experience-card {
          margin: 20px 0;
        }
      `}</style>
    </section>
  )
}

export default ExperienceCards
