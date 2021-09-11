import React, { useState } from 'react'
import styles from './Card.module.css'

const Card = (props) => {

  const [cardState, setCardState] = useState()

  const enableHoverCard = () => {
    setCardState(<>
      <div className={styles.imgWrapper}>
        <img onClick={props.editEvent} className={styles.img} src="./pencil.svg" alt="Редактировать" />
        <img onClick={props.deleteEvent} className={styles.img} src="./delete.svg" alt="Удалить" />
      </div>
    </>)
  }

  const disableHoverCard = () => {
    setCardState()
  }

  return (
    <div onMouseEnter={enableHoverCard} onMouseLeave={disableHoverCard} className={styles.root} key={props.key}>
      <div className={styles.wrapper}>
      <h3 className={styles.title}>{props.title}</h3>
      {cardState}
      </div>
      <p className={styles.text}>{props.text1}</p>
      <p className={styles.text}>{props.text2}</p>
    </div>
  )
}

export default Card
