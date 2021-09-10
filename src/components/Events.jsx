import { Box, Button, Card, Container, Typography } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
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
  box: {
    maxWidth: 550,
    maxHeight: 500,
  },
  card: {
    minWidth: 500,
    height: 98,
    backgroundColor: 'white',
    border: 'solid 1px'
  }
}));

const Development = () => {
  const classes = useStyles();
  const [events, setEvents] = useState([])
  const [data, setData] = useState(["2021-09-10"])

  useEffect(() => {
    if (localStorage.getItem("events")) {
      setEvents(JSON.parse(localStorage.getItem("events")))
      console.log(data)
    }
  }, data)


  const eventData = (e) => {
    setData([e])
    console.log(data[0])
    return e
  }


  return (
    <Container className={classes.container} maxWidth='lg'>
      <div>
        <Datepicker eventData={eventData} />
        <Button variant="contained" color="primary" component={Link} to={'/add'}>Добавить</Button>
      </div>
      {events.filter(elem => elem.data === data[0]).length > 0 &&
        <Box className={classes.box} overflow="scroll">
          {events.filter(elem => elem.data === data[0]).map(e =>
            <Card className={classes.card} key={e.id}>
              {console.log(data[0], e.data)}
              <Typography variant='h5'>{e.title}</Typography>
              {e.type === 1 ? <Typography variant='h6'>бюджет: {e.money}</Typography>
                : e.type === 2 ? <>
                  <Typography variant='h6'>где: {e.where}</Typography>
                  <Typography variant='h6'>Во сколько: {e.time}</Typography>
                </> : <Typography variant='h6'>{e.text}</Typography>}
            </Card>
          )}
        </Box>
      }
    </Container>
  )
}

export default Development