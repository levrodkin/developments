import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom';
import Datepicker from '../components/Datepicker'
import Button from '../components/UI/button/Button'
import styles from './AddEvent.module.css'
import Input from '../components/UI/Input/Input';
import { Context } from '../Api/context'
import Swal from 'sweetalert2'


const AddEvent = () => {
  const { event, setEvent } = useContext(Context)
  const [events, setEvents] = useState([])

  useEffect(() => {
    if (localStorage.getItem("events")) {
      setEvents(JSON.parse(localStorage.getItem("events")))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('events', JSON.stringify(events))
    const D = new Date()
    setEvent({ date: `${D.getMonth() + 1}/${D.getDate()}/${D.getFullYear()}`, title: '', money: '', where: '', time: '', text: '', type: '1' })
  }, [events])

  let selectedEvent
  if (event.type === '1') {
    selectedEvent = <Input value={event.text} label="Текст" type="text" placeholder='Введите текст' onChange={e => setEvent({ ...event, text: e.target.value })} />
  } else if (event.type === '2') {
    selectedEvent = <Input value={event.money} label="Какой бюджет?" type="text" placeholder='Введите бюджет' onChange={e => setEvent({ ...event, money: e.target.value })} />
  } else if (event.type === '3') {
    selectedEvent = <>
      <Input value={event.where} label="Куда?" type="text" placeholder='Укажите место' onChange={e => setEvent({ ...event, where: e.target.value })} />
      <Input value={event.time} label="Во сколько?" type="text" placeholder='Введите время' onChange={e => setEvent({ ...event, time: e.target.value })} />
    </>
  }

  function saveEvent() {
    setEvents([...events, { ...event, id: Date.now() }])
    alert()
  }

  const eventdate = (date) => {
    setEvent({ ...event, date: date })
  }

  const alert = () => Swal.fire(
    'Успех!',
    'Вы успешно создали событие',
    'success'
  )

  const formValidation = () => {
    const e = event
    if (event.type === '1' && e.text.length >= 4 && e.title.length >= 4) {
      saveEvent()
    } else if (event.type === '2' && e.money.length >= 4 && e.title.length >= 4) {
      saveEvent()
    } else if (event.type === '3' && e.where.length >= 4 && e.time.length >= 4 && e.title.length >= 4) {
      saveEvent()
    } else {
      Swal.fire(
        'Ошибка!',
        'Введите в каждое поле минимум 4 символа',
        'error'
      )
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
        <select className={styles.input} onChange={e => setEvent({ ...event, type: e.target.value })} name="" id="selectedEvent">
          <option value="1">Пометки</option>
          <option value="2">Праздничные дни</option>
          <option value="3">Мероприятия</option>
        </select>
        <Input value={event.title} label="Название события" type="text" placeholder='Введите название' onChange={e => setEvent({ ...event, title: e.target.value })} />
        {selectedEvent}
        <div>
          <Link to={'/'} style={{ display: 'inline-block', margin: '10px' }}>
            <Button >
              Отмена
            </Button>
          </Link>
          <Button onClick={formValidation}>
            Сохранить
          </Button>
        </div>
      </div>
    </div>
  )
}

export default AddEvent
