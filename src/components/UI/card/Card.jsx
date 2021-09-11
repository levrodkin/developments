import React, { useState, useContext } from 'react'
import styles from './Card.module.css'
import {Context} from '../../../Api/context'
import { Link } from 'react-router-dom'



const Card = (props) => {
  
  const {setEditEvent} = useContext(Context)
  const [cardState, setCardState] = useState()

  const enableHoverCard = () => {
    setCardState(<>
      <div className={styles.imgWrapper}>
        <Link to={'edit'}>
        <img onClick={funcEditEvent} className={styles.img} src="./pencil.svg" alt="Редактировать" />
        </Link>
        <img onClick={props.deleteEvent} className={styles.img} src="./delete.svg" alt="Удалить" />
      </div>
    </>)
  }
  const disableHoverCard = () => setCardState()


  const funcEditEvent = () => {
    setEditEvent(props.e)
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
