import React from 'react'
import { Chrono } from 'react-chrono'

const TimelineSlice = ({ slice }) => {
  const items = slice.items.map((item) => ({
    title: item.dateString,
    cardTitle: item.title,
    cardSubtitle: item.subtitle,
    cardDetailedText: item.description
  }))

  return (
    <section className="timeline-section">
      <div className="timeline-content container">
        <Chrono items={items} mode="VERTICAL" useReadMore={false} hideControls={true} />
      </div>
      <style jsx>{`
        .timeline-section {
          margin: 100px 0;
        }
        .timeline-content {
          max-width: 800px;
        }
      `}</style>
    </section>
  )
}

export default TimelineSlice
