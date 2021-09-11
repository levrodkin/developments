import React, { useState, useEffect } from 'react'
import Datepicker from './Datepicker'
import { Link } from 'react-router-dom';
import Button from './UI/button/Button123'
import Card123 from './UI/card/Card123';
import styles from './Events.module.css'

const Development = () => {
  const [events, setEvents] = useState([])
  const [startDate, setStartDate] = useState(`${new Date().getMonth() + 1}/${new Date().getDate()}/${new Date().getFullYear()}`);

  useEffect(() => {
    if (localStorage.getItem("events")) {
      setEvents(JSON.parse(localStorage.getItem("events")))
    }
  }, [startDate])


  const sortDate = (date) => {
    setStartDate(date)
    return 1
  }


  return (
    <div className={styles.container}>
      <div>
        <h3 className={styles.title}>Выберите Дату:</h3>
        <Datepicker startDate={sortDate} />
      </div>
      <div>
        <div className={styles.root}>
          {events.filter(elem => elem.date === startDate).map(e => {
            return e.type === "1" ? <Card123 key={e.id} title={e.title} text1={`Бюджет: ${e.money}`} />
              : e.type === "2" ? <Card123 key={e.id} title={e.title} text1={`Где: ${e.where}`} text2={`Во сколько: ${e.time}`} />
                : <Card123 key={e.id} title={e.title} text1={e.text} />
          }
          )}
        </div>
        <Link to={'/add'} style={{ display: 'block', height: '100%' }}>
          <Button>
            Добавить
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default Development