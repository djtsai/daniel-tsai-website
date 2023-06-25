import { Content } from '@prismicio/client'
import { PrismicImage, SliceComponentProps } from '@prismicio/react'

/**
 * Props for `FullWidthImage`.
 */
export type FullWidthImageProps =
  SliceComponentProps<Content.FullWidthImageSlice>;

/**
 * Component for "FullWidthImage" Slices.
 */
const FullWidthImage = ({ slice }: FullWidthImageProps): JSX.Element => {
  return (
    <section
      className="full-width-image-section"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="full-width-image-content container">
        <PrismicImage field={slice.primary.image} />
      </div>
      <style jsx>{`
        .full-width-image-content {
          max-width: 980px;
          margin: auto auto 3.75rem;
        }
      `}</style>
    </section>
  )
}

export default FullWidthImage
