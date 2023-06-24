import { asText, Content } from '@prismicio/client'
import { PrismicRichText, SliceComponentProps } from '@prismicio/react'

/**
 * Props for `Banner`.
 */
export type BannerProps = SliceComponentProps<Content.BannerSlice>

/**
 * Component for "Banner" Slices.
 */
const Banner = ({ slice }: BannerProps): JSX.Element => {
  return (
    <section
      className="banner-section"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="banner-content container">
        <h1 className="banner-title">{asText(slice.primary.title)}</h1>
        <div className="banner-description">
          <PrismicRichText field={slice.primary.description} />
        </div>
      </div>
      <style jsx>{`
        .banner-section {
          display: flex;
          justify-content: center;
          align-items: center;
          height: ${ slice.variation === 'halfBanner' ? '50vh' : '100vh' };
          background-position: center center;
          background-size: cover;
          color: #ffffff;
          line-height: 1.75;
          text-align: center;
          background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${ slice.primary.background.url });
        }
        .banner-content {
          text-align: center;
        }
        .banner-title {
          width: 90%;
          max-width: 490px;
          margin-left: auto;
          margin-right: auto;
          color: #ffffff;
          font-size: 70px;
          font-weight: 700;
          line-height: 70px;
        }
        .banner-description {
          width: 90%;
          max-width: 490px;
          margin-left: auto;
          margin-right: auto;
        }
        @media (max-width: 767px) {
          .banner-title {
            font-size: 50px;
            line-height: 50px;
          }
        }
      `}</style>
    </section>
  )
}

export default Banner
