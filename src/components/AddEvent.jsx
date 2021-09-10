import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Button, Container, FormControl, InputLabel, MenuItem, Select, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Datepicker from './Datapicker'

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: 350,
  },
  form: {
    minWidth: 200,
    marginBottom: 20
  },
  button: {
    marginRight: 20
  },
  data: {
    marginRight: 'auto',
    marginLeft: 'auto'
  }
}));

const AddEvent = () => {
  const classes = useStyles();

  const [select, setSelect] = useState()
  const [event, setEvent] = useState({data: "2021-09-10"})
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
  }

  const eventData = (e) => {
    setEvent({ ...event, data: e })
  }

  return (
    <div>
      <h1>Добавить событие</h1>
      <Container className={classes.container}>
        <Datepicker className={classes.data} eventData={eventData}/>
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
        <Button className={classes.button} variant="contained" color="primary" component={Link} to={'/development'}>Отмена</Button>
        <Button onClick={saveEvent} variant="contained" color="primary" component={Link} to={'/add'}>Сохранить</Button>
      </Container>
    </div>
  )
}

export default AddEvent
