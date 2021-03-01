import React from "react"
import { AiFillStar } from "react-icons/ai"
import styles from "./SingleReview.module.scss"

const SingleReview = ({ review: { text, name, platform } }) => {
  return (
    <article className={styles.review}>
      <div className={styles.stars}>
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
      </div>
      <p>{text}</p>
      <p>
        - {name}, {platform}
      </p>
    </article>
  )
}

export default SingleReview
