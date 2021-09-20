import React from 'react'
import { RichText } from 'prismic-reactjs'
import { Card, CardGroup } from "react-bootstrap";

const CardSlice = ({ slice }) => (
  <section className="card-section">
    <div className="card-content container">
      <CardGroup>
        {slice.items.map((item, i) => (
          <Card key={item.cardTitle}>
            <Card.Header>
              <RichText render={item.cardTitle} />
            </Card.Header>
            <Card.Body>
              <Card.Text>
                <RichText render={item.cardDescription} />
              </Card.Text>
            </Card.Body>
          </Card>
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

export default CardSlice
