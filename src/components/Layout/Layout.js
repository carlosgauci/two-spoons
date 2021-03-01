import React, { useState, useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import PropTypes from "prop-types"
import Header from "../Header/Header"
import Navigation from "../Navigation/Navigation"
import Footer from "../Footer/Footer"

const Layout = ({ children }) => {
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
      <Header navOpen={navOpen} setNavOpen={setNavOpen} />
      <AnimatePresence>
        {navOpen && <Navigation setNavOpen={setNavOpen} />}
      </AnimatePresence>
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
