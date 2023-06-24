import React from 'react'
import * as prismic from '@prismicio/client'
import { PrismicRichText } from '@prismicio/react'

const BannerSlice = ({ slice }) => (
  <section className="banner-section">
    <div className="banner-content container">
      <h1 className="banner-title">{prismic.asText(slice.primary.title)}</h1>
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

export default BannerSlice
