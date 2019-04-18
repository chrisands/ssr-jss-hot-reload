import React from 'react'
import withStyles from 'react-jss'

const styles = {
  app: {
    padding: 20,
    backgroundColor: '#EEE',
  },
  element: {
    margin: 50,
    width: '200px',
    height: '200px',
    borderRadius: 5,
    backgroundColor: '#999',
  },
}

const App = ({
  classes,
  children,
  testProp = {},
}) => (
  <div
    className={classes.app}
  >
    <div
      className={classes.element}
      style={testProp}
    >
      {children}
    </div>
  </div>
)

export default withStyles(styles)(App)
