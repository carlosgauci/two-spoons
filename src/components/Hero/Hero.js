import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import styles from "./Hero.module.scss"

const Hero = () => {
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
      className={styles.hero}
      fluid={images}
      backgroundColor={`#fff`}
    >
      <div className={styles.overlay}>
        <div className={styles.container}>
          <section className={styles.text}>
            <h1>Delicious Mediterranean food, made with love.</h1>
            <h4>Online ordering now available!</h4>
            <p>
              Order online & collect, or get it delivered through the Bolt Food
              app.
            </p>
            <section className={styles.buttons}>
              <button>MENU</button>
              <button>RESERVE</button>
            </section>
          </section>
        </div>
      </div>
    </BackgroundImage>
  )
}

const query = graphql`
  {
    mobile: file(relativePath: { eq: "hero.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 562) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    desktop: file(relativePath: { eq: "hero-lg.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default Hero
