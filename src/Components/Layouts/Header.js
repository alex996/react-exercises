import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { Dialog } from '../Exercises'

const styles = {
  flex: {
    flex: 1
  }
}

const Header = ({ classes }) => (
  <AppBar position='static'>
    <Toolbar>
      <Typography
        variant='h5'
        color='inherit'
        className={classes.flex}
      >
        Exercise Database
      </Typography>

      <Dialog />
    </Toolbar>
  </AppBar>
)

export default withStyles(styles)(Header)
