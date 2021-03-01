import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import SingleReview from "../SingleReview/SingleReview"
import { reviews } from "../../data/reviews"
import styles from "./Reviews.module.scss"

const Reviews = () => {
  const { mobile, desktop } = useStaticQuery(query)

  const images = [
    mobile.childImageSharp.fluid,
    {
      ...desktop.childImageSharp.fluid,
      media: `(min-width: 768px)`,
    },
  ]
  return (
    <BackgroundImage
      Tag="section"
      className={styles.reviews}
      fluid={images}
      backgroundColor={`#fff`}
    >
      <div className={styles.overlay}>
        <div className={styles.container}>
          <section className={styles.text}>
            <h2>
              What our
              <br />
              customers say..
            </h2>
            <SingleReview
              text={
                "The food is exceptionally good, the steak was cooked to perfection and the desserts are delicious! You would not be disappointed eating here."
              }
              name={"Carmen Buhagiar"}
              platform={"Tripadvisor"}
            />
          </section>
        </div>
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
