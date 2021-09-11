import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import {Context} from './Api/context'

const App = () => {

  const [editEvent, setEditEvent] = useState([]);
  const D = new Date()
  const [event, setEvent] = useState(
    { date: `${D.getMonth() + 1}/${D.getDate()}/${D.getFullYear()}`, title: '', money: '', where: '', time: '', text: '' })

  return (
    <BrowserRouter>
      <Context.Provider value={{ editEvent, setEditEvent, event, setEvent }}>
        <Routes />
      </Context.Provider>
    </BrowserRouter>
  )
}

export default App

