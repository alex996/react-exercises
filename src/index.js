import React from 'react'
import { render } from 'react-dom'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { red, amber } from '@material-ui/core/colors'
import App from './Components/App'

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
  spacing: 10,
  props: {
    MuiWithWidth: {
      initialWidth: 'lg'
    }
  }
})

render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
)
