import React from 'react'
import { asLink } from '@prismicio/client'

const GoogleFormSlice = ({ slice }) => (
  <section className="google-form-section">
    <iframe className="google-form-content" src={`${ asLink(slice.primary.googleFormLink) }?embedded=true`} width="100%" height="800px" scrolling="no" frameBorder="0" marginHeight="0" marginWidth="0">
      Loading...
    </iframe>
    <style jsx>{`
      .google-form-section {
        margin: 100px 0;
        height: 100%;
      }
      .google-form-content {
        overflow: hidden;
      }
    `}</style>
  </section>
)

export default GoogleFormSlice
