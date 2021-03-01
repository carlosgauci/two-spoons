import React from "react"
import GoogleMaps from "../GoogleMaps/GoogleMaps"
import styles from "./FindUs.module.scss"

const FindUs = () => {
  return (
    <section className={styles.findus}>
      <div className={styles.container}>
        <h2>Find Us</h2>
        <div className={styles.map}>
          <GoogleMaps />
        </div>
      </div>
    </section>
  )
}

export default FindUs
