import { createMuiTheme } from '@material-ui/core/styles'
import { red, amber } from '@material-ui/core/colors'

export default createMuiTheme({
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
