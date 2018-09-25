import React from 'react'
import { hydrate } from 'react-dom'
import JssProvider from 'react-jss/lib/JssProvider'
import {
  createGenerateClassName, MuiThemeProvider
} from '@material-ui/core/styles'
import App from './Components/App'
import theme from './theme'

const generateClassName = createGenerateClassName()

hydrate(
  <JssProvider generateClassName={generateClassName}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </JssProvider>,
  document.getElementById('root'),
  () => {
    document.getElementById('jss-styles').remove()
  }
)
