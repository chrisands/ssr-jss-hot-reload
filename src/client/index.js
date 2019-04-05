import React from 'react'
import { hydrate } from 'react-dom'
import { createBrowserHistory } from 'history'
import Root from '../common/containers/Root'
import { configureStore } from '../common/store'
import './index.css'

const history = createBrowserHistory()

const { store } = configureStore({}, history)

hydrate(
  <Root
    store={store}
    history={history}
  />,
  document.getElementById('root'),
  () => {
    const styles = document.getElementById('server-side-styles')
    styles.parentElement.removeChild(styles)
  },
)
