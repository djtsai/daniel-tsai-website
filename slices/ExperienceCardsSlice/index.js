import React from 'react'
import * as prismic from '@prismicio/client'
import { PrismicRichText } from '@prismicio/react'
import { Card } from 'react-bootstrap'

const ExperienceCardsSlice = ({ slice }) => (
  <section className="experience-cards-section">
    <div className="experience-cards-content container">
      {slice.items.map((item) => (
        <div key={item.dateString} className="experience-card">
          <Card>
            <Card.Header>
              <PrismicRichText field={item.companyName} />
            </Card.Header>
            <Card.Body>
              {prismic.asText(item.jobTitle) && (
                <Card.Title>
                  {prismic.asText(item.jobTitle)} ({item.dateString})
                </Card.Title>
              )}
              <div>
                <PrismicRichText field={item.description} />
              </div>
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

export default ExperienceCardsSlice
