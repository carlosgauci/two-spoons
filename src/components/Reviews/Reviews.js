import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import SingleReview from "../SingleReview/SingleReview"
import { reviews } from "../../data/reviews"
import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"
import { useInView } from "react-intersection-observer"
import styles from "./Reviews.module.scss"

const Reviews = () => {
  const { mobile, desktop } = useStaticQuery(query)

  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "300px",
    triggerOnce: true,
  })

  // gatsby-bg-image responsive settings
  const images = [
    mobile.childImageSharp.fluid,
    {
      ...desktop.childImageSharp.fluid,
      media: `(min-width: 768px)`,
    },
  ]

  //   Carousel items
  const items = reviews.map(review => {
    return <SingleReview key={review.id} review={review} />
  })

  //   Carousel responsive settings
  const responsive = {
    0: { items: 1 },
    1024: { items: 2 },
  }

  return (
    <BackgroundImage
      Tag="section"
      className={styles.reviews}
      fluid={images}
      backgroundColor={`#fff`}
    >
      <div className={styles.overlay} ref={ref}>
        {inView && (
          <div className={styles.container}>
            <section className={styles.text}>
              <h2>
                What our
                <br />
                customers say...
              </h2>
              <AliceCarousel
                mouseTracking
                items={items}
                responsive={responsive}
                disableButtonsControls={true}
                autoPlay={true}
                autoPlayInterval={7500}
                infinite={true}
              />
            </section>
          </div>
        )}
      </div>
    </BackgroundImage>
  )
}

const query = graphql`
  {
    mobile: file(relativePath: { eq: "customers.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 562) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    desktop: file(relativePath: { eq: "customers-lg.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default Reviews
