import React from 'react'
import { Redirect, Route } from 'react-router'
import AddEvent from './pages/AddEvent'
import EditEvent from './pages/EditEvent'
import Development from './pages/Events'


const routes = () => {
  return (
    <div>
      <Route
        render={() => <Development />}
        path={'/'}
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
