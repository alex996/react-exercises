import '@babel/polyfill'
import React from 'react'
import { render } from 'react-dom'
import { ThemeProvider, createMuiTheme } from '@material-ui/core'
import { red, amber } from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette: {
    primary: red,
    secondary: {
      main: amber.A400,
      light: amber[200],
      dark: amber[700]
    },
    type: 'dark'
  },
  spacing: 10
})

import(/* webpackChunkName: 'app' */ './Components/App')
  .then(({ default: App }) =>
    render(
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>,
      document.getElementById('root')
    )
  )

