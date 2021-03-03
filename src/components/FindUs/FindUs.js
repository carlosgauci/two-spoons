import React from "react"
import GoogleMaps from "../GoogleMaps/GoogleMaps"
import { useInView } from "react-intersection-observer"
import styles from "./FindUs.module.scss"

const FindUs = () => {
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "300px",
    triggerOnce: true,
  })

  return (
    <section className={styles.findus} ref={ref}>
      <div className={styles.container}>
        <h2>Find Us</h2>
        <div className={styles.map}>{inView && <GoogleMaps />}</div>
      </div>
    </section>
  )
}

export default FindUs
