import React, { useState, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import { Context } from './Api/context'

const App = () => {

  const [editableEvent, setEditableEvent] = useState([]);
  const D = new Date()
  const [event, setEvent] = useState(
    { date: `${D.getMonth() + 1}/${D.getDate()}/${D.getFullYear()}`, title: '', money: '', where: '', time: '', text: '' })

  return (
    <BrowserRouter>
      <Context.Provider value={{ editableEvent, setEditableEvent, event, setEvent }}>
        <Routes />
      </Context.Provider>
    </BrowserRouter>
  )
}

export default App

