import React from "react"
import { hours } from "../../data/hours"
import { FaPhone } from "react-icons/fa"
import styles from "./OpeningHours.module.scss"

const OpeningHours = () => {
  return (
    <section className={styles.opening} id="contact">
      <div className={styles.container}>
        <h2>Opening Hours</h2>

        <ul className={styles.hours}>
          {/* Map opening hours from the imported array */}
          {hours.map(date => {
            return (
              <li key={date.id} className={styles.date}>
                <p>{date.day}</p>
                <p>{date.time}</p>
              </li>
            )
          })}
        </ul>

        {/* Phone number / book button section */}
        <section className={styles.book}>
          <div className={styles.phone}>
            <FaPhone />
            <h4>
              <a href="tel:21382306">21382306</a>
              {" / "}
              <a href="tel:79227063">79227063</a>
            </h4>
          </div>
          {/* Book button connected to foodbooking script */}
          <button
            data-glf-cuid="bb8c1dad-7535-46f5-889e-f6917d4856e8"
            data-glf-ruid="f0d82ad0-c557-4e3a-bfd5-c8142b65bbf6"
            data-glf-reservation="true"
          >
            BOOK NOW
          </button>
        </section>
      </div>
    </section>
  )
}

export default OpeningHours
