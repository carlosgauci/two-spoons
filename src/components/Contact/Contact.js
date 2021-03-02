import React from "react"
import OpeningHours from "../OpeningHours/OpeningHours"
import FindUs from "../FindUs/FindUs"
import styles from "./Contact.module.scss"

const Contact = () => {
  return (
    <section className={styles.contact}>
      <OpeningHours />
      <FindUs />
    </section>
  )
}

export default Contact
