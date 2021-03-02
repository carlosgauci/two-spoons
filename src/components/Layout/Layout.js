import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { pageVariants } from "../../framer/variants"
import PropTypes from "prop-types"
import Header from "../Header/Header"
import Navigation from "../Navigation/Navigation"
import Footer from "../Footer/Footer"

const Layout = ({ children, location }) => {
  const [navOpen, setNavOpen] = useState(false)

  // Disable scrolling when nav is open
  let html
  if (typeof document !== "undefined") {
    html = document.querySelector("html")
  }
  useEffect(() => {
    navOpen
      ? (html.style.overflow = "hidden")
      : (html.style.overflow = "visible")
  }, [navOpen])

  return (
    <>
      <AnimatePresence>
        <motion.div
          key={location.pathname}
          variants={pageVariants}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <Header navOpen={navOpen} setNavOpen={setNavOpen} />
          {navOpen && <Navigation setNavOpen={setNavOpen} />}
          <main>{children}</main>
          <Footer />
        </motion.div>
      </AnimatePresence>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
