import React from 'react'

const FullWidthImage = ({ slice }) => (
  <section className="full-width-image-section">
    <div className="full-width-image-content container">
      <img src={slice.primary.image.url} alt={slice.primary.image.alt}/>
    </div>
    <style jsx>{`
      .full-width-image-content {
        max-width: 980px;
        margin: auto auto 3.75rem;
      }
    `}</style>
  </section>
)

export default FullWidthImage
