import React from "react"
import { FaStar } from "react-icons/fa"
import styles from "./SingleReview.module.scss"

const SingleReview = ({ review: { text, name, platform } }) => {
  return (
    <article className={styles.review}>
      <div className={styles.stars}>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
      <p>{text}</p>
      <p>
        - {name}, {platform}
      </p>
    </article>
  )
}

export default SingleReview
