import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import React from 'react'
import './App.css'
import LandingPage from './components/LandingPage'



function App() {
  const theme = createMuiTheme()

  theme.typography.h3 = {
    fontSize: '1.6rem',
    '@media (min-width:600px)': {
      fontSize: '2.2rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '3rem',
    }
  }

 

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <LandingPage/>
      </div>
    </ThemeProvider>
  );
}

export default App


