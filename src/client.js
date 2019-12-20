import React from 'react'
import { hydrate } from 'react-dom'
import { ThemeProvider } from '@material-ui/core/styles'
import App from './Components/App'
import theme from './theme'

hydrate(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root'),
  () => {
    document.getElementById('jss-styles').remove()
  }
)
