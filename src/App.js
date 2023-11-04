import React, { useState} from 'react';
import styled, {ThemeProvider} from 'styled-components'

//components
import Game from './components/Game'
import GameOver from './components/GameOver';
import InitialMenu from './components/InitialMenu'
import GameWin from './components/GameWin';
import About from './components/About';

//context
import ScreenContext from './contexts/ScreenContext'

const defaultTheme = {
  background: '#745CB3',
  color: 'white',
  acceptButton: {
    background: '#53C94C',
    color: 'white',
  },
  rejectButton: {
    background: '#E64D27',
    color: 'white',
  },
  questionButton: {
    background: '#E5AC27',
    color: 'white',
  },
}

function getScreenComponent(screenName) {
  switch(screenName){
    case 'InitialMenu':
      return <InitialMenu/>;
    case 'About':
      return <About/>
    case 'Game':
      return <Game/>;
    case 'GameOver':
      return <GameOver/>
    case 'GameWin':
      return <GameWin/>
    default:
      return <InitialMenu/>;
  }  
}

function App(){
  const [currentScreen, setCurrentScreen] = useState('InitialMenu');

  const changeScreen = (screenName) => {
    setCurrentScreen(screenName);
  };

  return(
      <ThemeProvider theme={defaultTheme}>
        <ScreenContext.Provider value={{ changeScreen:  changeScreen }}>

        {getScreenComponent(currentScreen)}

        </ScreenContext.Provider>
      </ThemeProvider>
  );
}

export default App;
