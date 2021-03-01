import React from "react"
import SEO from "../components/SEO/SEO"
import Hero from "../components/Hero/Hero"
import About from "../components/About/About"
import Reviews from "../components/Reviews/Reviews"
import OpeningHours from "../components/OpeningHours/OpeningHours"

const IndexPage = () => (
  <>
    <SEO title="Home" />

    <Hero />
    <About />
    <Reviews />
    <OpeningHours />
  </>
)

export default IndexPage
