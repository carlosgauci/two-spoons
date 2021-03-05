import React from "react"
import Layout from "./src/components/Layout/Layout"
import "@fontsource/poppins/400.css"
import "@fontsource/poppins/400-italic.css"
import "@fontsource/poppins/600.css"
import "./src/css/normalize.scss"
import "./src/css/global.scss"

export const wrapPageElement = ({ element, props }) => {
  return (
    <Layout {...props} location={props.location}>
      {element}
    </Layout>
  )
}

// Add foodbooking script
const addScript = url => {
  const script = document.createElement("script")
  script.src = url
  script.async = true
  document.body.appendChild(script)
}

export const onClientEntry = () => {
  window.onload = () => {
    addScript("https://www.fbgcdn.com/embedder/js/ewm2.js")
  }
}
