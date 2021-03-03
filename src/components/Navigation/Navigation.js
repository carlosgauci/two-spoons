import React from "react"
import { motion } from "framer-motion"
import { navVariants, navItemVariants } from "../../framer/variants"
import { FaAngleDoubleRight } from "react-icons/fa"
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
        <FaAngleDoubleRight
          className={styles.close}
          onClick={() => setNavOpen(false)}
        />
        <ul>
          <a
            href="https://www.foodbooking.com/ordering/restaurant/menu?restaurant_uid=f0d82ad0-c557-4e3a-bfd5-c8142b65bbf6"
            target="blank"
          >
            <motion.li
              variants={navItemVariants}
              initial="hidden"
              animate="show"
              transition={{ duration: 0.4, delay: 0.1 }}
              onClick={() => setNavOpen(false)}
            >
              Menu
            </motion.li>
          </a>
          <a
            href="https://www.foodbooking.com/ordering/restaurant/menu/reservation?restaurant_uid=f0d82ad0-c557-4e3a-bfd5-c8142b65bbf6&reservation=true"
            target="blank"
          >
            <motion.li
              variants={navItemVariants}
              initial="hidden"
              animate="show"
              transition={{ duration: 0.4, delay: 0.2 }}
              onClick={() => setNavOpen(false)}
            >
              Reserve Table
            </motion.li>
          </a>
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
