import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import React, {useReducer} from 'react'
import './App.css'
import LandingPage from './components/LandingPage'
import MainContext from './Context/MainContext';
import MainReducer from './Context/MainReducer';
import Education from './components/Education'
import NavBar from './components/shared/NavBar';



function App() {
  const theme = createMuiTheme()
  const [state, dispatch] = useReducer(MainReducer, {isResumeOpen: false})

  theme.typography.h3 = {
    fontSize: '1.6rem',
    '@media (min-width:600px)': {
      fontSize: '2.2rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '3rem',
    }
  }

  const setIsResumeOpen = (isResumeOpen) => {
    dispatch({
      type: 'SET_IS_RESUME_OPEN',
      payload: isResumeOpen
    })
  }

  return (
    <MainContext.Provider
      value={{
        isResumeOpen: state.isResumeOpen,
        setIsResumeOpen
      }}>
    <ThemeProvider theme={theme}>
      <div className="App">


        {!state.isResumeOpen && <div className="LandingPage"><LandingPage /></div>}
        {state.isResumeOpen && <NavBar />}

        {/* {state.isResumeOpen && <Education />} */}
      </div>
    </ThemeProvider>
    </MainContext.Provider>
  );
}

export default App


