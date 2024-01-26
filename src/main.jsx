import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#00ad3a',
    },
    secondary: {
      main: '#ff02a5',
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {/*Este es un comentario: CssBaseline --> para un reseteo del css, todo del mismo tamaño, etc  */}
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
