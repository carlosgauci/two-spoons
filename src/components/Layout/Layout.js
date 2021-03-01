import React, { useState } from "react"
import PropTypes from "prop-types"
import Header from "../Header/Header"
import Navigation from "../Navigation/Navigation"
import Footer from "../Footer/Footer"

const Layout = ({ children }) => {
  const [navOpen, setNavOpen] = useState(true)

  return (
    <>
      <Header navOpen={navOpen} setNavOpen={setNavOpen} />
      {navOpen && <Navigation setNavOpen={setNavOpen} />}
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
