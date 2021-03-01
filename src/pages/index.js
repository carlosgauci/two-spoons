import React from "react"
import SEO from "../components/SEO/SEO"
import Hero from "../components/Hero/Hero"
import About from "../components/About/About"
import Reviews from "../components/Reviews/Reviews"
import OpeningHours from "../components/OpeningHours/OpeningHours"
import FindUs from "../components/FindUs/FindUs"

const IndexPage = () => (
  <>
    <SEO title="Home" />

    <Hero />
    <About />
    <Reviews />
    <OpeningHours />
    <FindUs />
  </>
)

export default IndexPage
