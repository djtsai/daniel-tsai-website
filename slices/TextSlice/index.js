import React from 'react'
import { RichText } from 'prismic-reactjs'

const TextSlice = ({ slice }) => (
  <section className="text-section">
    <RichText render={slice.primary.text} />
  </section>
)

export default TextSlice
