import cookieParser from 'cookie-parser'
import render from './render'

export default (app) => {
  app.use(cookieParser())

  app.use('/health', (req, res) => res.status(200).send())

  app.use(render())

  return app
}
