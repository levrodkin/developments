import React from 'react'
import styles from './Card123.module.css'

const Card123 = ( props) => {
  return (
    <div className={styles.root} key={props.key}>
      <h3 className={styles.title}>{props.title}</h3>
      <p className={styles.text}>{props.text1}</p>
      <p className={styles.text}>{props.text2}</p>
    </div>
  )
}

export default Card123
