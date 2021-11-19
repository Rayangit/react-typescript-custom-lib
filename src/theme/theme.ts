import {createTheme} from '@mui/material'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#000'
    }
  },
  typography: {
    h1: {
      fontSize: 10
    },
    h2: {
      fontSize: 102
    },
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(',')
  }
})
