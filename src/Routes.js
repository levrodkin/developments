import React from 'react'
import { Redirect, Route } from 'react-router'
import AddEvent from './components/AddEvent'
import Development from './components/Development'

const routes = () => {
  return (
    <div>
      <Route
          component={Development}
          path={'/development'}
          exact={true}
        />
        <Route
          component={AddEvent}
          path={'/add'}
          exact={true}
        />
        <Redirect to={'/development'}/>
    </div>
  )
}

export default routes
