import React from 'react'
import { PrismicRichText } from '@prismicio/react'

const TextSlice = ({ slice }) => (
  <section className="text-section">
    <PrismicRichText field={slice.primary.text} />
  </section>
)

export default TextSlice
