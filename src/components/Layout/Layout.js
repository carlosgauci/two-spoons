import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { pageVariants } from "../../framer/variants"
import PropTypes from "prop-types"
import Header from "../Header/Header"
import Navigation from "../Navigation/Navigation"
import Footer from "../Footer/Footer"

const Layout = ({ children, location }) => {
  // State for opening and closing mobile navigation
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
    // AnimatePresence to animate page transition and nav
    <AnimatePresence>
      {navOpen && <Navigation setNavOpen={setNavOpen} />}

      {/* Container div set to flex-col and <main> set to flex:1, to achieve 100vh on short pages like 404 (without browser topbar ruining our experience on mobile) */}
      <motion.div
        key={location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="enter"
        exit="exit"
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <Header navOpen={navOpen} setNavOpen={setNavOpen} location={location} />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </motion.div>
    </AnimatePresence>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
