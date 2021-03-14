import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { motion } from "framer-motion"
import { overlayVariants, heroVariants } from "../../framer/variants"
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
      <motion.div
        className={styles.overlay}
        variants={overlayVariants}
        initial="hidden"
        animate="show"
      >
        <div className={styles.container}>
          <section className={styles.text}>
            <motion.h1
              variants={heroVariants}
              initial="hidden"
              animate="show"
              transition={{ duration: 1, delay: 0.6 }}
            >
              Delicious Mediterranean food, made with love.
            </motion.h1>
            {/* <motion.h4
              variants={heroVariants}
              initial="hidden"
              animate="show"
              transition={{ duration: 1, delay: 1 }}
            >
              Online reservations and ordering now accepted!
            </motion.h4> */}
            <motion.p
              variants={heroVariants}
              initial="hidden"
              animate="show"
              transition={{ duration: 1, delay: 1 }}
            >
              Order your food online & collect it from our restaurant, or get it
              delivered through the Bolt Food app.
            </motion.p>
            <section className={styles.buttons}>
              <motion.button
                data-glf-cuid="bb8c1dad-7535-46f5-889e-f6917d4856e8"
                data-glf-ruid="f0d82ad0-c557-4e3a-bfd5-c8142b65bbf6"
                variants={heroVariants}
                initial="hiddenButtonLeft"
                animate="showButtonLeft"
                transition={{ duration: 1, delay: 1.4 }}
              >
                MENU
              </motion.button>
              <motion.button
                variants={heroVariants}
                initial="hiddenButtonRight"
                animate="showButtonRight"
                transition={{ duration: 0.75, delay: 1.8 }}
                data-glf-cuid="bb8c1dad-7535-46f5-889e-f6917d4856e8"
                data-glf-ruid="f0d82ad0-c557-4e3a-bfd5-c8142b65bbf6"
                data-glf-reservation="true"
              >
                RESERVE
              </motion.button>
            </section>
          </section>
        </div>
      </motion.div>
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
