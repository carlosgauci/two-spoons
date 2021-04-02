import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { motion, useViewportScroll, useTransform } from "framer-motion"
import Img from "gatsby-image"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { FaBars } from "react-icons/fa"
import styles from "./Header.module.scss"

const Header = ({ navOpen, setNavOpen, location }) => {
  const { logo } = useStaticQuery(query)

  // Framer motion
  // Set a semi-transparent bg on the header when user starts scrolling
  const { scrollY } = useViewportScroll()
  const headerColor = useTransform(
    scrollY,
    [0, 1],
    ["rbga(0,0,0,0)", "rgba(0,0,0,0.6"]
  )
  return (
    <motion.header
      className={styles.header}
      style={{
        // Use the header bg animation on the index page only
        backgroundColor:
          location.pathname === "/" ? headerColor : "rgba(0,0,0,0.6",
      }}
    >
      <section className={styles.container}>
        {/* Logo */}
        <Link to="/">
          <Img
            fixed={logo.childImageSharp.small}
            imgStyle={{ objectFit: "contain" }}
          />
        </Link>

        {/* Nav toggle button (hidden on large screens) */}
        <div className={styles.icon}>
          <FaBars onClick={() => setNavOpen(!navOpen)} />
        </div>

        {/* Desktop navigation */}
        <nav className={styles.navigation}>
          <ul>
            {/* Menu and Reservation linked to foodbooking script */}
            <li
              data-glf-cuid="bb8c1dad-7535-46f5-889e-f6917d4856e8"
              data-glf-ruid="f0d82ad0-c557-4e3a-bfd5-c8142b65bbf6"
            >
              Menu
            </li>

            <li
              data-glf-cuid="bb8c1dad-7535-46f5-889e-f6917d4856e8"
              data-glf-ruid="f0d82ad0-c557-4e3a-bfd5-c8142b65bbf6"
              data-glf-reservation="true"
            >
              Reserve Table
            </li>

            <AnchorLink to="/#about" title="About Us">
              <li>About Us</li>
            </AnchorLink>

            <AnchorLink to="/#contact" title="Contact Us">
              <li>Contact Us</li>
            </AnchorLink>
          </ul>
        </nav>
      </section>
    </motion.header>
  )
}

// Graphql query for logo
const query = graphql`
  query Logo {
    logo: file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        small: fixed(width: 120, quality: 90) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
        large: fixed(width: 200, quality: 90) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
  }
`

export default Header
