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
              <button
                data-glf-cuid="bb8c1dad-7535-46f5-889e-f6917d4856e8"
                data-glf-ruid="f0d82ad0-c557-4e3a-bfd5-c8142b65bbf6"
              >
                MENU
              </button>
              <button
                data-glf-cuid="bb8c1dad-7535-46f5-889e-f6917d4856e8"
                data-glf-ruid="f0d82ad0-c557-4e3a-bfd5-c8142b65bbf6"
                data-glf-reservation="true"
              >
                RESERVE
              </button>
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
