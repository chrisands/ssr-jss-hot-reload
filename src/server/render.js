import React from 'react'
import { renderToString } from 'react-dom/server'
import { createStore } from 'redux'
import { StaticRouter } from 'react-router'
import { createMemoryHistory } from 'history'
import { Provider } from 'react-redux'
import { createGenerateId, JssProvider, SheetsRegistry } from 'react-jss'
import IntlProvider from '../common/containers/IntlProvider'
import Routes from '../common/containers/Routes'
import createRootReducer from '../common/reducers'
import Page from './page'

export default () => (req, res) => {
  const history = createMemoryHistory()

  const store = createStore(createRootReducer(history))

  const sheets = new SheetsRegistry()
  const generateId = createGenerateId()

  const assets = res.locals.webpackStats.toJson().assetsByChunkName
  const { outputPath } = res.locals.webpackStats.toJson()

  const context = {}

  const markup = renderToString(
    <Provider store={store}>
      <JssProvider registry={sheets} generateId={generateId}>
        <IntlProvider>
          <StaticRouter location={req.url} context={context}>
            {Routes()}
          </StaticRouter>
        </IntlProvider>
      </JssProvider>
    </Provider>,
  )

  const initialState = JSON.stringify(store.getState())

  const page = renderToString(
    <Page
      markup={markup}
      initialState={initialState}
      sheets={sheets}
      assets={assets.main}
      outputPath={outputPath}
    />,
  )

  if (context.status === 404) {
    res.status(404)
  }

  res.send(`<!doctype html>${page}`)
}
