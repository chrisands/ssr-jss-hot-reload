import React from 'react'
import { Route, Switch } from 'react-router'
import App from './App'

const Routes = () => (
  <Switch>
    <Route path='/' component={App} />
  </Switch>
)

export default Routes
