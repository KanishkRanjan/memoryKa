import { useState } from 'react'

import MainScreen  from './components/mainScreen.jsx'
import GameScreen from './components/gameScreen.jsx'
import './App.css'


import {pickRandom} from './utils/random_wrapper.js'



function App() {


  const difficulty = {
    easy : {type: "easy" , box : 12 , time : 60 , score_multiplier : 1},
    medium : {type: "medium",box : 16 , time : 75 , score_multiplier : 2},
    hard : {type: "hard",box : 24 , time : 120 , score_multiplier : 3},
  }

  const theme = {
    animals: ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯', '🦁', '🐮', '🐷', '🐸'],
    food: ['🍎', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🫐', '🍒', '🍑', '🥭', '🍍', '🥥'],
    faces: ['😀', '😃', '😄', '😁', '😆', '😅', '🤣', '😂', '🙂', '😊', '😇', '🥰', '😍', '🤩'],
    nature: ['🌲', '🌴', '🌵', '🌷', '🌹', '🌺', '🌸', '🌼', '🌻', '🌞', '⭐', '🌈', '☁️', '❄️']
  }

  const [gameDifficulty , setGameDifficulty] = useState(difficulty["easy"]);
  const [gameTheme , setGameTheme ] = useState(theme[Object.keys(theme)[pickRandom(theme.length)]])
  const [gameStarted , setGameStarted] = useState(false)
  const [gameCompleted , setGameCompleted] = useState(false)
  const setDifficulty = (diff)=> {
    setGameDifficulty(difficulty[diff]);
    setGameTheme(theme[Object.keys(theme)[pickRandom(Object.keys(theme).length)]])
    setGameStarted(true);
  }
  console.log("complete: " , gameCompleted);
  
  return (
    <>
      {!gameStarted && (
         <MainScreen levelChooser = {setDifficulty} />
      )}

      {gameStarted && ! gameCompleted && (
        <GameScreen gameCompleted={setGameCompleted} gameTheme={gameTheme} gameDifficulty = {gameDifficulty }/>
      )}

      {gameCompleted && (
        <div className="completedWindown">
          <h1>You Win 👑👑</h1>
        </div>
      )}
    </>
  )
}

export default App
