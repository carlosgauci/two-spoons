import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Gallery from "@browniebroke/gatsby-image-gallery"
import "@browniebroke/gatsby-image-gallery/dist/style.css"
import styles from "./ImageGallery.module.scss"

const ImageGallery = () => {
  const { allFile } = useStaticQuery(query)

  const images = allFile.edges.map(({ node }) => node.childImageSharp)
  const lightboxOptions = {
    reactModalProps: { shouldReturnFocusAfterClose: false },
  }

  return (
    <section className={styles.gallery}>
      <Gallery images={images} lightboxOptions={lightboxOptions} />
    </section>
  )
}

const query = graphql`
  {
    allFile(filter: { relativeDirectory: { eq: "gallery" } }) {
      edges {
        node {
          childImageSharp {
            thumb: fluid(maxWidth: 350, maxHeight: 350) {
              ...GatsbyImageSharpFluid_withWebp
            }
            full: fluid(maxWidth: 1024) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`

export default ImageGallery
