import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Gallery from "@browniebroke/gatsby-image-gallery"
import { useInView } from "react-intersection-observer"
import "@browniebroke/gatsby-image-gallery/dist/style.css"
import styles from "./ImageGallery.module.scss"

const ImageGallery = () => {
  // Get gallery images and set lightbox options
  const { allFile } = useStaticQuery(query)
  const images = allFile.edges.map(({ node }) => node.childImageSharp)
  const lightboxOptions = {
    reactModalProps: { shouldReturnFocusAfterClose: false },
  }

  // Load image gallery with intersection oberserver
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "500px",
    triggerOnce: true,
  })

  return (
    <section className={styles.gallery} ref={ref}>
      {inView && <Gallery images={images} lightboxOptions={lightboxOptions} />}
    </section>
  )
}

// Graphql query for gallery images
const query = graphql`
  {
    allFile(filter: { relativeDirectory: { eq: "gallery" } }) {
      edges {
        node {
          childImageSharp {
            thumb: fluid(maxWidth: 300, maxHeight: 300) {
              ...GatsbyImageSharpFluid_withWebp
            }
            full: fluid(maxWidth: 1440) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`

export default ImageGallery
