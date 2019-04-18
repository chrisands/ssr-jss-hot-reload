import React from 'react'
import withStyles from 'react-jss'

const styles = {
  children: {
    display: 'flex',
  },
}

const Children = ({ classes }) => (
  <div
    className={classes.children}
  >
    test children
  </div>
)

export default withStyles(styles)(Children)
