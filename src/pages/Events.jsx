import React, { useState, useEffect } from 'react'
import Datepicker from '../components/Datepicker'
import { Link } from 'react-router-dom';
import Button from '../components/UI/button/Button'
import Card from '../components/UI/card/Card';
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
        {events.filter(elem => elem.date === startDate).length > 0 &&
          <div className={styles.root}>
            {events.filter(elem => elem.date === startDate).map(e => {
              const deleteEvent = () => {
                localStorage.setItem('events', JSON.stringify(events.filter(el => el.id != e.id)))
                setEvents(JSON.parse(localStorage.getItem("events")))
              }
              return e.type === "1" ? <Card id={e.id} key={e.id} title={e.title} text1={e.text} e={e} deleteEvent={deleteEvent} />
                : e.type === "2" ? <Card id={e.id} key={e.id} title={e.title} text1={`Бюджет: ${e.money}`} e={e} deleteEvent={deleteEvent} />
                  : <Card id={e.id} key={e.id} title={e.title} text1={`Куда: ${e.where}`} text2={`Во сколько: ${e.time}`} e={e} deleteEvent={deleteEvent} />
            }
            )}
          </div>
        }
        <Link to={'/add'} style={{ display: 'inline-block', margin: '10px' }}>
          <Button>
            Добавить
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default Development