import React from "react"
import SEO from "../components/SEO/SEO"
import Hero from "../components/Hero/Hero"
import About from "../components/About/About"
import Reviews from "../components/Reviews/Reviews"
import Contact from "../components/Contact/Contact"
import ImageGallery from "../components/ImageGallery/ImageGallery"

const IndexPage = () => (
  <>
    <SEO title="Home" />

    <Hero />
    <About />
    <Reviews />
    <Contact />
    <ImageGallery />
  </>
)

export default IndexPage
