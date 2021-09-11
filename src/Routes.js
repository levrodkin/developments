import React from 'react'
import { Redirect, Route } from 'react-router'
import AddEvent from './components/AddEvent'
import EditEvent from './components/EditEvent'
import Development from './components/Events'


const routes = () => {
  return (
    <div>
      <Route
        render={() => <Development />}
        path={'/events'}
        exact
      />
      <Route
        render={() =><AddEvent />}
        path={'/add'}
        exact
      />
      <Route
        render={() => <EditEvent />}
        path={'/edit'}
        exact
      />
    </div>
  )
}

export default routes
