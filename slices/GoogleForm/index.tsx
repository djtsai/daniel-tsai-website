'use client'
import { asLink, Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

/**
 * Props for `GoogleForm`.
 */
export type GoogleFormProps = SliceComponentProps<Content.GoogleFormSlice>

/**
 * Component for "GoogleForm" Slices.
 */
const GoogleForm = ({ slice }: GoogleFormProps): JSX.Element => {
  return (
    <section
      className="google-form-section"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <iframe className="google-form-content" src={`${asLink(slice.primary.google_form_link)}?embedded=true`} width="100%" height="800px" scrolling="no" frameBorder="0" marginHeight={0} marginWidth={0}>
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
}

export default GoogleForm
