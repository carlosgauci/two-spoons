import React from "react"
import { motion } from "framer-motion"
import { navVariants, navItemVariants } from "../../framer/variants"
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
          <motion.li
            variants={navItemVariants}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            Menu
          </motion.li>
          <motion.li
            variants={navItemVariants}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            Reserve Table
          </motion.li>
          <AnchorLink
            to="/#about"
            title="About Us"
            onAnchorLinkClick={() => setNavOpen(false)}
          >
            <motion.li
              variants={navItemVariants}
              initial="hidden"
              animate="show"
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              About Us
            </motion.li>
          </AnchorLink>
          <AnchorLink
            to="/#contact"
            title="Our team"
            onAnchorLinkClick={() => setNavOpen(false)}
          >
            <motion.li
              variants={navItemVariants}
              initial="hidden"
              animate="show"
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              Contact
            </motion.li>
          </AnchorLink>
        </ul>
      </section>
    </motion.nav>
  )
}

export default Navigation
