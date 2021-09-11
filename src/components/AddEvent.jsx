import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Container, FormControl, InputLabel, MenuItem, Select, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Datepicker from './Datepicker'
import Button from './button/Button123'

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: 300,
  },
  form: {
    minWidth: 200,
    marginBottom: 20
  },
  button: {
    marginRight: 20
  },
  date: {
    marginRight: 'auto',
    marginLeft: 'auto'
  }
}));

const AddEvent = () => {
  const classes = useStyles();

  const [select, setSelect] = useState(3)
  const [event, setEvent] = useState({date: `${new Date().getMonth() + 1}/${new Date().getDate()}/${new Date().getFullYear()}`})
  const [events, setEvents] = useState([])

  useEffect(() => {
    if (localStorage.getItem("events")) {
      setEvents(JSON.parse(localStorage.getItem("events")))
    }
    console.log(events)
  }, [])

  let selectedEvent
  if (select === 1) {
    selectedEvent = <TextField multiline className={classes.form} onChange={e => setEvent({ ...event, money: e.target.value })} id="outlined-basic" label="Бюджет" variant="outlined" />
  } else if (select === 2) {
    selectedEvent = <>
      <TextField multiline className={classes.form} onChange={e => setEvent({ ...event, where: e.target.value })} id="outlined-basic" label="Куда?" variant="outlined" />
      <TextField multiline className={classes.form} onChange={e => setEvent({ ...event, time: e.target.value })} id="outlined-basic" label="Во сколько?" variant="outlined" />
    </>
  } else if (select === 3) {
    selectedEvent = <TextField multiline className={classes.form} onChange={e => setEvent({ ...event, text: e.target.value })} id="outlined-basic" label="Текст" variant="outlined" />
  }

  function saveEvent() {
    setEvents([...events, { ...event, id: Date.now(), type: select }])
    localStorage.setItem('events', JSON.stringify(events))
    console.log(events)
  }

  const eventdate = (date) => {
    setEvent({ ...event, date: date })
    return 1
  }

  return (
    <div>
      <h1>Добавить событие</h1>
      <Container className={classes.container}>
        <Datepicker className={classes.date} startDate={eventdate}/>
        <TextField multiline onChange={e => setEvent({ ...event, title: e.target.value })} className={classes.block} id="outlined-basic" label="Название события" variant="outlined" />
        <FormControl className={classes.form}>
          <InputLabel>Тип события</InputLabel>
          <Select onChange={e => setSelect(e.target.value)}>
            <MenuItem value={1}>Праздничные дни</MenuItem>
            <MenuItem value={2}>Мероприятия</MenuItem>
            <MenuItem value={3}>Пометки</MenuItem>
          </Select>
        </FormControl>
        {selectedEvent}
        <Link to={'/development'}>
          <Button onClick={saveEvent}>
            Отмена
          </Button>
        </Link>
        <Link to={'/add'}>
          <Button onClick={saveEvent}>
            Сохранить
          </Button>
        </Link>
      </Container>
    </div>
  )
}

export default AddEvent
