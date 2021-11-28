import React, { useState, useContext, useEffect, useCallback } from 'react';
import Paper from './images/icon-paper.svg';
import Rock from './images/icon-rock.svg';
import Scissors from './images/icon-scissors.svg';

const AppContext = React.createContext()

const options = {
    "rock" : {id:1, name:'rock', icon: Rock, primaryColor: 'hsl(349, 71%, 52%)', secondaryColor:'hsl(349, 70%, 56%)'},
    "paper" : {id:2, name:'paper', icon: Paper, primaryColor: 'hsl(230, 89%, 62%)', secondaryColor:'hsl(230, 89%, 65%)'},
    "scissors" : {id:3, name:'scissors', icon: Scissors, primaryColor: 'hsl(39, 89%, 49%)', secondaryColor:'hsl(40, 84%, 53%)'},
}

const max = Object.keys(options).length;

const AppProvider = ({ children }) => {
  const [start, setStart] = useState(false);
  const [housePick, setHousePick] = useState("");
  const [playerPick, setPlayerPick] = useState("");
  const [result, setResult] = useState("");
  const [win, setWin] = useState(false);
  const [score, setScore] = useState(0);

  const startGame = () => {
    setStart(true);
    // setHousePick("");
    // setPlayerPick("");
    let randomNum = Math.floor(Math.random() * max);
    let randomPick = Object.keys(options);
    setHousePick(randomPick[randomNum]);
    console.log("house choose " + randomPick[randomNum])
  };

  const restartGame = () => {
    console.log("restart");
    setHousePick("");
    setPlayerPick("");
    setStart(false);
    setWin(false);
  }

  const compare = useCallback(() => {
    console.log(playerPick);
    let diff = options[playerPick].id - options[housePick].id;
    if(diff === 1 || diff === -2){
        console.log("player wins"); 
        setResult("you win");
        setScore(score + 1);
        setWin(true);
    }
    else if(diff === 2 || diff === -1){
        console.log("house wins");
        setResult("you loose"); 
        // setWin(false);
    }
    else if(diff === 0){
        console.log("draw");
        setResult("draw");
        // setWin(false)
    } 
    // setStart(false);
  },[playerPick, housePick, score])

  useEffect( () => {
    if(start){
       compare();
    }
  },[playerPick])

  return <AppContext.Provider 
    value={{
        startGame,
        setPlayerPick,
        playerPick,
        housePick,
        start,
        result,
        score,
        restartGame,
        win,
      
    }}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider, options }