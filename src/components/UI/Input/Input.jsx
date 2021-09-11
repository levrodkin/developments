import React from 'react'
import styles from './Input.module.css'

const Input = (props) => {
  return (
    <div className={styles.root}>
      <label className={styles.label} htmlFor="eventName123">{props.label}</label>
      <input className={styles.input} id='eventName123' placeholder={props.placeholder} type={props.type} onChange={props.onChange} required/>
    </div>
  )
}

export default Input
