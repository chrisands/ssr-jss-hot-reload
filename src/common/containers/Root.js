import React from 'react'
import { hot } from 'react-hot-loader'
import { ConnectedRouter } from 'connected-react-router'
import { Provider } from 'react-redux'
import IntlProvider from './IntlProvider'
import Routes from './Routes'

const Root = ({ store, history }) => (
  <Provider store={store}>
    <IntlProvider>
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
    </IntlProvider>
  </Provider>
)

export default hot(module)(Root)
