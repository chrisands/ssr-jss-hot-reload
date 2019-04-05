/* eslint-disable no-console */
import { join } from 'path'
import Express from 'express'
import webpack from 'webpack'
import devMiddleware from 'webpack-dev-middleware'
import hotMiddleware from 'webpack-hot-middleware'
import config from '../config/webpack/dev.babel'
import configureApp from '../src/server'

let app = new Express()

const compiler = webpack(config)

app.use(devMiddleware(compiler, {
  publicPath: config.output.publicPath,
  serverSideRender: true,
}))
app.use(hotMiddleware(compiler))

app.use(Express.static(join(__dirname, '../assets')))

const start = () => {
  const port = process.env.PORT || 8000

  app = configureApp(app)

  app.listen(port, (error) => {
    if (error) {
      throw error
    }

    console.info(`
Development server running at:
– http://localhost:${port}
    `)
  })
}

start()
