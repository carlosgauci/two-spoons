import React from "react"
import { hours } from "../../data/hours"
import { FaPhone } from "react-icons/fa"
import styles from "./OpeningHours.module.scss"

const OpeningHours = () => {
  return (
    <section className={styles.opening} id="contact">
      <div className={styles.container}>
        <h2>Opening Hours</h2>
        <section className={styles.hours}>
          {hours.map(date => {
            return (
              <div key={date.id} className={styles.date}>
                <p>{date.day}</p>
                <p>{date.time}</p>
              </div>
            )
          })}
        </section>
        <section className={styles.book}>
          <div className={styles.phone}>
            <FaPhone /> <h4>21382306 / 79227063</h4>
          </div>
          <button>BOOK NOW</button>
        </section>
      </div>
    </section>
  )
}

export default OpeningHours
