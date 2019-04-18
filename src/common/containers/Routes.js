import React from 'react'
import { Route, Switch } from 'react-router'
import App from './App'
import Children from './Children'

const Routes = () => (
  <App>
    <Switch>
      <Route
        path='/'
        component={Children}
      />
    </Switch>
  </App>
)

export default Routes
