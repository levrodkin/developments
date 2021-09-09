import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
  },
}));

const App = () => {

  const classes = useStyles();

  return (
    <BrowserRouter>
      <Container  className={classes.container} maxWidth='lg'>
        <Routes />
      </Container>
    </BrowserRouter>
  )
}

export default App

