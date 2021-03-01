import React from "react"
import { motion } from "framer-motion"
import { navVariants } from "../../framer/variants"
import { IoClose } from "react-icons/io5"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import styles from "./Navigation.module.scss"

const Navigation = ({ setNavOpen }) => {
  return (
    <motion.nav
      className={styles.navigation}
      variants={navVariants}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <section className={styles.container}>
        <IoClose className={styles.close} onClick={() => setNavOpen(false)} />
        <ul>
          <li>Menu</li>
          <li>Reserve Table</li>
          <AnchorLink
            to="/#about"
            title="About Us"
            onAnchorLinkClick={() => setNavOpen(false)}
          >
            <li>About Us</li>
          </AnchorLink>
          <AnchorLink
            to="/#contact"
            title="Our team"
            onAnchorLinkClick={() => setNavOpen(false)}
          >
            <li>Contact</li>
          </AnchorLink>
        </ul>
      </section>
    </motion.nav>
  )
}

export default Navigation
