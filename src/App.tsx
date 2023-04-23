import React from 'react';
import './App.css';
import { useState } from 'react';

import Game from './components/Game/Game';
import GameOver from './components/GameOver/GameOver';
import NotStarted from './components/NotStarted/NotStarted';

import GameClass from './classes/GameClass';
const myGame = new GameClass();


function App() {
  
  const [gamePhase, setGamePhase] = useState(myGame.phase)

  const handleStartGame = ():void => {
    console.log('Game Started!');
    myGame.start();
    setGamePhase(myGame.phase)
  }

  const handleGameOver = () => {
    console.log('Game over! :(');
    myGame.end();
    setGamePhase(myGame.phase)
  }

  const screenToShow = () => {
    switch(myGame.phase){
      case 'init':
        return (<NotStarted fHandleStartGame={handleStartGame}/>)
      case 'started':
        return (
        <Game game={myGame} fHandleGameOver={handleGameOver}/>
        )
      case 'ended':
        return (<>
          <GameOver score={myGame.score} playTime={myGame.startDate} fHandleStartGame={handleStartGame}/>
        </>
        )
      default:
        return (<div></div>)
    }
  }



  return (
    <div className="App">
      {screenToShow()}
    </div>
  );
}

export default App;
