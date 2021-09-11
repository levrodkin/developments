import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import {Context} from './Api/context'

const App = () => {

  const [editEvent, setEditEvent] = useState([]);

  return (
    <BrowserRouter>
      <Context.Provider value={{ editEvent, setEditEvent }}>
        <Routes />
      </Context.Provider>
    </BrowserRouter>
  )
}

export default App

