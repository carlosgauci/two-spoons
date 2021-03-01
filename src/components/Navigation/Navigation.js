import React from "react"
import { IoClose } from "react-icons/io5"
import styles from "./Navigation.module.scss"

const Navigation = ({ setNavOpen }) => {
  return (
    <nav className={styles.navigation}>
      <section className={styles.container}>
        <IoClose className={styles.close} onClick={() => setNavOpen(false)} />
        <ul>
          <li>Menu</li>
          <li>Reserve Table</li>
          <li>About Us</li>
          <li>Contact</li>
        </ul>
      </section>
    </nav>
  )
}

export default Navigation
