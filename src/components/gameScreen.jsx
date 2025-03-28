import React, { useState, useEffect } from "react";
import "../style/gameScreen.css";
import Card from "./card";

const GameScreen = ({ gameDifficulty, gameTheme , gameCompleted }) => {
  const [moves, setMoves] = useState(0);
  const [time, setTime] = useState(gameDifficulty.time);
  const [score, setScore] = useState(0);
  const [flippedIndex, setFlippedIndex] = useState([]);
  const [theme, setTheme] = useState([]); // Store theme in state
  const [totalSolved , setTotalSolved ] = useState(0)
  useEffect(() => {
    let shuffledTheme = [...gameTheme]
      .sort(() => Math.random() - 0.5)
      .slice(0, gameDifficulty.box / 2);

    shuffledTheme = [...shuffledTheme, ...shuffledTheme].sort(() => Math.random() - 0.5);

    const finalTheme = shuffledTheme.map((emoji, index) => ({
      index,
      emoji,
      isFlipped: false,
      isSolved: false,
    }));

    setTheme(finalTheme); // Store theme only once
  }, []); // Runs only on mount
  console.log(theme)
  
  return (
    <>
      <div className="info">
        <h1>
        🔍 Game Rules </h1>
 <p>✅ You can flip only two cards at a time.</p>
<p>✅ Matched pairs stay flipped, unmatched pairs flip back.</p>
<p>✅ The game continues until all cards are matched.</p>
<p>✅ The fewer moves you use, the better your score!</p>

        <div className="moves">
          <h3>Moves: {moves}</h3>
        </div>

      </div>

      <div className={`container difficulty-${gameDifficulty.type}`}>
        {theme.map((item) => (
          <Card
            key= {item.index}
            difficulty= { gameDifficulty.type}
            cardInfo= {item}
            setMoves= {setMoves}
            totalMoves = {moves}
            totalSolved = {totalSolved}
            setTotalSolved = {setTotalSolved}
            flippedIndex= {flippedIndex}
            setFlippedHandler= {setFlippedIndex}
            endGame = { gameCompleted }
            required = {gameDifficulty.box / 2}
          />
        ))}
      </div>
    </>
  );
};

export default GameScreen;
