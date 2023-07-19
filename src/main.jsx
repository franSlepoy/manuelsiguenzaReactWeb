import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'



import './index.css'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: "#12122f",
    },
    secondary: {
      main: '#fafafa;',
    },
    background: {
      default: "#fafafa;",
      paper:"#fafafa;"
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme} >
    <CssBaseline/>
    <App />
    </ThemeProvider>
  </React.StrictMode>,
)
