import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Button, Container, FormControl, InputLabel, MenuItem, Select, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: 270,
  },
  form: {
    minWidth: 200,
  },
}));

const AddEvent = () => {
  const classes = useStyles();

  const [select, setSelect] = useState()
  const [event, setEvent] = useState()
  let selectedEvent

  if (select === 1) {
    selectedEvent = <TextField onChange={e => setEvent({...event, money: e.target.value})} id="outlined-basic" label="Бюджет" variant="outlined" />
  } else if (select === 2) {
    selectedEvent = <>
      <TextField onChange={e => setEvent({...event, where: e.target.value})} id="outlined-basic" label="Куда?" variant="outlined" />
      <TextField onChange={e => setEvent({...event, time: e.target.value})} id="outlined-basic" label="Во сколько?" variant="outlined" />
    </>
  } else if (select === 3) {
    selectedEvent = <TextField onChange={e => setEvent({...event, title: e.target.value})} id="outlined-basic" label="Текст" variant="outlined" />
  }
  
  function saveEvent () {
    setEvent({...event, id: Date.now})
    localStorage.setItem(`event${event.id}`, JSON.stringify(event))
  }

  return (
    <div>
      <h1>Добавить событие</h1>
      <Container className={classes.container}>
        <TextField onChange={e => setEvent({...event, title: e.target.value})} className={classes.block} id="outlined-basic" label="Название события" variant="outlined" />
        <FormControl className={classes.form}>
          <InputLabel>Тип события</InputLabel>
          <Select onChange={e => setSelect(e.target.value)}>
            <MenuItem value={1}>Праздничные дни</MenuItem>
            <MenuItem value={2}>Мероприятия</MenuItem>
            <MenuItem value={3}>Пометки</MenuItem>
          </Select>
        </FormControl>
        {selectedEvent}
        <Button variant="contained" color="primary" component={Link} to={'/development'}>Отмена</Button>
        <Button onClick={saveEvent} variant="contained" color="primary" component={Link} to={'/add'}>Созранить</Button>
      </Container>
    </div>
  )
}

export default AddEvent
