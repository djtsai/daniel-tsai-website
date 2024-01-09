'use client'
import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'
import { Chrono } from 'react-chrono'

/**
 * Props for `Timeline`.
 */
export type TimelineProps = SliceComponentProps<Content.TimelineSlice>

/**
 * Component for "Timeline" Slices.
 */
const Timeline = ({ slice }: TimelineProps): JSX.Element => {
  const items = slice.items.map((item) => ({
    title: item.date_string,
    cardTitle: item.title,
    cardSubtitle: item.subtitle,
    cardDetailedText: item.description
  }))

  return (
    <section
      className="timeline-section"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
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

export default Timeline
