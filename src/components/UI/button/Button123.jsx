import React from 'react'
import styles from './Button123.module.css'

const Button = ({children, ...props}) => {
  return (
    <button {...props} className={styles.button123}>
      {children}
    </button>
  )
}

export default Button
