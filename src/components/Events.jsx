import { Button, Container } from '@material-ui/core'
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Datepicker from './Datapicker'
import { Link } from 'react-router-dom';



const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 150
  },
}));

const Development = () => {
  const classes = useStyles();

  const [events, setEvents] = useState()

  const createEvent = () => {
    setEvents([...events])
  }

  return (
    <Container className={classes.container} maxWidth='lg'>
      <div>
        {console.log(JSON.parse(localStorage.getItem("event")))}
        <Datepicker/>
        <Button variant="contained" color="primary" component={Link} to={'/add'}>Добавить</Button>
      </div>
    </Container>
  )
}

export default Development