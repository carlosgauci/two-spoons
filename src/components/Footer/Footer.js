import React from "react"
import { FaFacebookSquare, FaInstagramSquare, FaPhone } from "react-icons/fa"
import styles from "./Footer.module.scss"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>Two Spoons Cafe</p>
        <p>10 Fleur De Lys Road, Birkirkara</p>

        <section className={styles.phone}>
          <FaPhone /> <p>21382306 / 79227063</p>
        </section>

        <section className={styles.social}>
          <a href="https://www.facebook.com/TwoSpoonsMalta/" target="blank">
            <FaFacebookSquare />
          </a>

          <a href="https://www.instagram.com/twospoons_malta/" target="blank">
            <FaInstagramSquare />
          </a>
        </section>
      </div>
    </footer>
  )
}

export default Footer
