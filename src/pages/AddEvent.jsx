import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom';
import Datepicker from '../components/Datepicker'
import Button from '../components/UI/button/Button'
import styles from './AddEvent.module.css'
import Input from '../components/UI/Input/Input';
import { Context } from '../Api/context'


const AddEvent = () => {



  const [select, setSelect] = useState('1')
  const { event, setEvent } = useContext(Context)
  const [events, setEvents] = useState([])

  useEffect(() => {
    if (localStorage.getItem("events")) {
      setEvents(JSON.parse(localStorage.getItem("events")))
    }
  }, [])

  let selectedEvent
  if (select === '1') {
    selectedEvent = <Input value={event.text} label="Текст" type="text" placeholder='Введите текст' onChange={e => setEvent({ ...event, text: e.target.value })} />
  } else if (select === '2') {
    selectedEvent = <Input value={event.money} label="Какой бюджет?" type="text" placeholder='Введите бюджет' onChange={e => setEvent({ ...event, money: e.target.value })} />
  } else if (select === '3') {
    selectedEvent = <>
      <Input value={event.where} label="Куда?" type="text" placeholder='Укажите место' onChange={e => setEvent({ ...event, where: e.target.value })} />
      <Input value={event.time} label="Во сколько?" type="text" placeholder='Введите время' onChange={e => setEvent({ ...event, time: e.target.value })} />
    </>
  }

  function saveEvent() {
    setEvents([...events, { ...event, id: Date.now(), type: select }])
    localStorage.setItem('events', JSON.stringify(events))
  }

  const eventdate = (date) => {
    setEvent({ ...event, date: date })
  }

  const formValidation = () => {
    const e = event
    if (select === '1' && e.text.length >= 4 && e.title.length >= 4) {
      saveEvent()
    } else if (select === '2' && e.money.length >= 4 && e.title.length >= 4) {
      saveEvent()
    } else if (select === '3' && e.where.length >= 4 && e.time.length >= 4 && e.title.length >= 4) {
      saveEvent()
    } else {
      alert('Введите в каждое поле минимум 4 символа')
    }
  }


  return (
    <div>
      <div className={styles.container}>
        <h1 className={styles.title}>Добавить событие</h1>
        <h3 className={styles.title}>Выберите Дату:</h3>
        <span className={styles.datapicker}>
          <Datepicker startDate={eventdate} />
        </span>
        <label className={styles.subtitle} style={{ display: 'block' }} htmlFor="selectedEvent">Тип события</label>
        <select className={styles.input} onChange={e => setSelect(e.target.value)} name="" id="selectedEvent">
          <option value="1">Пометки</option>
          <option value="2">Праздничные дни</option>
          <option value="3">Мероприятия</option>
        </select>
        <Input value={event.title} label="Название события" type="text" placeholder='Введите название' onChange={e => setEvent({ ...event, title: e.target.value })} />
        {selectedEvent}
        <div>
          <Link to={'/'} style={{ display: 'inline-block', margin: '10px' }}>
            <Button onClick={saveEvent}>
              Отмена
            </Button>
          </Link>
          <Link to={'/add'} style={{ display: 'inline-block', margin: '10px' }}>
            <Button type='submit' onClick={e => formValidation(e)}>
              Сохранить
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AddEvent
