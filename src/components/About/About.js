import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import pattern from "../../images/pattern.png"
import styles from "./About.module.scss"

const About = () => {
  const { about, mint } = useStaticQuery(query)

  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <Img
          fixed={mint.childImageSharp.fixed}
          className={styles.mint}
          style={{ position: "absolute" }}
        />
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
        fixed(width: 175, quality: 90) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`

export default About
