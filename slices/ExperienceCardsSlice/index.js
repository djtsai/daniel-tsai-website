import React from 'react'
import { RichText } from 'prismic-reactjs'
import { Card } from 'react-bootstrap'

const ExperienceCardsSlice = ({ slice }) => (
  <section className="experience-cards-section">
    <div className="experience-cards-content container">
      {slice.items.map((item) => (
        <div key={item.dateString} className="experience-card">
          <Card>
            <Card.Header>
              <RichText render={item.companyName} />
            </Card.Header>
            <Card.Body>
              {RichText.asText(item.jobTitle) && (
                <Card.Title>
                  {RichText.asText(item.jobTitle)} ({item.dateString})
                </Card.Title>
              )}
              <Card.Text>
                <RichText render={item.description} />
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

export default ExperienceCardsSlice
