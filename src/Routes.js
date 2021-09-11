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
        path={'/development'}
        exact
      />
      <Route
        render={() => <AddEvent />}
        path={'/add'}
        exact
      />
      <Route
        render={() => <EditEvent />}
        path={'/edit'}
        exact
      />
      <Redirect to={'/development'} />
    </div>
  )
}

export default routes
