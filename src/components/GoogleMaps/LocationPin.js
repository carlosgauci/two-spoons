import React from "react"
import styles from "./LocationPin.module.scss"

const LocationPin = () => {
  return (
    <div className={styles.container}>
      <p>Two Spoons</p>
      <a href="https://goo.gl/maps/JxpCNoM2TCE69fBPA" target="blank">
        <button>get directions</button>
      </a>
    </div>
  )
}

export default LocationPin
