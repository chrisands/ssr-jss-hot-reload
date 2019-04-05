/* eslint-disable react/no-danger */
import React from 'react'
import { Helmet } from 'react-helmet'

const Page = ({
  locale,
  markup,
  initialState,
  sheets,
  assets,
  outputPath,
}) => {
  const helmet = Helmet.renderStatic()
  const getOutputPath = () => (outputPath === '/' ? '' : outputPath)

  const renderHead = () => (
    <head>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
      {assets
        .filter(path => path.endsWith('.css'))
        .map(path => (<link key={path} rel='stylesheet' href={`${getOutputPath()}/${path}`} />))}
      <style type='text/css' id='server-side-styles'>{sheets.toString()}</style>
      <title>Jss Test</title>

      {helmet.title.toComponent()}
      {helmet.meta.toComponent()}
      {helmet.link.toComponent()}
    </head>
  )

  return (
    <html lang={locale}>
      {renderHead()}
      <body>
        <div
          id='root'
          dangerouslySetInnerHTML={{ __html: markup }}
        />
        <script
          dangerouslySetInnerHTML={{ __html: `window.initialState=${initialState};` }}
        />
        {assets
          .filter(path => path.endsWith('.js'))
          .map(path => (<script key={path} src={`${getOutputPath()}/${path}`} />))}
      </body>
    </html>
  )
}

export default Page
