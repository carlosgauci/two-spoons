import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { HiMenu } from "react-icons/hi"
import styles from "./Header.module.scss"

const Header = () => {
  const { logo } = useStaticQuery(query)
  return (
    <header className={styles.header}>
      <section className={styles.container}>
        <Link to="/">
          <Img fixed={logo.childImageSharp.fixed} />
        </Link>
        <div className={styles.icon}>
          <HiMenu />
        </div>
      </section>
    </header>
  )
}

const query = graphql`
  query Logo {
    logo: file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fixed(width: 150, quality: 90) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
  }
`

export default Header
