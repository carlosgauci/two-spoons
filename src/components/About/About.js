import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import useWindowSize from "../../utils/useWindowSize"
import pattern from "../../images/pattern.png"
import styles from "./About.module.scss"

const About = () => {
  // Get images from graphql
  const { about, mint, rosemary } = useStaticQuery(query)

  // get window width
  const width = useWindowSize()

  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        {/* Dont show the mint image between 768px and 1024px because of limited space */}
        {(width < 768 || width >= 1024) && (
          <Img
            fluid={mint.childImageSharp.fluid}
            className={styles.mint}
            style={{ position: "absolute" }}
          />
        )}

        {/* Show rosemary image is screen width is over 1024px */}
        {width >= 1024 && (
          <Img
            fluid={rosemary.childImageSharp.fluid}
            className={styles.rosemary}
            style={{ position: "absolute" }}
          />
        )}

        <section className={styles.text}>
          <h2>About Us</h2>
          <p>
            Two spoons is family-run cafe & restaurant located in the heart of
            Birkirkara, Malta.
          </p>
          <p>
            Specializing In Mediterranean cuisine, we select only the freshest
            ingredients available on the market and combine modern equipment
            with traditional cooking techniques to create something truly
            special and worthy of our clients' appreciation.
          </p>
          <p>
            We pride ourselves on taking great care of our customers and
            ensuring they have the best dining experience possible when they
            visit our restaurant.
          </p>
        </section>

        {/* Image container with a patterned bg so we can offset image */}
        <section
          className={styles.imageContainer}
          style={{
            backgroundImage: `url(${pattern})`,
            backgroundRepeat: "repeat",
          }}
        >
          <Img fluid={about.childImageSharp.fluid} className={styles.image} />
        </section>
      </div>
    </section>
  )
}

// Graphql query for images
const query = graphql`
  {
    about: file(relativePath: { eq: "about.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    mint: file(relativePath: { eq: "mint.png" }) {
      childImageSharp {
        fluid(maxWidth: 450, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    rosemary: file(relativePath: { eq: "rosemary.png" }) {
      childImageSharp {
        fluid(maxWidth: 450, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default About
