import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import useWindowSize from "../../utils/useWindowSize"
import { HiMenu } from "react-icons/hi"
import styles from "./Header.module.scss"

const Header = ({ navOpen, setNavOpen }) => {
  const width = useWindowSize()

  const { logo } = useStaticQuery(query)
  return (
    <header className={styles.header}>
      <section className={styles.container}>
        <Link to="/">
          {width < 568 && (
            <Img
              fixed={logo.childImageSharp.small}
              imgStyle={{ objectFit: "contain" }}
            />
          )}
          {width >= 568 && (
            <Img
              fixed={logo.childImageSharp.large}
              imgStyle={{ objectFit: "contain" }}
            />
          )}
        </Link>
        <div className={styles.icon}>
          <HiMenu onClick={() => setNavOpen(!navOpen)} />
        </div>
        <nav className={styles.navigation}>
          <ul>
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
    </header>
  )
}

const query = graphql`
  query Logo {
    logo: file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        small: fixed(width: 150, quality: 90) {
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
